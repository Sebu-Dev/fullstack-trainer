package com.example.fullstack_trainer_backend.question;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.fullstack_trainer_backend.question.category.Category;
import com.example.fullstack_trainer_backend.question.category.CategoryService;
import com.example.fullstack_trainer_backend.question.dtos.ValidationErrorResponse;
import com.example.fullstack_trainer_backend.question.dtos.option.RequestOptionDto;
import com.example.fullstack_trainer_backend.question.dtos.option.ResponseOptionDto;
import com.example.fullstack_trainer_backend.question.dtos.question.RequestQuestionDto;
import com.example.fullstack_trainer_backend.question.dtos.question.ResponseQuestionDto;
import com.example.fullstack_trainer_backend.question.option.Option;

@Service
public class QuestionService {
    private static final Logger logger = LoggerFactory.getLogger(QuestionService.class);
    private final CategoryService categoryService;
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository, CategoryService categoryService) {
        this.questionRepository = questionRepository;
        this.categoryService = categoryService;
    }

    public List<ResponseQuestionDto> getAllQuestions() {
        return questionRepository.findAll().stream()
                .map(this::convertToResponseDto)
                .collect(Collectors.toList());
    }

    private RequestQuestionDto convertToDto(Question question) {
        RequestQuestionDto dto = new RequestQuestionDto();
        dto.setText(question.getText());
        dto.setDifficulty(question.getDifficulty().name());
        dto.setExplanation(question.getExplanation());
        dto.setImageUrl(question.getImageUrl());
        dto.setMaxPoints(question.getMaxPoints());
        dto.setCategories(question.getCategories().stream()
                .map(Category::getName)
                .collect(Collectors.toList()));
        dto.setOptions(question.getOptions().stream()
                .map(option -> new RequestOptionDto(option.getText(), option.isCorrect()))
                .collect(Collectors.toList()));
        return dto;
    }

    private ResponseQuestionDto convertToResponseDto(Question question) {
        return new ResponseQuestionDto(
                question.getId(),
                question.getText(),
                question.getDifficulty().name(),
                question.getExplanation(),
                question.getImageUrl(),
                question.getMaxPoints(),
                question.getCategories().stream()
                        .map(Category::getName)
                        .collect(Collectors.toList()),
                question.getOptions().stream()
                        .map(option -> new ResponseOptionDto(option.getId(), option.getText(), option.isCorrect()))
                        .collect(Collectors.toList()));
    }

    public Optional<Question> getQuestionById(Long id) {
        if (id == null || id <= 0) {
            logger.error("Ungültige ID für Frage: {}", id);
            return Optional.empty();
        }
        return questionRepository.findById(id);
    }

    @Transactional
    public SaveResultWithErrors saveAll(List<RequestQuestionDto> questionsDto) {
        List<Question> toSave = new ArrayList<>();
        List<String> failedQuestionsText = new ArrayList<>();
        List<ValidationErrorResponse> validationErrors = new ArrayList<>();

        for (RequestQuestionDto questionDto : questionsDto) {
            try {
                List<String> errors = validateQuestionDto(questionDto);
                if (!errors.isEmpty()) {
                    logger.error("Validierungsfehler bei Frage '{}': {}. Frage: {}",
                            questionDto.getText() != null ? questionDto.getText() : "Text fehlt",
                            String.join(", ", errors),
                            questionDto);
                    validationErrors.add(new ValidationErrorResponse(
                            questionDto.getText() != null ? questionDto.getText() : "Text fehlt",
                            errors,
                            questionDto));
                    failedQuestionsText.add(questionDto.getText() != null ? questionDto.getText() : "Text fehlt");
                    continue;
                }

                Optional<Question> existingOpt = questionRepository.findByText(questionDto.getText());
                if (existingOpt.isPresent()) {
                    Question existingQuestion = existingOpt.get();
                    updateExistingQuestion(existingQuestion, questionDto);
                    toSave.add(existingQuestion);
                } else {
                    toSave.add(convertToEntity(questionDto));
                }
            } catch (Exception e) {
                logger.error("Fehler beim Verarbeiten von Frage '{}': {}",
                        questionDto.getText() != null ? questionDto.getText() : "Text fehlt", e.getMessage(), e);
                failedQuestionsText.add(questionDto.getText() != null ? questionDto.getText() : "Text fehlt");
            }
        }

        SaveResult saveResult = saveAndHandleErrors(toSave, failedQuestionsText);
        return new SaveResultWithErrors(saveResult, validationErrors);
    }

    @Transactional
    public SaveResultWithErrors saveBulk(List<RequestQuestionDto> questionDtos) {
        List<Question> toSave = new ArrayList<>();
        List<String> skippedQuestions = new ArrayList<>();
        List<ValidationErrorResponse> validationErrors = new ArrayList<>();

        for (RequestQuestionDto dto : questionDtos) {
            try {
                List<String> errors = validateQuestionDto(dto);
                if (!errors.isEmpty()) {
                    logger.error("Validierungsfehler bei Frage '{}': {}. Frage: {}",
                            dto.getText() != null ? dto.getText() : "Text fehlt",
                            String.join(", ", errors),
                            dto);
                    validationErrors.add(new ValidationErrorResponse(
                            dto.getText() != null ? dto.getText() : "Text fehlt",
                            errors,
                            dto));
                    skippedQuestions.add(dto.getText() != null ? dto.getText() : "Text fehlt");
                    continue;
                }

                if (questionRepository.findByText(dto.getText()).isEmpty()) {
                    toSave.add(convertToEntity(dto));
                } else {
                    skippedQuestions.add(dto.getText());
                }
            } catch (Exception e) {
                logger.error("Fehler beim Verarbeiten von Frage '{}': {}",
                        dto.getText() != null ? dto.getText() : "Text fehlt", e.getMessage(), e);
                skippedQuestions.add(dto.getText() != null ? dto.getText() : "Text fehlt");
            }
        }

        SaveResult saveResult = saveAndHandleErrors(toSave, skippedQuestions);
        return new SaveResultWithErrors(saveResult, validationErrors);
    }

    @Transactional
    public Question createQuestion(RequestQuestionDto questionDTO) {
        List<String> validationErrors = validateQuestionDto(questionDTO);
        if (!validationErrors.isEmpty()) {
            String errorMessage = "Ungültige Frage: " + String.join(", ", validationErrors);
            logger.error(errorMessage + ". Frage: {}", questionDTO);
            throw new IllegalArgumentException(errorMessage);
        }

        if (questionRepository.findByText(questionDTO.getText()).isPresent()) {
            throw new IllegalArgumentException("Frage existiert bereits: " + questionDTO.getText());
        }
        return questionRepository.save(convertToEntity(questionDTO));
    }

    @Transactional
    public Optional<Question> updateQuestion(Long id, RequestQuestionDto questionDTO) {
        if (id == null || id <= 0) {
            logger.error("Ungültige ID für Update: {}", id);
            throw new IllegalArgumentException("Ungültige ID: " + id);
        }

        List<String> validationErrors = validateQuestionDto(questionDTO);
        if (!validationErrors.isEmpty()) {
            String errorMessage = "Ungültige Frage: " + String.join(", ", validationErrors);
            logger.error(errorMessage + ". Frage: {}", questionDTO);
            throw new IllegalArgumentException(errorMessage);
        }

        return questionRepository.findById(id)
                .map(existing -> {
                    mapQuestionFields(existing, questionDTO);
                    existing.setOptions(convertOptions(questionDTO.getOptions(), existing));
                    existing.setCategories(convertCategoriesToEntities(questionDTO.getCategories()));
                    return questionRepository.save(existing);
                });
    }

    @Transactional
    public boolean deleteQuestion(Long id) {
        if (id == null || id <= 0) {
            logger.error("Ungültige ID für Löschung: {}", id);
            return false;
        }

        return questionRepository.findById(id)
                .map(question -> {
                    questionRepository.delete(question);
                    return true;
                })
                .orElse(false);
    }

    private List<String> validateQuestionDto(RequestQuestionDto questionDto) {
        List<String> errors = new ArrayList<>();

        if (questionDto.getText() == null || questionDto.getText().trim().isEmpty()) {
            errors.add("Text fehlt");
        }

        List<RequestOptionDto> options = questionDto.getOptions();
        if (options == null || options.size() < 2) {
            errors.add("Mindestens 2 Antwortmöglichkeiten erforderlich");
        } else if (options.size() > 4) {
            errors.add("Maximal 4 Antwortmöglichkeiten erlaubt");
        } else if (options.stream().noneMatch(RequestOptionDto::isCorrect)) {
            errors.add("Mindestens eine Antwort muss korrekt sein (correct = true)");
        }

        List<String> categories = questionDto.getCategories();
        if (categories == null || categories.isEmpty()) {
            errors.add("Mindestens eine Kategorie erforderlich");
        }

        if (questionDto.getDifficulty() == null || questionDto.getDifficulty().trim().isEmpty()) {
            questionDto.setDifficulty("EASY");
        }

        if (questionDto.getExplanation() == null || questionDto.getExplanation().trim().isEmpty()) {
            errors.add("Erklärung (explanation) fehlt");
        }

        return errors;
    }

    private Question updateExistingQuestion(Question existing, RequestQuestionDto questionDto) {
        mapQuestionFields(existing, questionDto);
        existing.getOptions().clear();
        existing.getOptions().addAll(convertOptions(questionDto.getOptions(), existing));
        existing.setCategories(convertCategoriesToEntities(questionDto.getCategories()));
        return existing;
    }

    private SaveResult saveAndHandleErrors(List<Question> toSave, List<String> failedOrSkipped) {
        if (toSave.isEmpty()) {
            return new SaveResult(List.of(), failedOrSkipped);
        }

        try {
            List<Question> savedQuestions = questionRepository.saveAll(toSave);
            return new SaveResult(savedQuestions, failedOrSkipped);
        } catch (DataIntegrityViolationException e) {
            logger.warn("Integritätsverletzung beim Speichern: {}", e.getMessage());
            failedOrSkipped.addAll(toSave.stream().map(Question::getText).collect(Collectors.toList()));
            return new SaveResult(List.of(), failedOrSkipped);
        } catch (Exception e) {
            logger.error("Fehler beim Speichern: {}", e.getMessage(), e);
            failedOrSkipped.addAll(toSave.stream().map(Question::getText).collect(Collectors.toList()));
            return new SaveResult(List.of(), failedOrSkipped);
        }
    }

    private List<Option> convertOptions(List<RequestOptionDto> optionDtos, Question question) {
        return optionDtos.stream()
                .map(dto -> {
                    Option option = new Option();
                    option.setText(dto.getText());
                    option.setCorrect(dto.isCorrect());
                    option.setQuestion(question);
                    return option;
                })
                .collect(Collectors.toList());
    }

    private Set<Category> convertCategoriesToEntities(List<String> categoryNames) {
        Map<String, Category> categoryCache = new HashMap<>();
        return categoryNames.stream()
                .map(name -> categoryCache.computeIfAbsent(name, categoryService::createOrGetCategory))
                .collect(Collectors.toSet());
    }

    private void mapQuestionFields(Question target, RequestQuestionDto source) {
        target.setText(source.getText());
        target.setDifficulty(DifficultyEnum.valueOf(source.getDifficulty()));
        target.setExplanation(source.getExplanation());
        target.setImageUrl(source.getImageUrl());
        target.setMaxPoints(source.getMaxPoints());
    }

    private Question convertToEntity(RequestQuestionDto questionDTO) {
        Question question = new Question();
        mapQuestionFields(question, questionDTO);
        question.setOptions(convertOptions(questionDTO.getOptions(), question));
        question.setCategories(convertCategoriesToEntities(questionDTO.getCategories()));
        return question;
    }
}
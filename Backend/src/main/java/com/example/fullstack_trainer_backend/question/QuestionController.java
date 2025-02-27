package com.example.fullstack_trainer_backend.question;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fullstack_trainer_backend.question.dtos.QuestionDto;
import com.example.fullstack_trainer_backend.question.dtos.ValidationErrorResponse;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/quiz/questions")
@CrossOrigin(origins = {
        "https://sebu-dev.github.io/",
        "http://localhost:3000",
        "https://sebu-dev.de",
        "http://217.154.77.26:8080"
})
public class QuestionController {

    private static final Logger logger = LoggerFactory.getLogger(QuestionController.class);

    private final QuestionService questionService;
    private final ObjectMapper objectMapper;

    @Value("${feature.upload.enabled:false}")
    private boolean uploadEnabled;

    public QuestionController(QuestionService questionService, ObjectMapper objectMapper) {
        this.questionService = questionService;
        this.objectMapper = objectMapper;
    }

    @GetMapping
    public ResponseEntity<List<QuestionDto>> getAllQuestions() {
        List<QuestionDto> questions = questionService.getAllQuestions();
        questions.get(0).getOptions().get(0).isCorrect();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<?> createQuestion(@RequestBody QuestionDto questionDto) {
        try {
            Question created = questionService.createQuestion(questionDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuestion(@PathVariable Long id, @RequestBody QuestionDto questionDto) {
        try {
            return questionService.updateQuestion(id, questionDto)
                    .map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable Long id) {
        if (questionService.deleteQuestion(id)) {
            return ResponseEntity.ok("Frage gelöscht");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Frage nicht gefunden");
    }

    @PostMapping("/bulk")
    public ResponseEntity<SaveResultWithErrors> bulkCreateQuestions(@RequestBody List<QuestionDto> questionDtos) {
        SaveResultWithErrors result = questionService.saveBulk(questionDtos);
        HttpStatus status = result.getValidationErrors().isEmpty() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(result);
    }

    @PostMapping("/upload")
    public ResponseEntity<SaveResultWithErrors> uploadQuestions(@RequestParam("file") MultipartFile file) {
        if (!uploadEnabled) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new SaveResultWithErrors(
                    new SaveResult(Collections.emptyList(), List.of("Upload-Funktion ist deaktiviert")),
                    Collections.emptyList()));
        }

        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new SaveResultWithErrors(
                    new SaveResult(Collections.emptyList(), List.of("Die Datei ist leer")),
                    List.of(new ValidationErrorResponse("Datei", List.of("Die Datei ist leer"), null))));
        }

        try {
            List<QuestionDto> questionsDto = objectMapper.readValue(file.getInputStream(),
                    new TypeReference<List<QuestionDto>>() {
                    });
            SaveResultWithErrors result = questionService.saveAll(questionsDto);
            HttpStatus status = result.getValidationErrors().isEmpty() ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
            return ResponseEntity.status(status).body(result);
        } catch (Exception e) {
            String errorMessage = "Fehler beim Verarbeiten der Datei: " + e.getMessage();
            logger.error(errorMessage, e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new SaveResultWithErrors(
                    new SaveResult(Collections.emptyList(), List.of(errorMessage)),
                    List.of(new ValidationErrorResponse("Datei", List.of(errorMessage), null))));
        }
    }
}
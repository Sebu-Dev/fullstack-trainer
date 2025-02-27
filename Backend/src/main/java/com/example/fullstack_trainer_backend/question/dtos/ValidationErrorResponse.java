package com.example.fullstack_trainer_backend.question.dtos;

import java.util.List;

public class ValidationErrorResponse {
    private String questionText;
    private List<String> errors;
    private QuestionDto questionDto;

    public ValidationErrorResponse(String questionText, List<String> errors, QuestionDto questionDto) {
        this.questionText = questionText;
        this.errors = errors;
        this.questionDto = questionDto;
    }

    public String getQuestionText() {
        return questionText;
    }

    public List<String> getErrors() {
        return errors;
    }

    public QuestionDto getQuestionDto() {
        return questionDto;
    }
}
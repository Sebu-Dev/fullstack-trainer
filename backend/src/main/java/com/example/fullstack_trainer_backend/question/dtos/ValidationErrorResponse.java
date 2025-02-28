package com.example.fullstack_trainer_backend.question.dtos;

import java.util.List;

import com.example.fullstack_trainer_backend.question.dtos.question.RequestQuestionDto;

public class ValidationErrorResponse {
    private String questionText;
    private List<String> errors;
    private RequestQuestionDto questionDto;

    public ValidationErrorResponse(String questionText, List<String> errors, RequestQuestionDto questionDto) {
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

    public RequestQuestionDto getQuestionDto() {
        return questionDto;
    }
}
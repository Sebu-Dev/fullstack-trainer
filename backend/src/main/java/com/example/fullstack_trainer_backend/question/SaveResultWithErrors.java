package com.example.fullstack_trainer_backend.question;

import java.util.List;

import com.example.fullstack_trainer_backend.question.dtos.ValidationErrorResponse;

public class SaveResultWithErrors {
    private SaveResult saveResult;
    private List<ValidationErrorResponse> validationErrors;

    public SaveResultWithErrors(SaveResult saveResult, List<ValidationErrorResponse> validationErrors) {
        this.saveResult = saveResult;
        this.validationErrors = validationErrors;
    }

    public SaveResult getSaveResult() {
        return saveResult;
    }

    public List<ValidationErrorResponse> getValidationErrors() {
        return validationErrors;
    }

    public int getStatus() {
        return saveResult.getStatus().value();
    }

    public String getMessage() {
        String baseMessage = saveResult.getMessage();
        if (validationErrors.isEmpty()) {
            return baseMessage;
        } else {
            return baseMessage + " (" + validationErrors.size() + " Fragen mit Validierungsfehlern)";
        }
    }
}
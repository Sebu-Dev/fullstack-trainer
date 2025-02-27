package com.example.fullstack_trainer_backend.question;

import java.util.List;

import org.springframework.http.HttpStatus;

public class SaveResult {
    private List<Question> savedQuestions;
    private List<String> failedQuestionsText;

    public SaveResult(List<Question> savedQuestions, List<String> failedQuestionsText) {
        this.savedQuestions = savedQuestions;
        this.failedQuestionsText = failedQuestionsText;
    }

    public List<Question> getSavedQuestions() {
        return savedQuestions;
    }

    public void setSavedQuestions(List<Question> savedQuestions) {
        this.savedQuestions = savedQuestions;
    }

    public List<String> getFailedQuestionsText() {
        return failedQuestionsText;
    }

    public void setFailedQuestionsText(List<String> failedQuestionsText) {
        this.failedQuestionsText = failedQuestionsText;
    }

    public HttpStatus getStatus() {
        return failedQuestionsText.isEmpty() ? HttpStatus.OK : HttpStatus.PARTIAL_CONTENT;
    }

    public String getMessage() {
        if (failedQuestionsText.isEmpty()) {
            return "Alle Fragen erfolgreich gespeichert.";
        }
        return "Einige Fragen konnten nicht gespeichert werden: " + String.join(", ", failedQuestionsText);
    }
}

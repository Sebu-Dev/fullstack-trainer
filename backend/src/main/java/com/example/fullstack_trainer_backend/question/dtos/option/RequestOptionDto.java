package com.example.fullstack_trainer_backend.question.dtos.option;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestOptionDto {
    private String text;
    private boolean isCorrect;

}

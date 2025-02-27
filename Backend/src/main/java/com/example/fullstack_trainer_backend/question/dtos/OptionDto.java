package com.example.fullstack_trainer_backend.question.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OptionDto {
    private String text;
    private boolean isCorrect;

}

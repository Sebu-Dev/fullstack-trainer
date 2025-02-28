package com.example.fullstack_trainer_backend.question.dtos.option;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestOptionDto {
    private String text;
    private boolean correct;

}

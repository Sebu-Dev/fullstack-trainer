package com.example.fullstack_trainer_backend.question.dtos.question;

import java.util.List;

import com.example.fullstack_trainer_backend.question.dtos.option.ResponseOptionDto;

public record ResponseQuestionDto(
                Long id,
                String text,
                String difficulty,
                String explanation,
                String imageUrl,
                Integer maxPoints,
                List<String> categories,
                List<ResponseOptionDto> options) {
}

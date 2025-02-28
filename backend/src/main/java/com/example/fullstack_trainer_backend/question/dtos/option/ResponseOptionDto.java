package com.example.fullstack_trainer_backend.question.dtos.option;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ResponseOptionDto(Long id, String text, @JsonProperty("isCorrect") boolean isCorrect) {

}
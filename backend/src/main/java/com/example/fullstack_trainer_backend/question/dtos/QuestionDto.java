package com.example.fullstack_trainer_backend.question.dtos;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
public class QuestionDto {
    private String text;
    private List<String> categories;
    private String difficulty;
    private List<OptionDto> options;
    private String explanation;
    private String imageUrl;
    private Integer maxPoints;

}

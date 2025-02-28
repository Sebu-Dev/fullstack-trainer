package com.example.fullstack_trainer_backend.question.dtos.question;

import java.util.List;

import com.example.fullstack_trainer_backend.question.dtos.option.RequestOptionDto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
public class RequestQuestionDto {
    private String text;
    private List<String> categories;
    private String difficulty;
    private List<RequestOptionDto> options;
    private String explanation;
    private String imageUrl;
    private Integer maxPoints;
}

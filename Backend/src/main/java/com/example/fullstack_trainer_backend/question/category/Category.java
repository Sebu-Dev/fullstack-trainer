package com.example.fullstack_trainer_backend.question.category;

import java.util.List;

import com.example.fullstack_trainer_backend.question.Question;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

// Category.java
@Setter
@Getter
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany(mappedBy = "categories")
    private List<Question> questions;
    

}

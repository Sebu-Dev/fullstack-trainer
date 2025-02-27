package com.example.fullstack_trainer_backend.question.category;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createOrGetCategory(String name) {
        if (categoryRepository.existsByName(name)) {
            return categoryRepository.findByName(name);
        } else {
            Category newCategory = new Category();
            newCategory.setName(name);
            return categoryRepository.save(newCategory);
        }
    }
}
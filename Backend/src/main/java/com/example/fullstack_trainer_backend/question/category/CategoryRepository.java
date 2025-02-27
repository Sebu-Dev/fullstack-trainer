package com.example.fullstack_trainer_backend.question.category;



import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByName(String name); 
    Category findByName(String name);
}

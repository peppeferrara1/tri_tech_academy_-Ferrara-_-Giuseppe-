package com.tritech.EsercitazioneFinaleAcademy.services;

import com.tritech.EsercitazioneFinaleAcademy.models.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategory();
    void addCategory(Category category);
    void updateCategory(Long id, Category category);
    void deleteCategory(Long id);
}

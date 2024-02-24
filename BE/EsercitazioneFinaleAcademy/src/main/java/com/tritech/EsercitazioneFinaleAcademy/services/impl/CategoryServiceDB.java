package com.tritech.EsercitazioneFinaleAcademy.services.impl;

import com.tritech.EsercitazioneFinaleAcademy.models.Category;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.repositories.CategoryRepository;
import com.tritech.EsercitazioneFinaleAcademy.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceDB implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return this.categoryRepository.findAll();
    }

    @Override
    public void addCategory(Category category) {
        this.categoryRepository.save(category);
    }

    @Override
    public void updateCategory(Long idCategory, Category category) {
        Optional<Category> categoryInDb = this.categoryRepository.findById(idCategory);
        if (categoryInDb.isPresent()){
            Category categoryToUpdate = new Category();
            categoryToUpdate.setIdCategory(idCategory);
            categoryToUpdate.setName(category.getName());
            this.categoryRepository.save(categoryToUpdate);
        }
    }

    @Override
    public void deleteCategory(Long id) {
        this.categoryRepository.deleteById(id);
    }

    public Category findByCategoryIdCategory(Long idCategory){
        return this.categoryRepository.findCategoryByIdCategory(idCategory);
    }
}

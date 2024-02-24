package com.tritech.EsercitazioneFinaleAcademy.controllers;


import com.tritech.EsercitazioneFinaleAcademy.models.Category;
import com.tritech.EsercitazioneFinaleAcademy.services.impl.CategoryServiceDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    private CategoryServiceDB categoryService;

    @GetMapping(value = "category")
    public List<Category> getAllCategory(){
        return this.categoryService.getAllCategory();
    }

    @GetMapping(value = "categoryById")
    public Category findByCategoryIdCategory(@RequestParam("idCategory") Long idCategory){
        return this.categoryService.findByCategoryIdCategory(idCategory);
    }

    @PostMapping(value = "/category")
    public String addCategory(@RequestBody Category category){
        try{
            this.categoryService.addCategory(category);
            return "Operazione andata a buon fine";
        } catch (Exception e){
            return "Errore";
        }
    }

    @PutMapping(value = "/category")
    public void updateCategory(@RequestParam Long idCategory, @RequestBody Category category){
        this.categoryService.updateCategory(idCategory, category);
    }

    @DeleteMapping(value = "/category")
    public void deleteCategory(@RequestParam("id") Long id){
        this.categoryService.deleteCategory(id);
    }
}


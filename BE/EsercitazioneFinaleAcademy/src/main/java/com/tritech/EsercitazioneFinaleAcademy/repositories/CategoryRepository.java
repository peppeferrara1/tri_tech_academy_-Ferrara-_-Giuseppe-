package com.tritech.EsercitazioneFinaleAcademy.repositories;

import com.tritech.EsercitazioneFinaleAcademy.models.Category;
import com.tritech.EsercitazioneFinaleAcademy.models.Movements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findCategoryByIdCategory(Long idCategory);
}

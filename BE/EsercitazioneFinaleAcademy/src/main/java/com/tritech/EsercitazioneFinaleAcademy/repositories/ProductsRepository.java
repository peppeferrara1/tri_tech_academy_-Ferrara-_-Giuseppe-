package com.tritech.EsercitazioneFinaleAcademy.repositories;

import com.tritech.EsercitazioneFinaleAcademy.models.Category;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    List<Products> findByCategoryIdCategory(Long idCategory);
}

package com.tritech.EsercitazioneFinaleAcademy.repositories;

import com.tritech.EsercitazioneFinaleAcademy.models.Movements;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovementesRepository extends JpaRepository<Movements, Long> {
    List<Movements> findByProductIdProduct(Long idProduct);

}

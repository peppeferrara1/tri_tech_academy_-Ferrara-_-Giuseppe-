package com.tritech.EsercitazioneFinaleAcademy.services.impl;

import com.tritech.EsercitazioneFinaleAcademy.models.Movements;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.repositories.MovementesRepository;
import com.tritech.EsercitazioneFinaleAcademy.services.MovementesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovementesServiceDB implements MovementesService {

    @Autowired
    private MovementesRepository movementesRepository;
    @Override
    public List<Movements> getAllMovements() {
        return this.movementesRepository.findAll();
    }

    @Override
    public void addMovements(Movements movement) {
        this.movementesRepository.save(movement);
    }

    @Override
    public void updateMovements(Long idMovement, Movements movement) {
        Optional<Movements> movementsInDb = this.movementesRepository.findById(idMovement);
        if (movementsInDb.isPresent()){
            Movements movementsToUpdate = new Movements();
            movementsToUpdate.setIdMovement(idMovement);
            movementsToUpdate.setProduct(movement.getProduct());
            movementsToUpdate.setQuantityChange(movement.getQuantityChange());
            movementsToUpdate.setTimestamp(movement.getTimestamp());
            movementsToUpdate.setType(movement.getType());
            this.movementesRepository.save(movementsToUpdate);
        }
    }

    @Override
    public void deleteMovements(Long id) {
        this.movementesRepository.deleteById(id);
    }

    public List<Movements> findByProductIdProduct(Long idProduct){
        return this.movementesRepository.findByProductIdProduct(idProduct);
    }

}

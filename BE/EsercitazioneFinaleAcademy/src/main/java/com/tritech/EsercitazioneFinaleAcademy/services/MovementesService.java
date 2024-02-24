package com.tritech.EsercitazioneFinaleAcademy.services;

import com.tritech.EsercitazioneFinaleAcademy.models.Movements;

import java.util.List;

public interface MovementesService {
    List<Movements> getAllMovements();
    void addMovements(Movements movement);
    void updateMovements(Long id, Movements movement);
    void deleteMovements(Long id);
}

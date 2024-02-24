package com.tritech.EsercitazioneFinaleAcademy.controllers;

import com.tritech.EsercitazioneFinaleAcademy.models.Movements;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.services.impl.MovementesServiceDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class MovementController {

    @Autowired
    private MovementesServiceDB movementesService;

    @GetMapping(value = "movements")
    public List<Movements> getAllMovements(){
        return this.movementesService.getAllMovements();
    }

    @GetMapping(value = "movementById")
    public List<Movements> findByProductsIdProduct(@RequestParam("movementId")Long idProduct){
        return this.movementesService.findByProductIdProduct(idProduct);
    }

    @PostMapping(value = "/movements")
    public String addMovements(@RequestBody Movements movement){
        try{
            this.movementesService.addMovements(movement);
            return "Operazione andata a buon fine";
        } catch (Exception e){
            return "Errore";
        }
    }

    @PutMapping(value = "/movements")
    public void updateMovements(@RequestParam Long idMovement, @RequestBody Movements movement){
        this.movementesService.updateMovements(idMovement, movement);
    }

    @DeleteMapping(value = "/movements")
    public void deleteMovements(@RequestParam("id") Long id){
        this.movementesService.deleteMovements(id);
    }

}


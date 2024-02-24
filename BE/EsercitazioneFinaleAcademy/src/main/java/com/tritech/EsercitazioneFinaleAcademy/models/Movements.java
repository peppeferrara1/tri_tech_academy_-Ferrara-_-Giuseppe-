package com.tritech.EsercitazioneFinaleAcademy.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ferrara_movements")
public class Movements {
    @Id
    @GeneratedValue
    private Long idMovement;
    @OneToOne
    @JoinColumn(name = "product", referencedColumnName = "idProduct")
    private Products product;
    private Long quantityChange;
    private LocalDateTime timestamp;
    private String type;

    public Movements(Products product, Long quantityChange, LocalDateTime timestamp, String type) {
        this.product = product;
        this.quantityChange = quantityChange;
        this.timestamp = timestamp;
        this.type = type;
    }
}






package com.tritech.EsercitazioneFinaleAcademy.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ferrara_category")
public class Category {
    @Id
    @GeneratedValue
    private Long idCategory;
    private String name;

    public Category(String name) {
        this.name = name;
    }
}

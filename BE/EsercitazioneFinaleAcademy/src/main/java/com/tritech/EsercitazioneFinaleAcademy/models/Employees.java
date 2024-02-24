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
@Table(name = "ferrara_employees")
public class Employees {
    @Id
    @GeneratedValue
    private Long idEmployee;
    private String name;
    private String email;
    private String role;
    private String password;

    public Employees(String name, String email, String role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
}



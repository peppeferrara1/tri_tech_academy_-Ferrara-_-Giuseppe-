package com.tritech.EsercitazioneFinaleAcademy.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ferrara_products")
public class Products {
    @Id
    @GeneratedValue
    private Long idProduct;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "category", referencedColumnName = "idCategory")
    private Category category;
    private Long quantity;
    private Long price;

    public Products(String name, String description, Category category, Long quantity, Long price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }
}


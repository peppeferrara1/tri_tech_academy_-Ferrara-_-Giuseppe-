package com.tritech.EsercitazioneFinaleAcademy.services;

import com.tritech.EsercitazioneFinaleAcademy.models.Products;

import java.util.List;

public interface ProductsService {
    List<Products> getAllProducts();
    void addProducts(Products product);
    void updateProducts(Long id, Products products);
    void deleteProducts(Long id);
}

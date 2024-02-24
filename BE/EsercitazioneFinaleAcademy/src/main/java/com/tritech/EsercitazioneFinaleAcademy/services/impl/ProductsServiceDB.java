package com.tritech.EsercitazioneFinaleAcademy.services.impl;

import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.repositories.ProductsRepository;
import com.tritech.EsercitazioneFinaleAcademy.services.ProductsService;
import com.tritech.EsercitazioneFinaleAcademy.services.util.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsServiceDB implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private EmailSenderService emailSenderService;

    @Override
    public List<Products> getAllProducts() {
        return this.productsRepository.findAll();
    }

    @Override
    public void addProducts(Products product) {
        this.productsRepository.save(product);
    }

    @Override
    public void updateProducts(Long idProduct, Products product) {
        Optional<Products> productsInDb = this.productsRepository.findById(idProduct);
        if (productsInDb.isPresent()){
            Products productsToUpdate = new Products();
            productsToUpdate.setIdProduct(idProduct);
            productsToUpdate.setName(product.getName());
            productsToUpdate.setDescription(product.getDescription());
            productsToUpdate.setCategory(product.getCategory());
            productsToUpdate.setQuantity(product.getQuantity());
            productsToUpdate.setPrice(product.getPrice());
            this.productsRepository.save(productsToUpdate);
        }
        /*Questo if controlla se all'aggiornamento del prodotto la quantità del prodotto è minore di 5. Se si, dovrebbe
        mandare una mail di avviso. Ho riscontrato dei problemi nell'invio dell'email, quindi lascio commentato
        l'if riguardante la mail*/
        /*if (product.getQuantity() < 5){
            this.emailSenderService.sendEmail(product);
        }*/
    }

    @Override
    public void deleteProducts(Long id) {
        this.productsRepository.deleteById(id);
    }

    public List<Products> findByCategoryIdCategory(Long id) {
        return this.productsRepository.findByCategoryIdCategory(id);
    }
}

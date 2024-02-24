package com.tritech.EsercitazioneFinaleAcademy.controllers;

import com.tritech.EsercitazioneFinaleAcademy.models.Category;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.services.impl.ProductsServiceDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductsController {

    @Autowired
    private ProductsServiceDB productsService;

    @GetMapping(value = "products")
    public List<Products> getAllProducts(){
        return this.productsService.getAllProducts();
    }

    @GetMapping(value = "getProductsById")
    public List<Products> findByCategoryId(@RequestParam("categoryId") Long id){
        return this.productsService.findByCategoryIdCategory(id);
    }

    @PostMapping(value = "/products")
    public String addProducts(@RequestBody Products product){
        try{
            this.productsService.addProducts(product);
            return "Operazione andata a buon fine";
        } catch (Exception e){
            return "Errore";
        }
    }

    @PutMapping(value = "/products")
    public void updateProducts(@RequestParam Long idProduct, @RequestBody Products product){
        this.productsService.updateProducts(idProduct, product);
    }

    @DeleteMapping(value = "/products")
    public void deleteProducts(@RequestParam("id") Long id){
        this.productsService.deleteProducts(id);
    }
}



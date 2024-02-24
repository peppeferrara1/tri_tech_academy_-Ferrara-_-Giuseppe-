import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../inteface/products.interface';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Category } from '../../inteface/category.interface';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.css'
})
export class ProductsComponentComponent {

  products: Products[] = [];


  constructor(private productService: ProductsService, private categoryService: CategoryService, private movementService: MovementService) { }


  ngOnInit(): void {
    let index = this.categoryService.indice;
    this.getProduct(index);
  };

  getProduct(id: number) {
    this.productService.getProductsByCategoryId(id).subscribe(products => {
      this.products = products;
    })
  }

  showMovement(id: number) {
    this.productService.indice1 = id;
    let index1 = this.productService.indice1;
  }

  deleteProducts(id: number) {
    if (window.confirm("Do you really want to delete product?")) {
      this.productService.deleteProducts(id).subscribe(() => {
        this.products = this.products.filter(products => products.idProduct !== id);
      })
    }
  }

}
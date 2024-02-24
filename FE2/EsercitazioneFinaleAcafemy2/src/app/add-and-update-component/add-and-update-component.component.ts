import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../inteface/products.interface';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../inteface/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-and-update-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-and-update-component.component.html',
  styleUrl: './add-and-update-component.component.css'
})
export class AddAndUpdateComponentComponent {

  formCategory!: FormGroup;
  formProducts!: FormGroup;

  product!: Products;
  category!: Category;
  categoriaDaRecuperare!: Category;
  
  constructor(private fb: FormBuilder, private productService: ProductsService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.formCategory = this.fb.group({
      idCategory: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required]]
    });
    this.formProducts = this.fb.group({
      idProduct: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idCategory: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]]
    });
}

onSubmit() {
  if (this.formCategory.valid) {
    this.category = {
      idCategory: this.formCategory.value.idCategory,
      name: this.formCategory.value.name,
    };
    this.categoryService.addCategory(this.category).subscribe(category => {
      this.category = category
    }
    );
  }
}

onSubmit2() {
  this.categoryService.getCategoryById(this.formProducts.value.idCategory).subscribe(cat => {
    this.categoriaDaRecuperare = cat;
    const productToAdd = {
      idProduct: this.formProducts.value.idProduct,
      name: this.formProducts.value.name,
      description: this.formProducts.value.description,
      category: this.categoriaDaRecuperare,
      quantity: this.formProducts.value.quantity,
      price: this.formProducts.value.price
    };
    this.productService.addProducts(productToAdd).subscribe(() => {
    });
  });
}

updateCategory(){
  if (this.formCategory.valid) {
    this.category = {
      idCategory: this.formCategory.value.idCategory,
      name: this.formCategory.value.name,
    };
    this.categoryService.updateCategory(this.category).subscribe(category => {
      this.category = category
    }
    );
  }
}

updateProducts(){
  this.categoryService.getCategoryById(this.formProducts.value.idCategory).subscribe(cat => {
    this.categoriaDaRecuperare = cat;
    const productToUpdate = {
      idProduct: this.formProducts.value.idProduct,
      name: this.formProducts.value.name,
      description: this.formProducts.value.description,
      category: this.categoriaDaRecuperare,
      quantity: this.formProducts.value.quantity,
      price: this.formProducts.value.price
    };
    this.productService.updateProducts(productToUpdate).subscribe(() => {
    });
  });
}
}

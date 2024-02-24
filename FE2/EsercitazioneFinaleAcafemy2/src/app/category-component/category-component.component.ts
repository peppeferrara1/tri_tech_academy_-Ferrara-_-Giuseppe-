import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../inteface/category.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-category-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './category-component.component.html',
  styleUrl: './category-component.component.css'
})
export class CategoryComponentComponent implements OnInit{

  constructor(private categoryService: CategoryService) {}
  category: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(category => {
      this.category = category
    })
  }

  showProduct(id: number){
    this.categoryService.indice = id;
    let index = this.categoryService.indice;
  }

  deleteCategory(id: number){
    if(window.confirm("Do you really want to delete category?")){
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.category = this.category.filter(category => category.idCategory !== id);
      })
    }
}
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../inteface/products.interface';
import { Chart } from 'chart.js/auto';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../inteface/category.interface';
import { CommonModule } from '@angular/common';
import { MovementService } from '../../services/movement.service';
import { Movement } from '../../inteface/movement.interface';


@Component({
  selector: 'app-product-rreport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-rreport.component.html',
  styleUrl: './product-rreport.component.css'
})
export class ProductRreportComponent implements OnInit {

  constructor(private productService: ProductsService, private categoryService: CategoryService, private movementService: MovementService) { }
  public chart: Products[] = [];
  category: Category[] = [];
  public chartMovement: Movement[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.chart = products;
      this.createChart2();
      this.createChart();
    });
    this.categoryService.getCategory().subscribe(category => {
      this.category = category;
    });
    this.movementService.getMovement().subscribe(movement => {
      this.chartMovement = movement;
      this.createChart3();
    });
  }

  createChart() {
    const labels = this.chart.map(c => c.name);
    const products = this.chart.map(c => c.quantity);

    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Quantity",
            data: products,
            backgroundColor: 'rgb(44, 42, 42)'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  createChart2() {
    const labels = this.chart.map(c => c.name);
    const products = this.chart.map(c => c.category.idCategory);

    const ctx = document.getElementById('mychart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Category",
            data: products,
            backgroundColor: 'rgb(44, 42, 42)'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  createChart3() {
    const time = this.chartMovement.map(m => m.timestamp);
    const quantityChange = this.chartMovement.map(m => m.quantityChange);

    const ctx = document.getElementById('terzoChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: time,
        datasets: [
          {
            label: "Quantity change",
            data: quantityChange,
            backgroundColor: 'rgb(44, 42, 42)'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

}
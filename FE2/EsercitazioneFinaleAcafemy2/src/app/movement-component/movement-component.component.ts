import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';
import { Movement } from '../../inteface/movement.interface';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-movement-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movement-component.component.html',
  styleUrl: './movement-component.component.css'
})
export class MovementComponentComponent implements OnInit {

  constructor(private movementService: MovementService, private productsService: ProductsService) { }
  movement: Movement[] = [];

  ngOnInit(): void {
    let index1 = this.productsService.indice1;
    this.getMovement(index1);
  }

  getMovement(id: number) {
    this.movementService.getMovementByProductsId(id).subscribe(movement =>
      this.movement = movement);
  }

  deleteMovement(id: number) {
    if (window.confirm("Do you really want to delete movement?")) {
      this.movementService.deleteMovement(id).subscribe(() => {
        this.movement = this.movement.filter(movement => movement.idMovement !== id);
      })
    }
  }
}

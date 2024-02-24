import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AddAndUpdateComponentComponent } from './add-and-update-component/add-and-update-component.component';
import { EmployeesComponentComponent } from './employees-component/employees-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ProductRreportComponent } from './product-rreport/product-rreport.component';
import { MovementComponentComponent } from './movement-component/movement-component.component';
import { LoginService } from '../services/login.service';
import { LoginComponentComponent } from './login-component/login-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponentComponent, CategoryComponentComponent, AddAndUpdateComponentComponent, EmployeesComponentComponent, ProductsComponentComponent, ProductRreportComponent, MovementComponentComponent, LoginComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsercitazioneFinaleAcademy';

  constructor(private loginService: LoginService) {}

  get getLoginService() {
    return this.loginService;
  }
}

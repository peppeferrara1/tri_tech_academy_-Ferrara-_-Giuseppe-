import { Routes } from '@angular/router';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { AddAndUpdateComponentComponent } from './add-and-update-component/add-and-update-component.component';
import { EmployeesComponentComponent } from './employees-component/employees-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ProductRreportComponent } from './product-rreport/product-rreport.component';
import { MovementComponentComponent } from './movement-component/movement-component.component';

export const routes: Routes = [
    { path: 'category', component: CategoryComponentComponent },
    { path: 'add', component: AddAndUpdateComponentComponent },
    { path: 'employees', component: EmployeesComponentComponent },
    { path: 'products', component: ProductsComponentComponent},
    { path: 'report', component: ProductRreportComponent },
    { path: 'movement', component: MovementComponentComponent }
];

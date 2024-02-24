import { Component, OnInit } from '@angular/core';
import { Employees } from '../../inteface/employees.interface';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-component.component.html',
  styleUrl: './employees-component.component.css'
})
export class EmployeesComponentComponent implements OnInit{
  constructor(private employeesService: EmployeesService) {}
  employees: Employees[] = [];

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(employees => {
      this.employees = employees
    })
  }

  deleteEmployees(id: number){
    if(window.confirm("Do you really want to delete an employee?")){
      this.employeesService.deleteEmployees(id).subscribe(() => {
        this.employees = this.employees.filter(employee => employee.idEmployee !== id);
      })
    }
  }  
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employees } from '../../inteface/employees.interface';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit{

  loginForm!: FormGroup;
  errorMessage = '';
  email!: any;
  password: any;
  employee!: Employees;



  constructor(private loginService: LoginService,  private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.valid) {
     
        this.email = this.loginForm.value.email,
        this.password = this.loginForm.value.password;
      

      this.loginService.login(this.email).subscribe(
        employee => {
          this.employee = employee;
          if(this.password === employee.password){
            this.router.navigate(['category']);
            this.loginService.loginIndex = true;
          }
        },
        error => {
          this.errorMessage = 'Invalid email/password combination';
          console.error('Login failed:', error);
        }
      );
    }
  }



}

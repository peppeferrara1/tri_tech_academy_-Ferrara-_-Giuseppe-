package com.tritech.EsercitazioneFinaleAcademy.controllers;

import com.tritech.EsercitazioneFinaleAcademy.models.Employees;
import com.tritech.EsercitazioneFinaleAcademy.services.impl.EmployeesServiceDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class EmployeesController {

    @Autowired
    private EmployeesServiceDB employeesService;

    @GetMapping(value = "employees")
    public List<Employees> getAllEmployees() {
        return this.employeesService.getAllEmployees();
    }


    @PostMapping(value = "/employees")
    public String addEmployees(@RequestBody Employees employees) {
        try {
            this.employeesService.addEmployees(employees);
            return "Operazione andata a buon fine";
        } catch (Exception e) {
            return "Errore";
        }
    }

    @PutMapping(value = "/employees")
    public void updateEmployees(@RequestParam Long idEmployee, @RequestBody Employees employee) {
        this.employeesService.updateEmployees(idEmployee, employee);
    }

    @DeleteMapping(value = "/employees")
    public void deleteEmployees(@RequestParam("id") Long id) {
        this.employeesService.deleteEmployees(id);
    }


    @GetMapping("/login")
    public Employees authenticateUser(@RequestParam("email") String email) {
        return this.employeesService.findEmployeeByEmail(email);

    }
}


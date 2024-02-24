package com.tritech.EsercitazioneFinaleAcademy.services.impl;

import com.tritech.EsercitazioneFinaleAcademy.models.Employees;
import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import com.tritech.EsercitazioneFinaleAcademy.repositories.EmployeesRepository;
import com.tritech.EsercitazioneFinaleAcademy.services.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmployeesServiceDB implements EmployeesService {

    @Autowired
    private EmployeesRepository employeesRepository;
    @Override
    public List<Employees> getAllEmployees() {
        return this.employeesRepository.findAll();
    }

    @Override
    public void addEmployees(Employees employees) {
        this.employeesRepository.save(employees);
    }

    @Override
    public void updateEmployees(Long idEmployee, Employees employee) {
        Optional<Employees> employeesInDb = this.employeesRepository.findById(idEmployee);
        if (employeesInDb.isPresent()){
            Employees employeesToUpdate = new Employees();
            employeesToUpdate.setIdEmployee(idEmployee);
            employeesToUpdate.setName(employee.getName());
            employeesToUpdate.setEmail(employee.getEmail());
            employeesToUpdate.setRole(employee.getRole());
            this.employeesRepository.save(employeesToUpdate);
        }
    }

    @Override
    public void deleteEmployees(Long id) {
        this.employeesRepository.deleteById(id);
    }

    public Employees findEmployeeByEmail(String email){
        return this.employeesRepository.findByEmail(email);
    }
}

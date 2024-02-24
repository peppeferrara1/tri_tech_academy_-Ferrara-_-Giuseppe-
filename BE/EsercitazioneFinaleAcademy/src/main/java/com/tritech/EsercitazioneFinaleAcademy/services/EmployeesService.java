package com.tritech.EsercitazioneFinaleAcademy.services;

import com.tritech.EsercitazioneFinaleAcademy.models.Employees;

import java.util.List;

public interface EmployeesService {
    List<Employees> getAllEmployees();
    void addEmployees(Employees employees);
    void updateEmployees(Long id, Employees employees);
    void deleteEmployees(Long id);
}

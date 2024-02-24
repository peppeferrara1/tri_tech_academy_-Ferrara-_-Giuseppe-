package com.tritech.EsercitazioneFinaleAcademy.repositories;

import com.tritech.EsercitazioneFinaleAcademy.models.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeesRepository extends JpaRepository<Employees, Long> {
    Employees findByEmail(String email);
}

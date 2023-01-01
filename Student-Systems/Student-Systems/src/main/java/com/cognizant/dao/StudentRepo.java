package com.cognizant.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}

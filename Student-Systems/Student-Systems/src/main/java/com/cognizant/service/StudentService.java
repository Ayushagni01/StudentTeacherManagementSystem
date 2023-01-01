package com.cognizant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.StudentRepo;
import com.cognizant.entity.Student;

@Service
public class StudentService {
	@Autowired
	StudentRepo studentRepo;

	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}

	public List<Student> saveStudents(List<Student> students) {
		return studentRepo.saveAll(students);
	}

	public Student getStudentById(int id) {
		return studentRepo.findById(id).orElse(null);
	}

	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}
	/*
	 * public String deleteStudentById(int id) { studentRepo.deleteById(id); return
	 * "Data deleted"; } public Student upadteStudent(Student student) { Student
	 * oldStudent=studentRepo.findById(student.getId()).orElse(null); if
	 * (oldStudent!=null) { oldStudent.setAddress(student.getAddress());
	 * oldStudent.setContact(student.getContact());
	 * oldStudent.setEmail(student.getEmail());
	 * oldStudent.setFileType(student.getFileType());
	 * oldStudent.setName(student.getName()); oldStudent.setId(student.getId());
	 * return studentRepo.save(student); } else {
	 * System.err.println("Data NotUpdated ! Please Try Again.");
	 * 
	 * } return studentRepo.save(new Student()); }
	 */
}

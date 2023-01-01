package com.cognizant.controler;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.cognizant.util.FileUtility;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import com.cognizant.entity.Student;
import com.cognizant.service.StudentService;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")
public class StudentController {
	@Autowired
	StudentService studentService;

	@Autowired
	private FileUtility fileUtility;

	@Autowired
	private ObjectMapper om;

	String path="images//";

//	@PostMapping("/addStudent")
//	public Student addStudent(@RequestParam("file") MultipartFile file,
//							  @ModelAttribute Student student) throws IOException {
//
//		String fileName= fileUtility.uploadImage(path,file,student.getName());
//		System.out.println(fileName);
//		student.setFileType(fileName);
//
//		return studentService.saveStudent(student);
//
//	}
	@PostMapping("/addStudent")
	public Student addStudent(@RequestParam("files") MultipartFile files,
							  @RequestParam("stud") String  stud) throws IOException {
		Student student=om.readValue(stud,Student.class);
		String fileName= fileUtility.uploadImage(path,files,student.getName());
		//System.out.println(fileName);
		student.setFileType(fileName);
		return studentService.saveStudent(student);

	}

	//getImages
//	@GetMapping(value="/studs/{id}" ,produces = MediaType.ALL_VALUE )
//	public void getImage(@PathVariable("id") int id,
//							HttpServletResponse response) throws IOException {
//		Student ss= studentService.getStudentById(id);
//		InputStream r=this.fileUtility.getResource(path, ss.getFileType());
//		response.setContentType( MediaType.ALL_VALUE );
//		StreamUtils.copy(r, response.getOutputStream());
//	}

	@GetMapping(value="/image/{id}" ,produces = MediaType.IMAGE_JPEG_VALUE )
	public void getImage(@PathVariable("id") int id,
								   HttpServletResponse response) throws IOException {
		Student ss= studentService.getStudentById(id);
		InputStream r=this.fileUtility.getResource(path, ss.getFileType());
		response.setContentType( MediaType.IMAGE_JPEG_VALUE );

		StreamUtils.copy(r, response.getOutputStream());
	}

	@GetMapping(value="/pdf/{id}" ,produces = MediaType.APPLICATION_PDF_VALUE)
	public void getPDF(@PathVariable("id") int id,
						 HttpServletResponse response) throws IOException {
		Student ss= studentService.getStudentById(id);

		InputStream r=this.fileUtility.getResource(path, ss.getFileType());
		response.setContentType( MediaType.APPLICATION_PDF_VALUE);
		StreamUtils.copy(r, response.getOutputStream());
	}




	@PostMapping("/addStudents")
	public List<Student> addAllStudent(@RequestBody List<Student> students) {
		return studentService.saveStudents(students);

	}

	@GetMapping("/student/{id}")
	public Student getStudent(@PathVariable int id) {
		return studentService.getStudentById(id);

	}

	@GetMapping("/students")
	public List<Student> getStudent() {
		return studentService.getAllStudents();
	}

	/*
	 * @DeleteMapping("/delete/{id}") public String deleteStudent(@PathVariable int
	 * id) { return studentService.deleteStudentById(id); }
	 * 
	 * @PutMapping("/updateStudent") public Student updateStudent(@RequestBody
	 * Student student) { return studentService.upadteStudent(student); }
	 */
}


class ImageGetter{

	private byte[] aa;
	private String type;

}
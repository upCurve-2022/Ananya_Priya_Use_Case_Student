package com.example.demo.controller;

import com.example.demo.exception.NotFound;
import com.example.demo.model.Students;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @GetMapping("/students")
    public List<Students> getAllStudents(){
        return studentRepository.findAll();
    }


    @PostMapping("/students")
    public Students createStudent(@RequestBody Students students){
        return studentRepository.save(students);
    }


    @GetMapping("/students/{id}")
    public ResponseEntity<Students> getStudentById(@PathVariable String id){
        Students student=studentRepository.findById(id).orElse(null);
                //orElseThrow(()->new NotFound("Student not present"+id));
        return ResponseEntity.ok(student);
    }
    //Update Students
    @PutMapping("/students/{id}")
    public ResponseEntity<Students> updateStudent(@PathVariable String id,@RequestBody Students studentdetails) {
        //retrieve student which has to update
        Students student = studentRepository.findById(id).orElse(null);
                //orElseThrow(() -> new NotFound("Student not present" + id));
        //set all data
        student.setFirstname(studentdetails.getFirstname());
        student.setLastname(studentdetails.getLastname());
        student.setUSN(studentdetails.getUSN());
        student.setEmailId(studentdetails.getEmailId());
        student.setDepartment(studentdetails.getDepartment());
        student.setCollege_name(studentdetails.getCollege_name());
        //save it to database
        Students updatedstudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedstudent);
    }
    //delete student
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStudent(@PathVariable String id){
        Students student=studentRepository.findById(id).orElse(null);
                //rElseThrow(()->new NotFound("Student not present"+id));
        studentRepository.delete(student);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}

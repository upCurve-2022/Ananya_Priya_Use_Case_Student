package com.example.demo.model;

import javax.persistence.*;


@Entity
@Table(name = "Student_detail")
public class Students {
    @Id
    private String USN;
    @Column(name = "first_name")
    private String firstname;
    @Column(name = "last_name")
    private String lastname;
    @Column(name ="email_id")
    private String emailId;
    @Column(name = "dept")
    private String Department;
    @Column(name = "college_name")
    private String College_name;

    public Students(){

    }

    public Students(String USN,String firstname, String lastname, String emailId, String department, String college_name) {
        this.USN = USN;
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailId = emailId;
        this.Department = department;
        this.College_name = college_name;

    }

    public String getUSN() {
        return USN;
    }

    public void setUSN(String USN) {
        this.USN = USN;
    }
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getDepartment() {
        return Department;
    }

    public void setDepartment(String department) {
        this.Department = department;
    }

    public String getCollege_name() {
        return College_name;
    }

    public void setCollege_name(String college_name) {
        this.College_name = college_name;
    }




}

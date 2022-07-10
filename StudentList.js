import React, { useEffect, useState } from 'react'
import Studentservice from '../services/Studentservice'
import { Link,useParams } from 'react-router-dom'

const StudentList = () => {
    const [students, setstudents] = useState([])
    const {id}=useParams();

    useEffect(() => {
      Studentservice.getAllStudents().then((response)=>{
        setstudents(response.data)
      }).catch(error=>
        console.log(error));
    }, [])



    const deleteStudent=(studentId)=>{
     alert("Student deleted");
     console.log(studentId);
     Studentservice.deleteStudent(studentId).then((response)=>{
      Studentservice.getAllStudents().then((response)=>{
        setstudents(response.data)
      }).catch(error=>
        console.log(error));

     }).catch(error=>{
       console.log(error);
     })
    
    }
    
  return (
    <div className="container">
        <h1 className='first_para'>List of Students in Target Upcurve Program</h1>
        <Link to="/add-student" className="btn btn-primary mb-2">Add Student</Link>
        <br />
        <table className='table table-bordered table-striped'>
          <thead>
          
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            
            <th>EMAIL_ID</th>
            <th>USN</th>
            <th>DEPARTMENT</th>
            <th>COLLEGE NAME</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {
            students.map(
              student =>
              <tr key={student.usn}>
                
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                 
                  <td>{student.emailId}</td>
                  <td>{student.usn}</td>
                  <td>{student.department}</td>
                  <td>{student.college_name}</td>
                  <td>
                    <Link className='btn btn-info' to={`/update-student/${student.usn}`}>Update</Link>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>deleteStudent(student.usn)}>Delete</button>
                  </td>
              </tr>
            )
            }
          </tbody>
        </table>
        {/* <a href="https://www.google.com">Google</a> */}
    </div>
  )
}

export default StudentList

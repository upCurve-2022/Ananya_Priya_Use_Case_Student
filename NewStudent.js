import React, { useState,useEffect } from 'react'
import Studentservice from '../services/Studentservice'
import {useNavigate,useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'



const NewStudent = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [emailId, setemailId] = useState('')
    const [usn, setusn] = useState('')
    const [department, setdepartment] = useState('')
    const [college_name, setcollege_name] = useState('')
    const navigate = useNavigate();
    
    const {id}=useParams();
    

    const saveStudent=(e)=>{
        e.preventDefault();

        const student={firstname,lastname,emailId,usn,department,college_name}
        if(id){
            Studentservice.updateStudent(id,student).then((response)=>{
                alert("Student updated successfully");
                navigate('/students');
            })
        }
        else{
            Studentservice.createStudent(student).then((response) =>{
            alert("Student added Successfully");
            console.log(response.data);
            navigate('/students');
        })
    }
    }

    useEffect(() => {
      
        Studentservice.getStudentById(id).then((response)=>{
            setfirstname(response.data.firstname)
            setlastname(response.data.lastname)
            setemailId(response.data.emailId)
            setusn(response.data.usn)
            setdepartment(response.data.department)
            setcollege_name(response.data.college_name)
        }).catch(error=>{
            console.log(error);
        })
    
    }, [])

    const title=()=>{
        if(id){
            return <h1 className='first_para'> Update Student</h1>
        }
        else{
            return <h1 className='first_para'>Add New Student</h1>
        }
    }
    
    return (

    <div>    
        <div className='container form-div-container'>
            {
                title()
            }
            <form action="">
                <div className="form-div">
                    <label>FirstName:</label>
                    <input type="text" placeholder='Enter First Name' name="firstname" className='form-control' value={firstname}
                    onChange={(e)=>setfirstname(e.target.value)} />
                </div>

                <div className="form-div">
                    <label>LastName:</label>
                    <input type="text" placeholder='Enter Last Name' name="lastname" className='form-control' value={lastname}
                    onChange={(e)=>setlastname(e.target.value)} />
                </div>

                <div className="form-div">
                    <label>EmailId:</label>
                    <input type="text" placeholder='Enter EmailId' name="emailId" className='form-control' value={emailId}
                    onChange={(e)=>setemailId(e.target.value)} />
                </div>

                <div className="form-div">
                    <label>USN:</label>
                    <input type="text" placeholder='Enter USN' name="usn" className='form-control' value={usn}
                    onChange={(e)=>setusn(e.target.value)} />
                </div>

                <div className="form-div">
                    <label>Department:</label>
                    <input type="text" placeholder='Enter Department' name="department" className='form-control' value={department}
                    onChange={(e)=>setdepartment(e.target.value)} />
                </div>

                <div className="form-div">
                    <label>CollegeName:</label>
                    <input type="text" placeholder='Enter College Name' name="college_name" className='form-control' value={college_name}
                    onChange={(e)=>setcollege_name(e.target.value)} />
                </div>
                <br />
                <button className='btn btn-success btn-div' onClick={(e)=>saveStudent(e)}>Submit</button>
                <Link to="/students" className="btn btn-danger btn-div2">Cancel</Link>
            </form>
        </div>    
    </div>
  )
}

export default NewStudent
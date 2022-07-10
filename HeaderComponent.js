import React from 'react'
import StudentList from './StudentList'

const HeaderComponent = () => {
  return (
    <div>
        <header>
        
            <nav className='navbar1'>
            
            <ul>
                
                <li>Home</li>
                <li>Dashboard</li>
                <li>Services</li>
                <a href="#"><li>Contact us</li></a>
                {/* <div className='search'>
                    <input type="text" name='search' id='search'
                    placeholder='Enter USN' /> */}
                {/* </div> */}
            </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
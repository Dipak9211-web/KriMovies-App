import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdLocalMovies} from 'react-icons/md'
import {RxCross1} from 'react-icons/rx'

import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
     const [ show, setShow] = useState(false)
     const [protectedRoute, setProtectedRoute] = useState(false)
     const navigate = useNavigate()
     useEffect(()=>{
        const user =  JSON.parse(localStorage.getItem('user'))
        if(user){
            setProtectedRoute(true)
        }
     },[]) 
     const onAdd = ()=>{
        setShow(setClass=>{
            return !setClass
        })
    };
    const onLogout = ()=>{
        localStorage.removeItem('user')  
        navigate("/login")
    }
  return (
      <div className="navbar">
         <div className='nav-head'>
         <span className='heading'>KriMovies</span>
         <button className='nav-Button' onClick={onAdd}>{show?<RxCross1/>:<GiHamburgerMenu/>}</button>
         </div>
       
        <div className={show? 'nav-items':'toggleme'}>
            <ul className='nav-list-item'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/genre">Genre</NavLink></li>
                <li><NavLink to="/account"> Account</NavLink></li>
            </ul>
            <ul className='nav-list-item'>
            {
                protectedRoute?<li><NavLink to="/login" onClick={onLogout}>Logout</NavLink></li>:<li><NavLink to="/login">Login</NavLink></li>        
            }
            </ul>
        </div>
      </div>
  )
}

export default Navbar
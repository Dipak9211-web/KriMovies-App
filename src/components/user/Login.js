import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';

function Login() {
  const [user, setUser] = useState({
    fullName:"", email:"", password:""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const navigate = useNavigate();
  const inputChangeHandler = (e)=>{
        setUser((prevState)=>{
          return {...prevState, [e.target.name]:e.target.value}
        })
  }
  const getUserData = (e)=>{
    e.preventDefault();
    setFormErrors(formValidator(user))
    setIsSubmit(true)
  }
  useEffect(()=>{
    console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
      }
  },[formErrors])
  const formValidator = (validate)=>{
      const errors = {}
          const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!validate.fullName){
           errors.fullName = "fullName is Required"
      }
      if(!validate.email){
        errors.email = "Email is Required"
   }else if(!regex.test(validate.email)){
    errors.email = "Please inter valid Email"
   }
   if(!validate.password){
    errors.password = "password is Required"
}else if(validate.password.length<5){
  errors.password = "password must be more than four characters"
}
    return errors
  }
  return (
     <div className="login-container">
     <div className="login-form-row">
        <h4>User Login</h4>
       <form className="login-form" onSubmit={getUserData}>
           <input className="login-field" type="text" name="fullName" value={user.fullName} onChange={inputChangeHandler}  placeholder='Full Name' />
           <span style={{color:"red"}}>{formErrors.fullName}</span>
           <input className="login-field" type="email" name="email" value={user.email} onChange={inputChangeHandler}  placeholder='Email'/>
           <span style={{color:"red"}}>{formErrors.email}</span>
           <input className="login-field" type="password" name="password" value={user.password} onChange={inputChangeHandler}  placeholder='Password'/>
           <span style={{color:"red"}}>{formErrors.password}</span>
           <input className="login-field form-submit" type="submit"/>
       </form>
       </div>
     </div>
  )
}

export default Login
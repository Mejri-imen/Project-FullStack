import './App.css';
import React, { useState } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  const handleEmail = (e)=>{
   setEmail(e.target.value)
  }  

  const handlePass = (e)=>{
    setPassword(e.target.value)
  }

const handleApi = ()=>{
   console.log({email, password})
   axios.post('https://reqres.in/api/login',{
    email : email,
    password : password
   })
   .then(result=>{
    console.log(result.data)
    alert('success login')
   })
   .catch(error=>{
    alert('service error')
    console.log(error)
    
   })
}

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
           
                <label htmlFor="email">email</label>
                <input value={email} onChange={handleEmail}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={handlePass} type="password" placeholder="********" id="password" name="password" />
                <button onClick={handleApi}>Log In</button>
            
                <Routes>
  <Route path="/Home" element={<Home />}/>
  <Route path="/contact" element={<Contact />}/>
</Routes>

            <button className="link-btn" >Don't have an account? Register here.</button>
        </div>
    )
}


export default App;

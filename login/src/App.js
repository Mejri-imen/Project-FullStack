import './App.css';
import React, { useState } from "react";
import axios from 'axios';


function App() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  
  const handleEmail = (e)=>{
    setEmail(e.target.value)
   }  
 
   const handlePassword = (e)=>{
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
      <label htmlFor="email">Email</label>
      <input value={email} onChange={handleEmail} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input value={password} onChange={handlePassword} type="password" placeholder="********" id="password" name="password" />
      <button onClick={handleApi}>Log In</button>

      

      <button className="link-btn">Don't have an account? Register here.</button>
    </div>
  );
}

export default App;

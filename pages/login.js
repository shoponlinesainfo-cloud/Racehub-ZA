import { useState } from "react";
import axios from "axios";

export default function Login(){
  const [form,setForm]=useState({email:'',password:''});

  const submit=async()=>{
    const res=await axios.post('/api/auth/login',form);
    localStorage.setItem("token",res.data.token);
    alert("Logged in");
  }

  return(
    <div style={{padding:40}}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/><br/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/><br/>
      <button onClick={submit}>Login</button>
    </div>
  )
}
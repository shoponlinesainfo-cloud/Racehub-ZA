import { useState } from "react";
import axios from "axios";

export default function Register(){
  const [form,setForm]=useState({name:'',email:'',password:'',role:'fan'});

  const submit=async()=>{
    await axios.post('/api/auth/register',form);
    alert("Registered");
  }

  return(
    <div style={{padding:40}}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/><br/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/><br/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/><br/>
      <select onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="fan">Fan</option>
        <option value="driver">Driver</option>
        <option value="club_admin">Club Admin</option>
      </select><br/>
      <button onClick={submit}>Create Account</button>
    </div>
  )
}
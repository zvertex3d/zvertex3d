import { useState } from "react";
import api from "../services/api";

export default function Signup() {
  const [form,set]=useState({});
  const submit=()=>{
    if(!form.email || !form.phone) return alert("Email & Phone required");
    api.post("/auth/signup",form).then(()=>alert("Registered"));
  };
  return (
    <div style={container}>
      <h1>Register</h1>
      <input placeholder="Name" onChange={e=>set({...form,name:e.target.value})} style={input}/>
      <input placeholder="Email*" required onChange={e=>set({...form,email:e.target.value})} style={input}/>
      <input placeholder="Phone*" required onChange={e=>set({...form,phone:e.target.value})} style={input}/>
      <input type="password" placeholder="Password" onChange={e=>set({...form,password:e.target.value})} style={input}/>
      <button onClick={submit} style={btn}>Signup</button>
    </div>
  );
}

const container = {
  maxWidth:"400px",
  margin:"3rem auto",
  padding:"2rem",
  background:"#fff",
  borderRadius:"10px",
  boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
  display:"flex",
  flexDirection:"column",
  gap:"1rem",
  textAlign:"center"
};

const input = {
  padding:"0.8rem",
  borderRadius:"5px",
  border:"1px solid #ccc",
  width:"100%",
};

const btn = {
  padding:"0.8rem",
  borderRadius:"5px",
  border:"none",
  background:"#00BFFF",
  color:"#fff",
  fontWeight:"600",
  cursor:"pointer"
};

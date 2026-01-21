import { useState } from "react";
import api from "../services/api";

export default function Signup() {
  const [form,set]=useState({});
  const submit=()=>{
    if(!form.email || !form.phone) return alert("Email & Phone required");
    api.post("/auth/signup",form).then(()=>alert("Registered"));
  };
  return (
    <div>
      <input placeholder="Name" onChange={e=>set({...form,name:e.target.value})}/>
      <input placeholder="Email*" required onChange={e=>set({...form,email:e.target.value})}/>
      <input placeholder="Phone*" required onChange={e=>set({...form,phone:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>set({...form,password:e.target.value})}/>
      <button onClick={submit}>Signup</button>
    </div>
  );
}

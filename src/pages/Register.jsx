// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext.jsx'
// import "../styles/Register.css"

// export const Register = () => {
//    const [name, setName] = useState("")
//    const [email, setEmail] = useState("")
//    const [password, setPassword] = useState("")
//    const {register} = useContext(AuthContext)
//    const navigate = useNavigate()

//    const handleSubmit = (e)=>{
//       e.preventDefault();
//       const newUser = {name ,email}
//       register(newUser)
//       navigate("/dashboard")
//    }
//   return (
//     <section className="auth-page container">
//       <h2>Create Account</h2>

//       <form className="auth-form" onSubmit={handleSubmit}>

//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full Name' />
//         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
//         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />

//         <button type="submit" className="btn-auth">Register </button>

//         <p>Already have an account? <Link to="/login">Login</Link> </p>
//       </form>
//     </section>
//   )
// }

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import "../styles/Register.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // Added for success message

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const newUser = { name, email, password };

    try {
      await register(newUser);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // Optional delay for user to see message
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <section className="auth-page container">
      <h2>Create Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" className="btn-auth">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </section>
  );
};
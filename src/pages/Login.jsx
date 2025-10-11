import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import "../styles/Login.css"

// export const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const {login} = useContext(AuthContext)
//   const navigate = useNavigate()

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     // later: call API
//     const fakeUser = {email}
//     login(fakeUser)
//     navigate("/dashboard")
//   }
//   return (
//      <section className="auth-page container">
//         <h2>Login</h2>
//         <form  className="auth-form" onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
//             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
//             <button type="submit" className="btn-auth">Login</button>

//             <p>
//                 Don’t have an account? <Link to="/register">Register</Link>
//             </p>
//         </form>
//      </section>
//   )
// }

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // Added for success message

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const userData = { email, password };

    try {
      await login(userData);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000); // Optional delay
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <section className="auth-page container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" className="btn-auth">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </section>
  );
};
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../context/AuthContext.jsx";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user, logout} = useContext(AuthContext)
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <h1 className="nav-logo">EazyByts Portfolio</h1>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {user && <li><Link to="/dashboard">Dashboard</Link></li>}

          {user ? (
             <li>
                 <button className="btn-nav logout" onClick={logout}>Logout</button>
             </li>
          ):(
             <>
               <li>
                   <Link to="/login" className="btn-nav login">Login</Link>
               </li>
               <li>
                   <Link to="/register" className="btn-nav register">Register</Link>
               </li>
             </>
          )}

          
        </ul>
      </div>
    </nav>
  )
}

import { Link } from "react-router-dom";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-headline">
          <span className="headline-part1">Build Your</span>
          <span className="headline-part2">Professional Portfolio</span>
          <span className="headline-part3">Effortlessly</span>
        </h1>
        <p className="hero-subtext">Showcase your projects, blogs, and skills with our modern CMS platform. Perfect for professionals, students, and freelancers seeking career advancement and personal branding.</p>
        <button className="btn cta-btn">
          <Link to="/register">Get Started Now</Link>
        </button>
        <div className="visual-elements">
          <div className="visual-item visual-project">Projects</div>
          <div className="visual-item visual-blog">Blogs</div>
          <div className="visual-item visual-custom">Customization</div>
        </div>
      </div>
    </section>
  )
}
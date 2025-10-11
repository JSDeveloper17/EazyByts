import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Hello, I'm <span>Web Developer</span></h2>
        <p>I build modern, responsive web applications using React and Node.js</p>
        <button className="btn">View My Work</button>
      </div>
    </section>
  )
}

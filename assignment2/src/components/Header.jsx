import myimg from '../assets/my.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  return (
    <>
      <header id="hero" class="hero-hdr">
        <div class="hero-inner">
          <div class="intro-box">
            <h1>Sumit <span class="highlight">Kumar Pathak</span></h1>
            <p>B.Tech CSE @ NIT Warangal | Aspiring Software Engineer | DSA & Full-Stack Development | NITW'28</p>
            <Link to="/projects" className="cta-btn">View Projects</Link>
          </div>
          <div class="avatar-wrap">
            <img src={myimg} alt="Sumit profile image" class="my-photo" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
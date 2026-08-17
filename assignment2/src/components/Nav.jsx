import { Link, useNavigate } from 'react-router-dom'

function Nav({theme, toggleTheme}) {
  return (
    <nav className="top-nav">
      <div className="nav-wrapper">
        <Link to="/" className="nav-logo">Sumit<span>.</span></Link>
        <ul className="nav-menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  )
}

export default Nav;


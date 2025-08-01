import {Link} from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">
          HealthCare App
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/appointment" className="nav-link">
          Appointments
        </Link>
      </nav>
    </header>
  )
}

export default Header

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import './Layout.css'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src="/logo.jpg" alt="A Refined Mind" className="logo" />
            <span className="brand-name">A Refined Mind</span>
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/writings" onClick={closeMenu}>Writings</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Connect</Link></li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>© 2026 A Refined Mind. Reflections shaped by experience, refined by faith.</p>
      </footer>
    </div>
  )
}

export default Layout

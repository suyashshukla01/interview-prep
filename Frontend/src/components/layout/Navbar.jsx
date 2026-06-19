import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = async () => {
    setMenuOpen(false)
    await logout()
    navigate('/')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
            </svg>
          </span>
          Briefed
        </Link>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((m) => !m)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          {user ? (
            <>
              <NavLink to="/dashboard" onClick={closeMenu}>
                Dashboard
              </NavLink>
              <NavLink to="/new" onClick={closeMenu}>
                New report
              </NavLink>
              <button type="button" className="navbar-text-btn" onClick={handleLogout}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={closeMenu}>
                Sign in
              </NavLink>
              <Link to="/register" className="navbar-cta" onClick={closeMenu}>
                Get briefed
              </Link>
            </>
          )}

          <button
            type="button"
            className="lamp-toggle"
            aria-pressed={theme === 'light'}
            aria-label="Toggle light and dark theme"
            onClick={toggleTheme}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {theme === 'light' ? (
                <path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.5.5 1 1.3 1 2.5h6c0-1.2.5-2 1-2.5A6 6 0 0 0 12 2Z" />
              ) : (
                <path d="M9 18h6M10 22h4M12 2v2M8 8a4 4 0 1 0 8 0a4 4 0 0 0 -8 0Z" />
              )}
            </svg>
            <span>{theme === 'light' ? 'lamp on' : 'lamp off'}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

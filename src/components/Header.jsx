import { useState, useEffect } from 'react'
import DateStamp from './DateStamp'

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="terminal"
          href="https://github.com/IsabelVSousa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IsabelVSousa on GitHub"
        >
          <span className="terminal__prompt" aria-hidden="true">~$</span>
          <span className="terminal__user">IsabelVSousa</span>
          <span className="terminal__cursor" aria-hidden="true"></span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          id="main-nav"
          className={`nav ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav__list">
            <li><a className="nav__link" href="#work" onClick={() => setOpen(false)}>Work</a></li>
            <li><a className="nav__link" href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a className="nav__link" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <DateStamp />
      </div>
    </header>
  )
}

export default Header
import DateStamp from './DateStamp'

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
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

        <div className="site-header__right">
          <DateStamp />
          <nav aria-label="Main navigation">
            <ul className="nav__list">
              <li><a className="nav__link" href="#work">Work</a></li>
              <li><a className="nav__link" href="#about">About</a></li>
              <li><a className="nav__link" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
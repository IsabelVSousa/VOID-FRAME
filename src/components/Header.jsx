function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#hero">VOID/FRAME</a>

        <nav aria-label="Main navigation">
          <ul className="nav__list">
            <li><a className="nav__link" href="#work">Work</a></li>
            <li><a className="nav__link" href="#about">About</a></li>
            <li><a className="nav__link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
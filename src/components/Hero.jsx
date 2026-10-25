import hero1 from '../assets/images/hero-1.jpg'
import hero2 from '../assets/images/hero-2.jpg'
import hero3 from '../assets/images/hero-3.jpg'

function pad(n) {
  return String(n).padStart(2, '0')
}

const panels = [
  { id: 1, title: 'Hollow Reach', category: 'Concept art', src: hero1, alt: 'Describe la imagen 1' },
  { id: 2, title: 'Signal Garden', category: 'Environment', src: hero2, alt: 'Describe la imagen 2' },
  { id: 3, title: 'Ash Wardens', category: 'Character', src: hero3, alt: 'Describe la imagen 3' },
]

const TITLE = [
  { char: 'V', kern: 0 },
  { char: 'O', kern: 0 },
  { char: 'I', kern: 0 },
  { char: 'D', kern: 0 },
  { char: '/', kern: 0 },
  { char: 'F', kern: 0 },
  { char: 'R', kern: 0 },
  { char: 'A', kern: 0 },
  { char: 'M', kern: 0 },
  { char: 'E', kern: 0 },
]

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__intro">
        {/* <p className="hero__eyebrow">Welcome to</p> */}
        <h1 className="hero__title" aria-label="VOID/FRAME">
          {TITLE.map((letter, i) => (
            <span
              key={i}
              className="hero__letter"
              aria-hidden="true"
              style={{ marginLeft: `${letter.kern}em` }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
        <p className="hero__tagline">Digital experiences for imaginary worlds.</p>
        <a className="button" href="#work">Explore work</a>
      </div>

      <div className="hero__panels">
        {panels.map((panel) => (
          <figure key={panel.id} className={`hero__panel hero__panel--${panel.id}`}>
            <img className="hero__image" src={panel.src} alt={panel.alt} />
            <figcaption className="hero__caption">
              <span className="hero__category">{panel.category}</span>
              <span className="hero__name">{panel.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="hero__bar">
        <p className="hero__counter">
          {pad(panels.length)} projects
        </p>

        <p className="hero__bar-label">Personal projects</p>

        <a
          className="hero__globe"
          href="https://github.com/IsabelVSousa/VOID-FRAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4" ry="10" />
            <path d="M2 12h20M4.5 6.5h15M4.5 17.5h15" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
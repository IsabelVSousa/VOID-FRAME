const panels = [
  { id: 1, title: 'Hollow Reach', category: 'Concept art' },
  { id: 2, title: 'Signal Garden', category: 'Environment' },
  { id: 3, title: 'Ash Wardens', category: 'Character' },
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
            <figcaption className="hero__caption">
              <span className="hero__category">{panel.category}</span>
              <span className="hero__name">{panel.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Hero
const panels = [
  { id: 1, title: 'Hollow Reach', category: 'Concept art' },
  { id: 2, title: 'Signal Garden', category: 'Environment' },
  { id: 3, title: 'Ash Wardens', category: 'Character' },
]

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__intro">
        <p className="hero__eyebrow">Welcome to</p>
        <h1 className="hero__title">VOID/FRAME</h1>
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
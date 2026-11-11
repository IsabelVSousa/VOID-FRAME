function ProjectCard({ project }) {
  const { id, title, category, year, image, alt, status } = project
  const isSoon = status === 'soon'

  const content = (
    <>
      <div className="card__media">
        <img src={image} alt={alt} />
        <div className="card__overlay">
          <h3 className="card__title">{title}</h3>
          {isSoon && <span className="card__badge">Coming soon</span>}
        </div>
      </div>
      <p className="card__meta">{category} · {year}</p>
    </>
  )

  if (isSoon) {
    return <article className="card card--soon">{content}</article>
  }

  return (
    <a className="card" href={`#${id}`}>
      {content}
    </a>
  )
}

export default ProjectCard
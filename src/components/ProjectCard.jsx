function ProjectCard({ project }) {
  const { id, title, category, year, image, alt, status } = project

  const content = (
    <>
      <div className="card__media">
        <img src={image} alt={alt} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__meta">{category} · {year}</p>
    </>
  )

  if (status === 'soon') {
    return (
      <article className="card card--soon">
        {content}
        <span className="card__badge">Coming soon</span>
      </article>
    )
  }

  return (
    <a className="card" href={`#${id}`}>
      {content}
    </a>
  )
}

export default ProjectCard
function ProjectCard({ project }) {
  const { id, title, category, year, image, alt, description, status } = project
  const isSoon = status === 'soon'

  const content = (
    <>
      <div className="card__head">
        <h3 className="card__title">{title}</h3>
        <span className="card__year">{year}</span>
      </div>

      <div className="card__media">
        <img src={image} alt={alt} />
        {isSoon && <span className="card__badge">Coming soon</span>}
      </div>

      <div className="card__body">
        <div className="card__body-inner">
          <p className="card__category">{category}</p>
          <p className="card__desc">{description}</p>
          {!isSoon && <span className="card__more">View project →</span>}
        </div>
      </div>
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
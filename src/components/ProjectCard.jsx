function ProjectCard({ project, onActivate, onDeactivate }) {
    const { id, title, image, alt, description, status } = project
    const isSoon = status === 'soon'

    const content = (
        <>
            <div className="card__media">
                <img src={image} alt={alt} />
                {isSoon && <span className="card__badge">Coming soon</span>}
            </div>

            <div className="card__body">
                <div className="card__body-inner">
                    <h3 className="card__title">{title}</h3>
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
        <a
            className="card"
            href={`#${project.id}`}
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
            onFocus={onActivate}
            onBlur={onDeactivate}
        >
            {content}
        </a>
    )
}

export default ProjectCard
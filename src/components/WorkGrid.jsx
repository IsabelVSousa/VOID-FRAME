import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import GridLines from './GridLines'

function WorkGrid() {
    return (
        <section id="work" className="work">
            <GridLines />
            <h2 className="section-title">Selected work</h2>

            <div className="work__grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}


export default WorkGrid
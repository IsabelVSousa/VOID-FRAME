import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import GridLines from './GridLines'
import Ruler from './Ruler'

function WorkGrid() {
  const gridRef = useRef(null)
  const [focus, setFocus] = useState(null)

  function handleActivate(event) {
    const grid = gridRef.current.getBoundingClientRect()
    const card = event.currentTarget.getBoundingClientRect()
    setFocus((card.left + card.width / 2 - grid.left) / grid.width)
  }

  return (
    <section id="work" className="work">
      <GridLines />
      <h2 className="section-title">Selected work</h2>
      <Ruler focus={focus} />

      <div className="work__grid" ref={gridRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onActivate={handleActivate}
            onDeactivate={() => setFocus(null)}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkGrid
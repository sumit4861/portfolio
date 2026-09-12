import projects from '../data/projects'
import SubProject from './SubProject'
function Project() {
  return (
    <section id="projects" className="sec-padding">
      <h2 className="sec-title">Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <SubProject project = {project} key={index}/>
        ))}
      </div>
    </section>
  )
}

export default Project
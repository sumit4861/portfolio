import projects from '../data/projects'
import SubProject from './SubProject'
function Project() {
  return (
    <section id="projects" class="sec-padding">
      <h2 class="sec-title">Projects</h2>
      <div class="card-grid">
        {projects.map((project, index) => (
          <SubProject project = {project} key={index}/>
        ))}
      </div>
    </section>
  )
}

export default Project
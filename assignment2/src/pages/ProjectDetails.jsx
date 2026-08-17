import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { projectId } = useParams()

  const project = projects[projectId]

  if (!project) {
    return (
      <section className="sec-padding">
        <h2 className="sec-title">Project Not Found</h2>
        <Link to="/projects">Back to Projects</Link>
      </section>
    )
  }

  return (
    <section className="sec-padding">
      <h2 className="sec-title">{project.title}</h2>

      <div className="info-card">
        <p className="proj-desc">
          {project.desc}
        </p>

        <div className="tech-pills">
          {project.tech.split(',').map((tech, index) => (
            <span className="pill" key={index}>
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub Repo →
        </a>
      </div>

      <br />

      <Link to="/projects">
        ← Back to Projects
      </Link>
    </section>
  )
}

export default ProjectDetails
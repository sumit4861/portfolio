import { useParams, Link } from 'react-router-dom'
import {useEffect, useState} from 'react'

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { projectId } = useParams()
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/projects/${projectId}`)

        if(!res.ok) {
          throw new Error('Project not found')
        }

        const data = await res.json()

        setProject(data)
      } catch(err) {
        console.error(err)
        setError('Project not found')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectId])

  if (loading) {
    return <p>Loading project...</p>;
  }

  if (error) {
    return (
      <section className="sec-padding">
        <h2 className="sec-title">{error}</h2>
      </section>
    )
  }

  return (
    <section className="sec-padding">
      <h2 className="sec-title">{project.title}</h2>

      <div className="proj-image">
        {project.image.split(",").map((image, index) => (
          <img src={image} className="proj-image" alt={project.title} key={index} />
        ))}
      </div>

      <div className="info-card">
        <p className="proj-desc">
          {project.description}
        </p>

        <div className="tech-pills">
          {project.techStack.split(',').map((tech, index) => (
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
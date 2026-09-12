import {useState} from 'react'
import ProjectInfo from './ProjectInfo'

function SubProject({project}) {
  const [showDetails, setShowDetails] = useState(false)

  return (
      <article className="info-card proj-card">
        <div className="proj-image">
          {project.image.split(",").map((image, index) => (
            <img src={image} className="proj-image" alt={project.title} key={index}/>
          ))}
        </div>

        <ProjectInfo title={project.title} />

        <button onClick={()=> setShowDetails(!showDetails)} className="cta-btn">
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        
        {showDetails && (
          <div className="tech-pills">
          <p className="proj-desc">{project.description}</p>
          {project.techStack.split(",").map((tech) => (
            <span className="pill">{tech}</span>
          ))}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">GitHub Repo &rarr;</a>
        </div>
        )}
      </article>
  )
} 

export default SubProject
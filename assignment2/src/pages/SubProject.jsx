function SubProject({project}) {
  return (
    // <>
      <article class="info-card proj-card">
        <div class="proj-image">
          {project.image.split(",").map((image) => (
            <img src={image} class="proj-image" alt={project.title}/>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p class="proj-desc">{project.desc}</p>
        <div class="tech-pills">
          {project.tech.split(",").map((tech) => (
            <span class="pill">{tech}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="github-link">GitHub Repo &rarr;</a>
      </article>
    // </>
  )
} 

export default SubProject
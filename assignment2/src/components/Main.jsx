import projects from '../data/projects'

function Main() {
  return (
    <main class="page-container">
      
      <section id="about" class="sec-padding">
        <h2 class="sec-title">About Me</h2>
        <div class="about-card">
          <p>
            I am a third-year B.Tech Computer Science and Engineering student at NIT Warangal with a strong interest in Data
            Structures & Algorithms, software development, and problem-solving. I enjoy building technical skills through projects
            and continuous learning. Beyond academics, I am passionate about painting and sketching. I aspire to join the Indian
            Armed Forces and am driven by the values of discipline, leadership, and service to the nation..
          </p>
        </div>
      </section>

      <section id="education" class="sec-padding">
        <h2 class="sec-title">Education</h2>
        <div class="card-grid">
          <article class="info-card span-full">
            <span class="year-badge">2024-28</span>
            <h3>National Institute of Technology, Warangal</h3>
            <p class="deg-title">B.Tech in Computer Science & Engineering</p>
            <p class="score-text">CGPA: 8.26</p>
          </article>

          <article class="info-card">
            <span class="year-badge">2022-23</span>
            <h3>Sainik School Rewa, MP</h3>
            <p class="deg-title">Class XII</p>
            <p class="score-text">Percentage: 76.6%</p>
          </article>

          <article class="info-card">
            <span class="year-badge">2020-21</span>
            <h3>Sainik School Rewa, MP</h3>
            <p class="deg-title">Class X</p>
            <p class="score-text">Percentage: 87%</p>
          </article>
        </div>
      </section>

      <section id="projects" class="sec-padding">
        <h2 class="sec-title">Projects</h2>
        <div class="card-grid">
          {projects.forEach(project => {

            <article class="info-card proj-card">
            <h3>${project.title}</h3>
            <p class="proj-desc">${project.desc}</p>
            <div class="tech-pills">
              <span class="pill">${project.tech}</span>
              {/* <span class="pill">Node.js</span>
              <span class="pill">MongoDB</span> */}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" class="github-link">GitHub Repo &rarr;</a>
            </article>
          })}

        </div>
      </section>

      <section id="skills" class="sec-padding">
        <h2 class="sec-title">Technical Skills</h2>
        <div class="card-grid">
          <div class="info-card">
            <h3>Languages</h3>
            <div class="tech-pills">
              <span class="pill">C++</span>
              <span class="pill">Java</span>
              <span class="pill">JavaScript</span>
              <span class="pill">HTML/CSS</span>
            </div>
          </div>

          <div class="info-card">
            <h3>Frameworks</h3>
            <div class="tech-pills">
              <span class="pill">React.js</span>
              <span class="pill">Express.js</span>
            </div>
          </div>

          <div class="info-card">
            <h3>Tools</h3>
            <div class="tech-pills">
              <span class="pill">Git</span>
              <span class="pill">GitHub</span>
              <span class="pill">VS Code</span>
              <span class="pill">Postman</span>
            </div>
          </div>

          <div class="info-card">
            <h3>Core CS</h3>
            <div class="tech-pills">
              <span class="pill">DSA</span>
              <span class="pill">OOP</span>
              <span class="pill">DBMS</span>
              <span class="pill">OS</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="sec-padding">
        <h2 class="sec-title">Get In Touch</h2>

      </section>

    </main>
  )
}

export default Main
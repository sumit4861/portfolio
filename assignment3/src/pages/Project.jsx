import {useEffect, useState} from 'react'
import SubProject from './SubProject'
function Project() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async() => { 
        try{
          const res = await fetch('http://localhost:5000/api/projects')
          if(!res.ok) {
            throw new Error('Failed to fetch projects')
          }
          const data = await res.json();
          
          setProjects(data)
      }
      catch(err) {
        console.error(err)
        setError('Unable to load projects. Try again later')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if(loading) {
    return <p>Loading projects....</p>
  }
  if(error) {
    return <p>{error}</p>
  }
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
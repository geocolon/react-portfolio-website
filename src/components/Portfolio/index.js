import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      name: 'GitHub Portfolio',
      description: 'Here is my GitHub portfolio showcasing my projects and contributions, including repositories, commits, and pull requests.',
      tech: 'GitHub API',
      phase: 'GitHub API and Data Visualization',
      url: 'https://github.com/geocolon',
    },
    {
      name: 'Blerdalerts',
      description: 'A web-based notes application with user authentication powered by Keycloak, featuring a Python Flask backend and JavaScript frontend.',
      tech: 'Python',
      phase: 'Python Web Development',
      url: 'https://github.com/geocolon/NotesApp',
    },
    {
      name: 'My Portfolio',
      description: 'A responsive portfolio website built with React and Sass.',
      tech: 'JavaScript',
      phase: 'React Development',
      url: 'https://github.com/geocolon/portfolio-website',
    },
    {
      name: 'Supabase Tutorial',
      description: 'A tutorial for building a web application with Supabase.',
      tech: 'Supabase',
      phase: 'PostgreSQL and Backend Development',
      url: 'https://github.com/geocolon/Supabase-Tutorial-for-Beginners',
    },
    {
      name: 'The Dog Ronin',
      description: 'A WordPress website for a dog care business.',
      tech: 'WordPress',
      phase: 'Web Development',
      url: 'https://www.thedogronin.com/',
    },
    {
      name: 'Sauron Capital',
      description: 'A WordPress website for a financial services business.',
      tech: 'WordPress',
      phase: 'Web Development',
      url: 'https://www.sauronacapital.com/',
    },
    {
      name: 'BKNY Gamers',
      description: 'A WordPress website for a gaming community.',
      tech: 'WordPress',
      phase: 'Web Development',
      url: 'https://www.bknygamers.com/',
    },
    {
      name: 'UX Design Kit',
      description: 'A WordPress website for a design resources community.',
      tech: 'WordPress',
      phase: 'Web Development',
      url: 'https://uxdesignkit.com/',
    },
  ]

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-phase">{project.phase}</div>
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <span>Tech: </span>{project.tech}
              </div>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-github">Link</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
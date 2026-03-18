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
      name: 'Worker Agents System',
      description: 'A team of specialized Python agents that manage study sessions, quiz knowledge, and track learning progress.',
      tech: 'Python',
      phase: 'Phase 1 - Python Foundations',
      github: 'https://github.com/geocolon/worker-agents',
    },
    {
      name: 'Calculator Project',
      description: 'Progressive calculator with three challenges: basic operations, memory function, and history log.',
      tech: 'Python',
      phase: 'Phase 1 - Python Foundations',
      github: 'https://github.com/geocolon/calculator',
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
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
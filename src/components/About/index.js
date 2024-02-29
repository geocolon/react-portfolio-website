import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Terminalbash from './videos/terminalbash.mp4';
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Experienced Full-Stack Engineer with a background in SaaS solutions in air-gapped environments. React Typescript, NodeJS, Flutter, Linux, DevOps, and other technologies.
          </p>
          <p align="LEFT">
          Proficient in AWS cloud services and machine learning training with 3D models and scans with Unity. This ML process produces 95-98% accuracy for computer object detection.
          </p>
        
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
        <div className="background-video">
        <video autoPlay muted loop playsInline id="video-background" className="fullscreen-video" style={{ filter: 'blur(5px)', opacity: 0.6 }}>
            <source src={Terminalbash} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className="overlay"></div> {/* Overlay element */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import CyberWorld from './videos/cyberworld.mp4';

// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['G', 'e', 'o', 'r', 'g', 'e']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e'
  ]
  const jobArray2 = [
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    

    <div className="container home-page">
      
      <div className="text-zone">
        <h1>
        <div className="job-title">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span style={{paddingRight:"1rem"}} className={`${letterClass} _14`}>'m</span>
          
          {/* <img
            src={LogoTitle}
            alt="JavaScript Developer Name, Web Developer Name"
        /> */}

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
            <br className="mobile-only" /> {/* Break to the next line on mobile */}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray2}
                idx={18}
              />
          </div>
        </h1>
        <h2>Fullstack Developer / JavaScript Expert / A.I. with Python / </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <Logo /> */}
    </div>
    <div className="background-video">
      <video autoPlay muted loop playsInline id="video-background" className="fullscreen-video" style={{ opacity: 0.6 }}>
        <source src={CyberWorld} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="overlay"></div> {/* Overlay element */}
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home

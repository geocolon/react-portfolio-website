import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contactvideo from './videos/contactvideo.mp4';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm('gmail', 'template_jz68i6e', form.current, 'AzDFALXH3tLCPh2ap')
  //     .then(
  //       () => {
  //         alert('Message successfully sent!')
  //         window.location.reload(false)
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again')
  //       }
  //     )
  //     .catch((error) => {
  //       console.error('Failed to send the message:', error);
  //       alert('Failed to send the message, please try again');
  //     });
  // }

  return (
    <>
      <div className="container contact-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
           Greetings,
          </p>
          <p>
            As a professional in the field, I'm deeply passionate about cyber security and cloud computing, particularly within the realms of AWS and Google Cloud. Freelancing allows me to explore ambitious endeavors, especially those revolving around these pivotal areas of technology.
          </p>
          <p>
            If you're embarking on a substantial project or seeking expertise in cyber security or cloud computing, I'm eager to lend my skills and knowledge. However, I'm equally open to discussing any other opportunities or inquiries you may have.
          </p>
          <p>
            Please don't hesitate to reach out via links below. I'm here to discuss and contribute to your tech endeavors in any way possible.
          </p>
          
          {/* <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>
        {/* <div className="info-map">
          George Colón,
          <br />
          United States,
          <br />
          Los Angeles, California <br />
          <br />
          <span>george@dynamodesigns.co</span>
        </div> */}
        <div className="map-wrap">
          <div className="contact-icons">
              <a href="mailto:your.email@example.com" className="icon-link">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
            </div>
        </div>
      </div>
      <div className="background-video">
      <video autoPlay muted loop playsInline id="video-background" className="fullscreen-video" style={{ opacity: 0.6 }}>
          <source src={Contactvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="overlay"></div> {/* Overlay element */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

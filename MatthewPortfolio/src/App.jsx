import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imageBanner from './assets/ImageBanner.jpg'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import ProjectCards from './Components/ProjectCards'
import Footer from './Components/Footer'
import Description from './Components/Description'
import ThreePillars from './Components/ThreePillars'

import './App.css'
let imageBanner2 = './assets/ImageBanner.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="home" />
      <NavBar />
      {/* <div><img src={imageBanner} className="image-banner" alt="Hello There Image Banner"></img></div> */}
      <div className="Home-Wrap">
        <div className="container">
          <div className="Introduction-Text">
            <h1 className="Name-Text">Matthew MacNeil</h1>
            <h2 className="Self-Descriptor">Programmer | Game & Media Designer</h2>
          </div>
        </div>
      </div>
      <div className="Description">
        <Description />
      </div>
      <div className="ThreePillars">
        <ThreePillars />
      </div>
      <div className="Project-Showcase" id="projects">
        <h1 className="Projects-Header">Projects</h1>
        <ProjectCards />
      </div>
      <Footer />
    </div>
  )
}

export default App

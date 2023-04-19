import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imageBanner from './assets/ImageBanner.jpg'
import viteLogo from '/vite.svg'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import ProjectCards from './Components/ProjectCards'
import Footer from './Components/Footer'

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
        <div className="container2">
          <div className="Column-Setup">
            <div className="column-style-1">
              <h1>Programmer</h1>
              <p>I love to program. The process of the creating something from scratch using various languages fills me with pride. My time over these past years has been spent to learning languages and programming methods to improve cabablities. On the side I like to build and test small mechanisms to keep my skills sharp.</p>
            </div>
            <div className="column-style-1">
              <h1>Game Designer</h1>
              <p>Game Design is a passion of mine, the ideas behind creating a framework and flow is something I think about every single day. My skills in Game Design were developed using the knowledge I gained from my time in University. On my own free time I design game structures and patterns to encourage myself to explore new ways players can interact with game mechanics.</p>
            </div>
            <div className="column-style-1">
              <h1>Media</h1>
              <p>I possess numerous skills in creating various forms of media. My greatest skills lie in video editing and animation. My experince in media creation was developed at a early age with my desire to create home videos and later edited Youtube content. This was further expaned in dedicated Video editing and Animation courses.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-Showcase" id="projects">
        <h1 className="Projects-Header">Projects</h1>
        <p />
        <ProjectCards />
      </div>
      <Footer />
    </div>
  )
}

export default App

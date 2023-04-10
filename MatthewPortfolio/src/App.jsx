import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imageBanner from './assets/ImageBanner.jpg'
import viteLogo from '/vite.svg'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';

import './App.css'
let imageBanner2 = './assets/ImageBanner.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div><NavBar /></div>
      {/* <div><img src={imageBanner} className="image-banner" alt="Hello There Image Banner"></img></div> */}
      <div className="Home-Wrap">
        <div className="container">
          <div className="Introduction-Text">
            <h1>Matthew MacNeil</h1>
            <h2>Programmer | Game & Media Designer</h2>
          </div>
        </div>
      </div>
      <div className="Description">
        <div className="container">
          <div className="Column-Setup">
            <div className="column-style-1">
              <h3>Programmer</h3>
              <p>This is a body paragraph for column 1</p>
            </div>
            <div className="column-style-1">
              <h3>Game Designer</h3>
              <p>This is a body paragraph for column 2</p>
            </div>
            <div className="column-style-1">
              <h3>Media</h3>
              <p>This is a body paragraph for column 3</p>
            </div>
          </div>
          <p>I am Matthew MacNeil, programmer extraordinaire</p>
        </div>
      </div>
      <div className="Project-Showcase">
        <h2>Projects</h2>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default App

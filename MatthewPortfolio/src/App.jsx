import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imageBanner from './assets/ImageBanner.jpg'
import viteLogo from '/vite.svg'

import Card from 'react-bootstrap/Card';
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
            <h2>Programmer | Game & Media Desinger</h2>
          </div>  
        </div>
      </div>
      <div className="Description">
        <div className="container">
          <div className="Column-Setup">

          </div>
          <p>I am Matthew MacNeil, programmer extraordinaire</p>
        </div>
        
      </div>
    </div>
  )
}

export default App

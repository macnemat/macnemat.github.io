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
      <div><img src={imageBanner} className="image-banner" alt="Hello There Image Banner"></img></div>
      <div>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      </div>
    </div>
  )
}

export default App

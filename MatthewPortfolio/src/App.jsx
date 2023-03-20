import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <nav>
          <p>This is suppose to be a nav bar</p>
        </nav>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Tristique nulla aliquet enim tortor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Varius quam quisque id diam vel. Mi in nulla posuere sollicitudin. Velit aliquet sagittis id consectetur purus ut. Eu sem integer vitae justo eget magna fermentum iaculis. Nisl rhoncus mattis rhoncus urna neque viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Morbi leo urna molestie at.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Tristique nulla aliquet enim tortor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Varius quam quisque id diam vel. Mi in nulla posuere sollicitudin. Velit aliquet sagittis id consectetur purus ut. Eu sem integer vitae justo eget magna fermentum iaculis. Nisl rhoncus mattis rhoncus urna neque viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Morbi leo urna molestie at.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Tristique nulla aliquet enim tortor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Varius quam quisque id diam vel. Mi in nulla posuere sollicitudin. Velit aliquet sagittis id consectetur purus ut. Eu sem integer vitae justo eget magna fermentum iaculis. Nisl rhoncus mattis rhoncus urna neque viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Morbi leo urna molestie at.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Tristique nulla aliquet enim tortor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Varius quam quisque id diam vel. Mi in nulla posuere sollicitudin. Velit aliquet sagittis id consectetur purus ut. Eu sem integer vitae justo eget magna fermentum iaculis. Nisl rhoncus mattis rhoncus urna neque viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Morbi leo urna molestie at.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Tristique nulla aliquet enim tortor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Varius quam quisque id diam vel. Mi in nulla posuere sollicitudin. Velit aliquet sagittis id consectetur purus ut. Eu sem integer vitae justo eget magna fermentum iaculis. Nisl rhoncus mattis rhoncus urna neque viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Morbi leo urna molestie at.
      </p>
    </div>
  )
}

export default App

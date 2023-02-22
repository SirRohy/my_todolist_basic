import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DarkMode from './react_components/DarkMode'
import DarkModeReactive from './react_components/DarkModeReactive'
import TopBar from './react_components/TopBar'
import TodoItems from './react_components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopBar/>
      <DarkModeReactive/>
      <TodoItems/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
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
      <button class="bg-red-300 text-green-400">Here we go! Don't F this up</button>
      <DarkMode/>
      
      
    </div>
  )
}

export default App

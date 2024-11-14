import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Navbar />
      <Manager />
    </Router>
  )
}

export default App

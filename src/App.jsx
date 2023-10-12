import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import StudentPage from './Pages/StudentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentPage />
    </>
  )
}

export default App

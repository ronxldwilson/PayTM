import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    </div>
    </>
  )
}

export default App

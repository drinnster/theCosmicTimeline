import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Cosmic Timeline</h1>
      <div class="mt-5">
        <button class="rounded-full bg-gray-600 px-6 py-2">
          Testing Tailwind
        </button>
      </div>
      </div>
    </>
  )
}

export default App

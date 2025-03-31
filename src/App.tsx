import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 class="text-supernovawhite">The Cosmic Timeline</h1>
      <div class="mt-5">
        <button class="rounded-full bg-meteororange text-supernovawhite px-6 py-2">
          Testing Tailwind
        </button>
      </div>
      </div>
    </>
  )
}

export default App

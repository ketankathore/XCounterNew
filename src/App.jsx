import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-shell">
      <p className="counter-label">Count: {count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((value) => value - 1)}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App

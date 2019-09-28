import React, { useState } from 'react'

import Button from '../../component/forms/Button'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>
        Clicks: <span data-testid="counter">{count}</span>
      </h1>
      <Button onClick={() => setCount(count => count + 1)}>Add</Button>
    </>
  )
}

export default App

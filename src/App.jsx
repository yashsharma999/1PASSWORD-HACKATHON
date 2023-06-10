import { useState } from 'react'
import AppBarComponent from './appBar/AppBar'
import Home from './home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBarComponent>
        <Home />
      </AppBarComponent>
    </>
  )
}

export default App

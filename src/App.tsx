import { useState } from 'react'
import './App.css'
import Stars from './components/Stars'

function App() {

  const [count, setCount] = useState(0)

  const handleClick = (count: number) =>{
    setCount(count+1)
  }

  return (
    <Stars count={count} onChange={handleClick}/>
  )
}

export default App

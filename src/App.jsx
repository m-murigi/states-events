import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount] = useState(0)
  function handleClick (){
    setCount(count -1)
  
  }

  // function handleClick(){
  //   alert('Clicked')
  // }
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>counter:{count}</h1>
     <button onClick={handleClick}>Increment</button>
  
    </>
  )
}

export default App

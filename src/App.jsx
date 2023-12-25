import './App.css'
import StartGame from './components/StartGame'
import Game from './components/Game'
import { useState } from 'react'

function App() {

  const[gameStarted,setGameStarted]=useState(false)

  const toggleButton=()=>{
    setGameStarted(prev=>!prev)
  }

  return (
    <>
    {gameStarted?<Game/>:<StartGame toggle={toggleButton}/>}  
    </>
  )
}

export default App

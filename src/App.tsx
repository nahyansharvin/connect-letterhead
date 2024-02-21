import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import AddLetterBody from './pages/AddLetterBody/AddLetterBody'
import Home from './pages/Home/Home'

function App() {
  const [club, setClub] = useState<string>("none")

  return (
    <>
      <Navbar />
      {club === "none" ? <Home setClub={setClub} /> : <AddLetterBody club={club} setClub={setClub} />} 
    </>
  )
}

export default App

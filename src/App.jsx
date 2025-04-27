import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Loginform from "./components/Loginform"
import { Routes, Route } from 'react-router-dom'
import Visualizer from "./components/Visualizer"
import { useState } from "react"
import SignUp from "./components/SignUp"
//import Chat from "./page/Chat.jsx"
import Chat from "./components/page/chat"

function App() {
const [algorithm, setAlgorithm] = useState([]);

  return (
    <div className="bg-gray-950 relative md:pt-3 min-h-[100vh] overflow-hidden w-full" >
      <div  className='home absolute z-0 inset-0'></div>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Routes>
        <Route path='/' element={<Home setAlgorithm={setAlgorithm}/>} />
        <Route path='/Visualizer' element={<Visualizer algorithm={algorithm} setAlgorithm={setAlgorithm} />} />
        <Route path='/Login' element={<Loginform />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Chat' element={<Chat />} />
      </Routes>
      
    </div>
  )
}

export default App



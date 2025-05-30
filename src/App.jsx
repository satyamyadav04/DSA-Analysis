import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Loginform from "./components/Loginform";
import { Routes, Route } from "react-router-dom";
import Visualizer from "./components/Visualizer";
import { useState } from "react";
import SignUp from "./components/SignUp";
// import Infd from "./Infd";
import Chat from "./Chat";
import Feedback from "./components/feedback";
function App() {
  const [algorithm, setAlgorithm] = useState([]);

  return (
    <div className="bg-gray-950 relative md:pt-3 min-h-[100vh] overflow-hidden w-full">
      <div className="home absolute z-0 inset-0 pointer-events-none"></div>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Routes>
        <Route path="/" element={<Home setAlgorithm={setAlgorithm} />} />
        <Route
          path="/Visualizer/:id"
          element={
            <Visualizer algorithm={algorithm} setAlgorithm={setAlgorithm} />
          }
        />
        <Route path="/Login" element={<Loginform />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/Ind" element={<Infd />} /> */}
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;

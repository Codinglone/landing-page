import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Message from "./components/Message.jsx";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/services" element={<Services services="Maintenace" phone="0784427142" /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/messages" element={<Message />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />}/>
        <Route path="/navbar" element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

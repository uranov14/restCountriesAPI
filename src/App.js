import React from "react"
import Countries from "./components/Countries"
import Country from "./components/Country"
import { HashRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
     <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;

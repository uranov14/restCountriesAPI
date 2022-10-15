import React from "react"
import Countries from "./components/Countries"
import Country from "./components/Country"
import { HashRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />}/>
      </Routes>
    </HashRouter> 
  );
}

export default App;

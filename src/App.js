import React from "react"
import Countries from "./components/Countries"
import Country from "./components/Country"
import { BrowserRouter as Router, HashRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />}/>
        </Routes>
      </HashRouter> 
    </Router>
  );
}

export default App;

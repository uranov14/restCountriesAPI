import React from "react"
import Countries from "./components/Countries"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Filter from "./components/Filter"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;

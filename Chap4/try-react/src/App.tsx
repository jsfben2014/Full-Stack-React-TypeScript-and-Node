import React from "react";
import "./App.css";
import Home from "./Home";
import AnotherScreen from './AnotherScreen';
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/another" element={<AnotherScreen />} />
      </Routes>
      </header>
    </div>
  );
}
export default App;

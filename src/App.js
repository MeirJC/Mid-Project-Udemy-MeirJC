import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
// import FatchCourse from "./components/FatchCourse";
// import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <InputSection />
      {/* <FatchCourse /> */}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

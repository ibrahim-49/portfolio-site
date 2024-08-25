import React from "react";
import "./index.css";
import { Navbar, Banner, Features, Projects } from "./components/index";
function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
      </div>
    </>
  );
}

export default App;

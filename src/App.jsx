import React from "react";
import "./index.css";
import {
  Navbar,
  Banner,
  Features,
  Projects,
  Testimonial,
  Contact,
} from "./components/index";
function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}

export default App;

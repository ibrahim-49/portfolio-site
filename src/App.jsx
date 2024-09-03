import React from "react";
import "./index.css";
import {
  Navbar,
  Banner,
  Features,
  Projects,
  Testimonial,
  Contact,
  Footer,
} from "./components/index";
function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Banner />
        {/* <Features />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;

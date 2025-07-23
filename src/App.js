import "./App.css";
import React, { useEffect } from "react";

// LIBRARIES
import AOS from "aos";
import "aos/dist/aos.css";

// COMPONENTS
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Why from "./Components/Why";
import Collections from "./Components/Collections";
import Story from "./Components/Story";
import Artisan from "./Components/Artisan";
import How from "./Components/How";
import Reviews from "./Components/Reviews";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Why />
      <Collections />
      <Story />
      <Artisan />
      <How />
      <Reviews />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

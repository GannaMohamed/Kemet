import logo from "./logo.svg";
import "./App.css";
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

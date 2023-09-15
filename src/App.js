import "./App.css";
import TopBar from "./Components/TopBar.js";
import Hero from "./Components/Hero.js";
import MainSection from "./Components/MainSection.js";
import Testimonial from "./Components/Testimonial.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <Hero />
      
      <MainSection />
      <Testimonial />
      <Footer/>
    </>
  );
}

export default App;

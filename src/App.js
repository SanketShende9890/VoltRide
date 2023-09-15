import "./App.css";
import TopBar from "./Components/TopBar.js";
import Hero from "./Components/Hero.js";
import MainSection from "./Components/MainSection.js";
import Testimonial from "./Components/Testimonial.js";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <Hero />
      
      <MainSection />
      <Testimonial />
      <footer></footer>
    </>
  );
}

export default App;

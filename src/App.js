import "./App.css";
import TopBar from "./Components/TopBar.js";
import MainSection from "./Components/MainSection.js";

function App() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <MainSection/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

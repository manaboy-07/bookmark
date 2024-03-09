import "./App.css";
import Card from "./components/Card";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LabTabs from "./components/LabTabs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <LabTabs />
      <Extension />

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

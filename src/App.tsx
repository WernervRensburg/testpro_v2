import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Landing from "./sections/Landing";
import Description from "./sections/Description";
import Services from "./sections/Services";
import SiteLabs from "./sections/SiteLabs";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Description />
      <Services />
      <SiteLabs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

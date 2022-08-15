// import Face from "./components/headerImage";
// import Header from "./components/header";
import About from  "./components/About"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";
import SocialLinks  from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default App;

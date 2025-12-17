import MyNavbar from "../MyNavbar";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Skills from "../Skills";

import "./index.css";

const Home_page = () => (
  <div className="home-page-bg-container">
    <MyNavbar />
    <About />
    <Contact />
    <Projects />
    <Skills />
  </div>
);

export default Home_page;

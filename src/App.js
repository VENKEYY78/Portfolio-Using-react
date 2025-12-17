import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SSC from "./components/EducationDetials/SSC";
import DIPLAMO from "./components/EducationDetials/DIPLAMO";
import Btech from "./components/EducationDetials/Btech";

const App = () => (
  <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />}>
        <Route path="ssc" element={<SSC />} />
        <Route path="diplamo" element={<DIPLAMO />} />
        <Route path="btech" element={<Btech />} />
      </Route>
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;

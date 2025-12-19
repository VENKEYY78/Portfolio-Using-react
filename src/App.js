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
import Bootstrap from "./components/SkillsDetails/Bootstrap";
import ExpressJs from "./components/SkillsDetails/ExpressJs";
import HtmlAndCss from "./components/SkillsDetails/HtmlAndCss";
import Javascript from "./components/SkillsDetails/Javascript";
import MySql from "./components/SkillsDetails/MySql";
import NodeJs from "./components/SkillsDetails/NodeJs";
import Python from "./components/SkillsDetails/Python";
import React from "./components/SkillsDetails/React";

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
      <Route path="/skills" element={<Skills />}>
        <Route path="bootstrap" element={<Bootstrap />} />
        <Route path="expressjs" element={<ExpressJs />} />
        <Route path="htmlandcss" element={<HtmlAndCss />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="mysql" element={<MySql />} />
        <Route path="nodejs" element={<NodeJs />} />
        <Route path="python" element={<Python />} />
        <Route path="react" element={<React />} />
      </Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;

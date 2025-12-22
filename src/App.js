import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SSC from "./components/About/EducationDetials/SSC";
import DIPLAMO from "./components/About/EducationDetials/DIPLAMO";
import Btech from "./components/About/EducationDetials/Btech";
import Bootstrap from "./components/Skills/SkillsDetails/Bootstrap";
import ExpressJs from "./components/Skills/SkillsDetails/ExpressJs";
import HtmlAndCss from "./components/Skills/SkillsDetails/HtmlAndCss";
import Javascript from "./components/Skills/SkillsDetails/Javascript";
import MySql from "./components/Skills/SkillsDetails/MySql";
import NodeJs from "./components/Skills/SkillsDetails/NodeJs";
import Python from "./components/Skills/SkillsDetails/Python";
import React from "./components/Skills/SkillsDetails/React";
import TodoList from "./components/Skills/SkillsDetails/HtmlAndCss/HtmlAndCssProjects/TodoList";
// import HtmlAndCssProjects from "./components/SkillsDetails/HtmlAndCss";

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
        <Route path="htmlandcss" element={<HtmlAndCss />}>
          <Route path="todoList" element={<TodoList />} />
        </Route>
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

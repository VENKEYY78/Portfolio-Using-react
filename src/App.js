import { BrowserRouter, Route, Routes } from "react-router-dom"; // installed react router dom

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

import TodoList from "./components/Skills/SkillsDetails/HtmlAndCss/TodoList";
import ChatPage from "./components/Skills/SkillsDetails/HtmlAndCss/ChatPage";
import CodingCoverPage from "./components/Skills/SkillsDetails/HtmlAndCss/CodingCoverPage";
import FoodOrderPage from "./components/Skills/SkillsDetails/HtmlAndCss/FoodOrderPage";
import AdvancedTechCard from "./components/Skills/SkillsDetails/HtmlAndCss/AdvancedTechCoverPage";
import NewsPage from "./components/Skills/SkillsDetails/HtmlAndCss/NewsPage";
import CricketerPage from "./components/Skills/SkillsDetails/HtmlAndCss/CricketerPage";

import ProjectDetails from "./components/Skills/ProjectDetails";

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

      <Route
        path="/skills/htmlandcss/:projectName/details"
        element={<ProjectDetails />}
      />

      <Route path="/skills/htmlandcss/todolist" element={<TodoList />} />
      <Route path="/skills/htmlandcss/chatpage" element={<ChatPage />} />
      <Route
        path="/skills/htmlandcss/foodorderpage"
        element={<FoodOrderPage />}
      />
      <Route
        path="skills/htmlandcss/codingcoverpage"
        element={<CodingCoverPage />}
      />
      <Route
        path="skills/htmlandcss/advancedtechcoverpage"
        element={<AdvancedTechCard />}
      />
      <Route path="skills/htmlandcss/newspage" element={<NewsPage />} />

      <Route
        path="skills/htmlandcss/cricketespage"
        element={<CricketerPage />}
      />

      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;

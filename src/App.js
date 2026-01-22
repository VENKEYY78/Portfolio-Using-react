import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // installed react router dom
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap framework
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import SSC from "./components/About/EducationDetials/SSC";
import Diploma from "./components/About/EducationDetials/Diploma";
import Btech from "./components/About/EducationDetials/Btech";

import Bootstrap from "./components/Skills/SkillsDetails/Bootstrap";
import ExpressJs from "./components/Skills/SkillsDetails/ExpressJs";
import HtmlAndCss from "./components/Skills/SkillsDetails/HtmlAndCss";
import Javascript from "./components/Skills/SkillsDetails/Javascript";
import MySql from "./components/Skills/SkillsDetails/MySql";
import NodeJs from "./components/Skills/SkillsDetails/NodeJs";
import Python from "./components/Skills/SkillsDetails/Python";
import React from "./components/Skills/SkillsDetails/React";
import ALL from "./components/Skills/SkillsDetails/ALL";

import TodoList from "./components/Skills/SkillsDetails/HtmlAndCss/TodoList";
import ChatPage from "./components/Skills/SkillsDetails/HtmlAndCss/ChatPage";
import CodingCoverPage from "./components/Skills/SkillsDetails/HtmlAndCss/CodingCoverPage";
import FoodOrderPage from "./components/Skills/SkillsDetails/HtmlAndCss/FoodOrderPage";
import AdvancedTechCard from "./components/Skills/SkillsDetails/HtmlAndCss/AdvancedTechCoverPage";
import NewsPage from "./components/Skills/SkillsDetails/HtmlAndCss/NewsPage";
import HotelBookingPage from "./components/Skills/SkillsDetails/HtmlAndCss/HotelBookingPage";
import CricketerPage from "./components/Skills/SkillsDetails/HtmlAndCss/CricketerPage";
import Covid19Page from "./components/Skills/SkillsDetails/HtmlAndCss/Covid19Page";
import GoaPage from "./components/Skills/SkillsDetails/HtmlAndCss/GoaPage";
import MobileSpecificationsPage from "./components/Skills/SkillsDetails/HtmlAndCss/MobileSpecificationsPage";
import ConferencePage from "./components/Skills/SkillsDetails/HtmlAndCss/ConferencePage";
import QuizQuestionsPage from "./components/Skills/SkillsDetails/HtmlAndCss/QuizQuestionPage";
import PodcastPage from "./components/Skills/SkillsDetails/HtmlAndCss/PodcastPage";
import MusicPage from "./components/Skills/SkillsDetails/HtmlAndCss/MusicPage";
import BookStorePage from "./components/Skills/SkillsDetails/HtmlAndCss/BookStorePage";
import ColorPicker from "./components/Skills/SkillsDetails/Javascript/ColorPicker";
import MyprojectsPage from "./components/Skills/SkillsDetails/HtmlAndCss/MyProjectPage";
import FavoriteStoresPage from "./components/Skills/SkillsDetails/HtmlAndCss/FavoriteStoresPage";
import FoundationsPage from "./components/Skills/SkillsDetails/HtmlAndCss/FoundationsPage";
import YogaPage from "./components/Skills/SkillsDetails/HtmlAndCss/YogaPage";
import FlatsPage from "./components/Skills/SkillsDetails/HtmlAndCss/FlatsPage";
import ArticlesPage from "./components/Skills/SkillsDetails/HtmlAndCss/ArticlesPage";

import ProjectDetails from "./components/Skills/ProjectDetails";

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <ScrollToTop />
      <MyNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Navigate to="ssc" replace />} />
          <Route path="ssc" element={<SSC />} />
          <Route path="diploma" element={<Diploma />} />
          <Route path="btech" element={<Btech />} />
        </Route>
        <Route path="/skills" element={<Skills />}>
          <Route index element={<Navigate to="all" replace />} />
          <Route path="all" element={<ALL />} />
          <Route path="bootstrap" element={<Bootstrap />} />
          <Route path="expressjs" element={<ExpressJs />} />
          <Route path="htmlandcss" element={<HtmlAndCss />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="mysql" element={<MySql />} />
          <Route path="nodejs" element={<NodeJs />} />
          <Route path="python" element={<Python />} />
          <Route path="react" element={<React />} />
        </Route>
        {/* ALL PROJECTS Page Details Routes */}
        <Route
          path="/skills/all/:projectName/details"
          element={<ProjectDetails />}
        />
        {/* HTML and CSS Projects Details Routes */}
        <Route
          path="/skills/htmlandcss/:projectName/details"
          element={<ProjectDetails />}
        />
        {/* JAVASCRIPT Projects Details Routes */}
        <Route
          path="/skills/javascript/:projectName/details"
          element={<ProjectDetails />}
        />
        {/* BOOTSTRAP Projects Details Routes */}
        <Route
          path="/skills/bootstrap/:projectName/details"
          element={<ProjectDetails />}
        />
        <Route path="/skills/html/todolist" element={<TodoList />} />
        <Route path="/skills/html/chatpage" element={<ChatPage />} />
        <Route
          path="skills/html/codingcoverpage"
          element={<CodingCoverPage />}
        />
        <Route path="/skills/html/foodorderpage" element={<FoodOrderPage />} />
        <Route
          path="/skills/html/advancedtechcoverpage"
          element={<AdvancedTechCard />}
        />
        <Route path="/skills/html/newspage" element={<NewsPage />} />
        <Route
          path="/skills/html/hotelBooking"
          element={<HotelBookingPage />}
        />
        <Route path="/skills/html/cricketerpage" element={<CricketerPage />} />
        <Route path="/skills/html/covid19page" element={<Covid19Page />} />
        <Route path="/skills/html/goaPage" element={<GoaPage />} />
        <Route
          path="/skills/html/mobilespecificationspage"
          element={<MobileSpecificationsPage />}
        />
        <Route
          path="/skills/html/conferencePage"
          element={<ConferencePage />}
        />
        <Route
          path="/skills/html/quizQuestionPage"
          element={<QuizQuestionsPage />}
        />
        <Route path="/skills/html/podcastPage" element={<PodcastPage />} />
        <Route path="/skills/html/musicPage" element={<MusicPage />} />
        <Route path="/skills/html/bookStorePage" element={<BookStorePage />} />
        <Route
          path="/skills/html/myProjectsPageSection"
          element={<MyprojectsPage />}
        />
        <Route
          path="/skills/html/favoriteStoresPage"
          element={<FavoriteStoresPage />}
        />
        <Route
          path="/skills/html/foundationsPage"
          element={<FoundationsPage />}
        />
        <Route path="/skills/html/yogaExperiencePage" element={<YogaPage />} />
        <Route path="/skills/html/flatsBookingPage" element={<FlatsPage />} />
        <Route
          path="/skills/html/articlesCarouselPage"
          element={<ArticlesPage />}
        />

        <Route
          path="/skills/javascript/colorpicker"
          element={<ColorPicker />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;

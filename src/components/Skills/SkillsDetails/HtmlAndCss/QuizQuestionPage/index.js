import BackButton from "../../backButton.";

import "./index.css";

const QuizQuestionsPage = () => (
  <div class="Quiz-Question-page-main-bg-container">
    <h1 class="score-heading">Score:25/45</h1>
    <div class="question-container">
      <h1 class="Question-heading">Question 10</h1>
      <p class="Question-para">
        Which of the following is the content of the HTML paragraph element?
      </p>
      <img
        src=" https://d2clawv67efefq.cloudfront.net/ccbp-static-website/coding-question-img.png"
        class="coding-page-image"
      />
    </div>
    <div class="options-container">
      <ol class="ordered-list">
        <li class="list-item">A.HTML heading element</li>
        <li class="list-item">B.HTML paragraph element</li>
        <li class="list-item selected">C.This is paragraph.....</li>
        <li class="list-item">D.None of the given options</li>
      </ol>
      <button class="btn btn-warning button">Submit</button>
    </div>
  </div>
);

export default QuizQuestionsPage;

import BackButton from "../../backButton.";

import "./index.css";

const NewsPage = () => (
  <div class="news-page-main-bg-container d-flex flex-column justify-content-end">
    <div class="news-page-card-container">
      <p class="main-heading">NEWS OF THE DAY</p>
      <h1 class="content-heading">
        iB Cricket announces world's first Virtual Reality Cricket League
      </h1>
      <p class="content">
        IB Cricket and Viu togrther have announced the World's first virtual
        reality cricket league featuring 12 international cricketers, who will
        be competing against each other for the iB Cricket Super Over League
        title in Mumbai. Iconic cricketers like Virender sehwag, Suresh Raina
        ,Brendon McCullum will be Competing in the league.
      </p>
      <button class="button">Read more</button>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default NewsPage;

import BackButton from "../../backButton";

import "./index.css";

const NewsPage = () => (
  <div className="news-page-main-bg-container">
    <div className="news-page-card-container">
      <p className="news-card-main-heading">NEWS OF THE DAY</p>
      <h1 className="news-card-content-heading">
        iB Cricket announces world's first Virtual Reality Cricket League
      </h1>
      <p className="news-card-content">
        IB Cricket and Viu togrther have announced the World's first virtual
        reality cricket league featuring 12 international cricketers, who will
        be competing against each other for the iB Cricket Super Over League
        title in Mumbai. Iconic cricketers like Virender sehwag, Suresh Raina
        ,Brendon McCullum will be Competing in the league.
      </p>
      <button className="news-card-button">Read more</button>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default NewsPage;

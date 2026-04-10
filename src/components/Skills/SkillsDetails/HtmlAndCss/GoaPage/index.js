import BackButton from "../../backButton";
import Carousel from "react-bootstrap/Carousel";

import "./index.css";

const GoaPage = () => (
  <div className="Goa-page-main-bg-container">
    <div className="carousel-contai">
      <Carousel>
        <Carousel.Item className="Carousel-item">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c1-img.png"
            alt="carouselImage"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item className="Carousel-item">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c2-img.png"
            alt="carouselImage"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item className="Carousel-item">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c3-img.png"
            alt="carouselImage"
            className="carousel-image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="goa-bottom-section">
      <div className="about-container">
        <h1 className="goa-about-heading">About</h1>
        <p className="goa-about-paragragh">
          Goa is known for its striking landscap,famous beahes in india
          ,especia;y on weekends, as it is not very far from mumbai landscap a
          large number of touritsts from over the world ,round the year.
        </p>
      </div>
      <div>
        <h1 className="goa-image-section-heading">More Picture</h1>
        <div className="Goa-images-section-container">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more1-img.png"
            alt="GoaImage"
            className="goa-images"
          />
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more2-img.png"
            alt="GoaImage"
            className="goa-images"
          />
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more3-img.png"
            alt="GoaImage"
            className="goa-images"
          />
        </div>
      </div>

      <div className="videos-container-section">
        <h1 className="goa-videos-heading">Videos</h1>
        <div className="videos-container">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/NFalCkZAClY"
              title="Video 1"
              className="goa-youtube-video"
              allowFullScreen
            ></iframe>
          </div>

          <div className="ratio ratio-16x9 ">
            <iframe
              src="https://www.youtube.com/embed/4irzfMfTmM8"
              title="Video 2"
              className="goa-youtube-video"
              allowFullScreen
            ></iframe>
          </div>

          <div className="ratio ratio-16x9 ">
            <iframe
              src="https://www.youtube.com/embed/OJu0gjzsvQE"
              title="Video 3"
              className="goa-youtube-video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="back-navigate-button-container">
        <BackButton />
      </div>
    </div>
  </div>
);

export default GoaPage;

/*
  <div className="Goa-page-main-bg-container">
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c1-img.png"
              className="d-block w-100"
              alt="Goa image 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c2-img.png"
              className="d-block w-100"
              alt="Goa image 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c3-img.png"
              className="d-block w-100"
              alt="Goa image 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    
     
      <div className="videos-container d-flex flex-row">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/NFalCkZAClY?rel=0"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/4irzfMfTmM8?rel=0"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/OJu0gjzsvQE?rel=0"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  */

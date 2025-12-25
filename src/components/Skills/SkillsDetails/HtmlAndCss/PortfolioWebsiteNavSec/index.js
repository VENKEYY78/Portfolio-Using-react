import "./index.css";

const PortfolioWebsiteNavSec = () => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand s-section" href="#">
        S.
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active text-white" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link text-white" href="#">
            About me
          </a>
          <a class="nav-link text-white" href="#">
            Projects
          </a>
          <a class="nav-link text-white" href="#">
            Recent Blogs
          </a>
          <a class="nav-link text-white" href="#">
            Testimonial
          </a>
        </div>
      </div>
    </nav>
    <div class="protfolio-card-bg d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 order-1 order-md-2">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png"
              class="banner-section w-75"
            />
          </div>

          <div class="col-12 col-md-7 order-2 order-md-1">
            <div class="pt-5 pb-5">
              <h1 class="heading-01">
                Hey,I am <span class="jenny">Jenny</span>
              </h1>
              <p class="paragraph-01">I am a Frontend Developer & Mentor.</p>
              <button class="btn btn-primary">contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PortfolioWebsiteNavSec;

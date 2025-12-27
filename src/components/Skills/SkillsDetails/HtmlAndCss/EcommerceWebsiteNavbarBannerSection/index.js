import "./index.css";

const EcommerceWebsiteNavbarBannerSection = () => (
  <>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
            class="ecommerce-website-logo-img"
          />
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
            <a class="nav-link active nav-iteam-1" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link nav-iteam-2" href="#">
              Service
            </a>
            <a class="nav-link nav-iteam-3" href="#">
              Products
            </a>
            <a class="nav-link nav-iteam-4" href="#">
              Explore Deals Offers
            </a>
            <a class="nav-link nav-iteam-5" href="#">
              Trendings
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-sm-img.png"
            class="d-inline d-md-none w-100 "
            alt="..."
          />
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-sm-img.png"
            class=" w-100 d-none d-md-inline"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-sm-img.png"
            class=" w-100 d-inline d-md-none"
            alt="..."
          />
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-sm-img.png"
            class=" w-100 d-none d-md-inline"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-sm-img.png"
            class="w-100 d-inline d-md-none"
            alt="..."
          />
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-sm-img.png"
            class="w-100 d-none d-md-inline"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </>
);

export default EcommerceWebsiteNavbarBannerSection;

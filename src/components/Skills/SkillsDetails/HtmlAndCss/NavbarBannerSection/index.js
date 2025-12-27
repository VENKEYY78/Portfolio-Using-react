import "./index.css";

const NavbarBannerSection = () => (
  <>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">
          <img
            src="https://assets.ccbp.in/frontend/responsive-website/landing-section-design-logo-img.png"
            class="logo-image"
          />
        </a>
        <button
          class="navbar-toggler dots"
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
            <a class="nav-link active" id="heading1" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" id="heading2" href="#">
              Features
            </a>
            <a class="nav-link" id="heading3" href="#">
              Pricing
            </a>
            <a class="nav-link" id="heading4" href="#">
              Blog
            </a>
            <a class="nav-link" id="heading5" href="#">
              Contacts
            </a>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="col-12">
          <div class="design-bg-container ">
            <div class="text-center">
              <h1 class="heading">
                The most <span class="span">flexible</span> web design tool
              </h1>
              <p class="para">
                We've done it carefully and simply, Combined with the
                ingredients makes for beatiful landings. it is the tool you need
                to speed up your design process.
              </p>
              <button class="but">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NavbarBannerSection;

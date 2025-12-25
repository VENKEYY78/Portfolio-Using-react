import "./index.css";

const FoodMunchNavbar = () => (
  <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-img.png"
        class="food-munch-logo-img"
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
      <div class="navbar-nav navbar-card">
        <a class="nav-link active" href="#">
          Home <span class="sr-only">(current)</span>
        </a>
        <a class="nav-link" href="#">
          Why choose Us?
        </a>
        <a class="nav-link" href="#">
          Explore Our Menu
        </a>
        <a class="nav-link" href="#">
          Delivery & Payment
        </a>
        <a class="nav-link" href="#">
          Follows Us
        </a>
      </div>
    </div>
  </nav>
);

export default FoodMunchNavbar;

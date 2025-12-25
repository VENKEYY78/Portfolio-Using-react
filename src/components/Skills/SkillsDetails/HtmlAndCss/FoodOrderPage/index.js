import BackButton from "../../backButton.";

import "./index.css";

const FoodOrderPage = () => (
  <div class="food-order-pade-main-bg-container d-flex flex-column justify-content-end">
    <div class="card-container">
      <h1 class="heading">Happy Meals</h1>
      <p class="paragragh">
        Discover the best foods over the 1,000 restaurants
      </p>
      <button class="button btn btn-light ">Book Now</button>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default FoodOrderPage;

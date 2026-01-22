import BackButton from "../../backButton";

import "./index.css";

const FoodOrderPage = () => (
  <div class="food-order-pade-main-bg-container">
    <div class="food-order-card-container">
      <h1 class="food-order-card-heading">Happy Meals</h1>
      <p class="food-order-card-paragragh">
        Discover the best foods over the 1,000 restaurants
      </p>
      <button class="food-order-button btn btn-light ">Book Now</button>
    </div>
    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default FoodOrderPage;

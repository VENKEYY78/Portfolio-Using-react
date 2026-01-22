import BackButton from "../../backButton";

import "./index.css";

const FavoriteStoresPage = () => (
  <div className="shop-main-heading-card">
    <div className="shop-to-section">
      <h1 className="shop-first-heading">Shop in your favorite stores</h1>
      <img
        src="https://assets.ccbp.in/frontend/static-website/stores-img.png"
        className="shop-img-card"
        alt="favoriteStroresImage"
      />
    </div>

    <div className="shop-bottom-section">
      <div className="shop-container">
        <div className="d-flex flex-row online-shop-container">
          <img
            src="https://assets.ccbp.in/frontend/static-website/amazon-logo-img.png"
            className="amazon-logo-img"
            alt="favoriteStroresImage"
          />
          <div className="amazon">
            <h1 className="Amazon-heading-card">Amazon</h1>
            <p className="Amazon-paragraph-card">
              Online Shopping Free Shipping & Cash on Delivery...
            </p>
          </div>
        </div>

        <div className="d-flex flex-row online-shop-container">
          <img
            src="https://assets.ccbp.in/frontend/static-website/ikea-logo-img.png"
            className="amazon-logo-img"
            alt="favoriteStroresImage"
          />
          <div className="amazon">
            <h1 className="Amazon-heading-card">IKEA</h1>
            <p className="Amazon-paragraph-card">
              Explore our furniture & home furnishing range.IKEA is a gobal
              leader...
            </p>
          </div>
        </div>
      </div>
      <div className="shop-container">
        <div className="d-flex flex-row online-shop-container">
          <img
            src="https://assets.ccbp.in/frontend/static-website/bewakoof-logo-img.png"
            className="amazon-logo-img"
            alt="favoriteStroresImage"
          />
          <div className="amazon">
            <h1 className="Amazon-heading-card">Bewakoof</h1>
            <p className="Amazon-paragraph-card">
              A Lifestyle Fashion Brand That Offers Creative and Distinctive
              Fashion...
            </p>
          </div>
        </div>

        <div className="d-flex flex-row online-shop-container">
          <img
            src="https://assets.ccbp.in/frontend/static-website/flipkart-logo-img.png"
            className="amazon-logo-img"
            alt="favoriteStroresImage"
          />
          <div className="amazon">
            <h1 className="Amazon-heading-card">Flipkart</h1>
            <p className="Amazon-paragraph-card">
              wide Range of genuine Products,Easy Returns cash on Delivery,
              Browse Now...
            </p>
          </div>
        </div>
      </div>
      <div className="back-navigate-button-container">
        <BackButton />
      </div>
    </div>
  </div>
);

export default FavoriteStoresPage;

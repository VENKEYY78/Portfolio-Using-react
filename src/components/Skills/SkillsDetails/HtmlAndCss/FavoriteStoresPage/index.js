import "./index.css";

const FavoriteStoresPage = () => (
  <div class="shop-main-heading-card">
    <div class="d-flex flex-row justify-content-">
      <h1 class="shop-first-heading">Shop in your favorite stores</h1>
      <img
        src="https://assets.ccbp.in/frontend/static-website/stores-img.png"
        class="shop-img-card"
      />
    </div>

    <div class="shop-bottom-section">
      <p class="opsection-bottom-section">Select your store with one click</p>
      <div class="d-flex flex-row">
        <img
          src="https://assets.ccbp.in/frontend/static-website/amazon-logo-img.png"
          class="amazon-logo-img"
        />
        <div class="amazon">
          <h1 class="Amazon-heading-card">Amazon</h1>
          <p class="Amazon-paragraph-card">
            Online Shopping Free Shipping & Cash on Delivery...
          </p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <img
          src="https://assets.ccbp.in/frontend/static-website/ikea-logo-img.png"
          class="amazon-logo-img"
        />
        <div class="amazon">
          <h1 class="Amazon-heading-card">IKEA</h1>
          <p class="Amazon-paragraph-card">
            Explore our furniture & home furnishing range.IKEA is a gobal
            leader...
          </p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <img
          src="https://assets.ccbp.in/frontend/static-website/bewakoof-logo-img.png"
          class="amazon-logo-img"
        />
        <div class="amazon">
          <h1 class="Amazon-heading-card">Bewakoof</h1>
          <p class="Amazon-paragraph-card">
            A Lifestyle Fashion Brand That Offers Creative and Distinctive
            Fashion...
          </p>
        </div>
      </div>

      <div class="d-flex flex-row">
        <img
          src="https://assets.ccbp.in/frontend/static-website/flipkart-logo-img.png"
          class="amazon-logo-img"
        />
        <div class="amazon">
          <h1 class="Amazon-heading-card">Flipkart</h1>
          <p class="Amazon-paragraph-card">
            wide Range of genuine Products,Easy Returns cash on Delivery, Browse
            Now...
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FavoriteStoresPage;

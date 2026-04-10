import BackButton from "../../backButton";

import "./index.css";

const HotelBookingPage = () => (
  <div className="hotal-booking-page-main-bg-container">
    <div className="hotal-booking-card-container">
      <h1 className="hotal-booking-name-heading">Royal Grand Hotal</h1>
      <p className="hotal-booking-land-mark">R.K Beach, Visakhapatnam</p>
      <br />
      <p className="hotal-booking-price">1200/-</p>
      <div className="hotal-booking-button-container d-flex flex-row justify-content-center">
        <button className="hotal-booking-button">Book Now</button>
      </div>
    </div>

    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default HotelBookingPage;

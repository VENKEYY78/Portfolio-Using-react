import { useState } from "react";
import "./index.css";

const FlatPages = {
  Home: "flatPageHome",
  ListPage: "flatsListPage",
  FourBHK: "FourBhkFlatPage",
  TwoBHk: "twoBhkFlatPage",
  ThreeBHK: "threeBhkFlatPage",
};

const FlatsPage = () => {
  const [actviveFlatPage, setActiveFlatPage] = useState(FlatPages.Home);

  return (
    <>
      {actviveFlatPage === FlatPages.Home && (
        <div className="flats-main-bg-card">
          <div className="sunrise-card-section">
            <h1 className="Sunrise-main-heading">Sunrise Avenue</h1>
            <p className="sunrise-main-paragraph pb-4">
              move to what moves you.
            </p>
            <button
              className="flat-booking-button"
              onClick={() => setActiveFlatPage(FlatPages.ListPage)}
            >
              Book Flat Now
            </button>
            <p className="danger">click and Book Now</p>
          </div>
        </div>
      )}

      {actviveFlatPage === FlatPages.ListPage && (
        <div className="sunrise-bottom-bg-section">
          <h1 className="Sunrise-main-heading2 pl-2 text-center">
            Sunrise Avenue
          </h1>
          <u className="flat-container">
            <div
              className="flats-list-bg-card d-flex flex-row"
              onClick={() => setActiveFlatPage(FlatPages.ThreeBHK)}
            >
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/static-website/flats-list-card1-img.png"
                  className="flats-list-card1-img"
                  alt="flatImage"
                />
              </div>
              <div className="flat-main-bg-card-section">
                <h1 className="bhk-flat-heading">3BHK Flat</h1>
                <p className="bhk-flat-paragraph">
                  This is a flully furnished house with handmae furniture
                  including aluxry en-suite facilites pack.its built-up area is
                  about 1600sq. A spaious home for you to live in
                </p>
              </div>
            </div>

            <div
              className="flats-list-bg-card d-flex flex-row"
              onClick={() => setActiveFlatPage(FlatPages.TwoBHk)}
            >
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/static-website/flats-list-card2-img.png"
                  className="flats-list-card1-img"
                  alt="flatImage"
                />
              </div>
              <div className="flat-main-bg-card-section">
                <h1 className="bhk-flat-heading">2BHK Flat</h1>
                <p className="bhk-flat-paragraph">
                  This is a flully furnished house with handmae furniture
                  including aluxry en-suite facilites pack.its built-up area is
                  about 1600sq. A spaious home for you to live in
                </p>
              </div>
            </div>

            <div
              className="flats-list-bg-card d-flex flex-row"
              onClick={() => setActiveFlatPage(FlatPages.ThreeBHK)}
            >
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/static-website/flats-list-card3-img.png"
                  className="flats-list-card1-img"
                  alt="flatImage"
                />
              </div>
              <div className="flat-main-bg-card-section">
                <h1 className="bhk-flat-heading">4BHK Flat</h1>
                <p className="bhk-flat-paragraph">
                  This is a flully furnished house with handmae furniture
                  including aluxry en-suite facilites pack.its built-up area is
                  about 1600sq. A spaious home for you to live in
                </p>
              </div>
            </div>
          </u>
          <div>
            <button
              className="button2 m-4"
              onClick={() => setActiveFlatPage(FlatPages.Home)}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {actviveFlatPage === FlatPages.ThreeBHK && (
        <div className="bhk-bg-containe">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/static-website/flats-list-d1-img.png"
              className="image-01"
              alt="flatImage"
            />
          </div>
          <h1 className="price-heading">Rs 3000/-</h1>
          <div className="d-flex flex-row p-4">
            <img
              src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png"
              className="flats-list-location-icon-img"
              alt="flatImage"
            />
            <p className="food-location-paragraph pb-3">
              D/N S-2,Food Street,Indore
            </p>
          </div>
          <hr className="hr-line" />
          <div className="p-4">
            <h1 className="description-heading"> Description</h1>
            <p className="description-paragraph">
              This is a fully furnished house with handmade furniture including
              a luxury en-suite facilities pack.it's built-up area is about
              1600sq,ft,A spacious home for you to live in.
            </p>
          </div>
          <div className="text-center p-3">
            <button className="button2 pl-2">Confirm</button>
            <button
              className="button2 pr-2"
              onClick={() => setActiveFlatPage(FlatPages.ListPage)}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {actviveFlatPage === FlatPages.TwoBHk && (
        <div className="bhk-bg-containe">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/static-website/flats-list-d2-img.png"
              className="image-01"
              alt="flatImage"
            />
          </div>
          <h1 className="price-heading">Rs 4000/-</h1>
          <div className="d-flex flex-row p-4">
            <img
              src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png"
              className="flats-list-location-icon-img"
              alt="flatImage"
            />
            <p className="food-location-paragraph pb-3">
              D/N S-2,Food Street,Indore
            </p>
          </div>
          <hr className="hr-line" />

          <div className="p-4">
            <h1 className="description-heading"> Description</h1>
            <p className="description-paragraph">
              This is a fully furnished house with handmade furniture including
              a luxury en-suite facilities pack.it's built-up area is about
              1600sq,ft,A spacious home for you to live in.
            </p>
          </div>
          <div className="text-center p-3">
            <button className="button2 pl-2">Confirm</button>
            <button
              className="button2 pr-2"
              onClick={() => setActiveFlatPage(FlatPages.ListPage)}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {actviveFlatPage === FlatPages.FourBHK && (
        <div id="section4">
          <div className="bhk-bg-containe">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/static-website/flats-list-d3-img.png"
                className="image-01"
                alt="flatImage"
              />
            </div>
            <h1 className="price-heading">Rs 2000/-</h1>
            <div className="d-flex flex-row p-4">
              <img
                src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png"
                className="flats-list-location-icon-img"
                alt="flatImage"
              />
              <p className="food-location-paragraph pb-3">
                D/N S-2,Food Street,Indore
              </p>
            </div>
            <hr className="hr-line" />

            <div className="p-4">
              <h1 className="description-heading"> Description</h1>
              <p className="description-paragraph">
                This is a fully furnished house with handmade furniture
                including a luxury en-suite facilities pack.it's built-up area
                is about 1600sq,ft,A spacious home for you to live in.
              </p>
            </div>
            <div className="text-center p-3">
              <button className="button2 pl-2">Confirm</button>
              <button
                className="button2 pr-2"
                onClick={() => setActiveFlatPage(FlatPages.ListPage)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlatsPage;

/*

     

      
        
      
        
     
      */

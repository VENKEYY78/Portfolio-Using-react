import { useState } from "react";
import BackButton from "../../backButton";

import "./index.css";

const activePage = {
  Home: "BookStoreHomePage",
  AbdulKalam: "AbdulKalamBookPage",
  TheMistakes: "The3MistackesofLifeBookPage",
  HarryPorter: "HarryPorterBookPage",
};

const BookStorePage = () => {
  const [bookStoreActivePage, setActiveBookPage] = useState(activePage.Home);
  return (
    <>
      {bookStoreActivePage === activePage.Home && (
        <div className="popular-book-store-home-page-bg-container">
          <h1 className="popular-book-store-home-page-heading">Popular Book</h1>

          {/*  <!--Wings of Fire Book Container--> */}
          <div className="wings-of-fire-book-container">
            <div className="wings-of-fire-book-img-container">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-apj-img.png"
                className="wings-of-fire-book-image"
                alt="bookStoreImage"
              />
            </div>
            <div className="wings-of-fire-book-details-container">
              <h1 className="wings-of-fire-book-heading">Wings of Fire</h1>
              <p className="wings-of-fire-book-para">
                An Autobiograpy of Abdul Kalam
              </p>
              <p className="wings-of-fire-book-author">by Arun Tiwari</p>
              <div className="wings-of-fire-book-read-me-button-container">
                <button
                  className="read-now-button"
                  onClick={() => setActiveBookPage(activePage.AbdulKalam)}
                >
                  Read Now
                </button>
              </div>
            </div>
          </div>
          <h1 className="Recommended-books-container">Recommended Books</h1>

          {/*  <!--Recommended Books Main Container--> */}
          <div className="popular-book-store-recommended-books-container">
            {/*   <!--The 3 Mistakes of Life Book Container--> */}
            <div className="the-3-mistakes-of-my-life-book-container">
              <did className="the-3-mistakes-of-my-life-book-img-container">
                <img
                  src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
                  className="the-3-mistakes-of-my-life-book-image"
                  alt="bookStoreImage"
                />
              </did>
              <div className="the-3-mistakes-of-my-life-book-details-container">
                <h1 className="the-3-mistakes-of-my-life-book-heading">
                  The 3 mistakes of my life
                </h1>
                <p className="">Indian author</p>
                <p className="the-3-mistakes-of-my-life-book-author">
                  by Chetan Bhagat
                </p>
                <div className="the-3-mistakes-of-my-life-book-read-now-button-container">
                  <button
                    className="the-3-mistakes-of-my-life-book-read-now-button"
                    onClick={() => setActiveBookPage(activePage.TheMistakes)}
                  >
                    Read Now
                  </button>
                </div>
              </div>

              {/* <!---Harry Portter Containet--> */}
              <div className="harry-potter-book-container">
                <did className="harry-potter-book-img-container">
                  <img
                    src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/harrypotter-img.png"
                    className="harry-potter-book-image"
                    alt="bookStoreImage"
                  />
                </did>
                <div className="harry-potter-book-details-container">
                  <h1 className="harry-potter-book-heading">Harry Potter</h1>
                  <p className="">and the Sorcerer's Stone</p>
                  <p className="harry-potter-book-author">by J.K.Rowlingt</p>
                  <div className="harry-potter-book-read-now-button-container">
                    <button
                      className="harry-potter-book-read-now-button"
                      onClick={() => setActiveBookPage(activePage.HarryPorter)}
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back-navigate-button-container">
            <BackButton />
          </div>
        </div>
      )}

      {bookStoreActivePage === activePage.AbdulKalam && (
        <div id="sectionWingsOfFireBook">
          <div className="wings-of-fire-book-detailed-page-container">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-apj-img.png"
              className="wings-of-fire-book-detailed-page-image"
              alt="bookStoreImage"
            />
            <h1 className="wings-of-fire-book-detailed-page-heading">
              Wings of Fire
            </h1>
            <p className="wings-of-fire-book-author">by Arun Tiwari</p>
            <p className="wings-of-fire-book-detailed-page-para">
              Every common man who by his sheer grit and hard work achleves
              success should his story with thw rest for they may find
              inspiration and strength to go on,in his story the wings of
              fire'is one such autobiography by visionary scientist dr.APJ abdul
              kalam,who from very humble beginning rose to be the president of
              india.the book is full of insights,personal moments and life
              expeiences of Dr.kalam,it gives us an understading on his journey
              of success.
            </p>
            <div className="wings-of-fire-book-detailed-page-buttons-container">
              <button
                className="back-button"
                onClick={() => setActiveBookPage(activePage.Home)}
              >
                Back
              </button>
              <button className="Buy-Now-button">Buy Now</button>
            </div>
          </div>
        </div>
      )}
      {/*   <!--The 3 mistakes of my life book detailed Page--> */}
      {bookStoreActivePage === activePage.TheMistakes && (
        <div className="the-3-mistakes-of-my-life-book-detailed-container">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
            className="the-3-mistakes-of-my-life-book-detailed-page-image"
            alt="bookStoreImage"
          />
          <h1 className="the-3-mistakes-of-my-life-book-detailed-page-heading">
            The 3 mistakes of my life
          </h1>
          <p className="the-3-mistakes-of-my-life-book-author">
            by Chetan Bhagat
          </p>
          <p className="the-3-mistakes-of-my-life-book-detailed-page-para">
            The 3 mistakes of my life is the third novel written by eminent
            indian author chetan bhagat,based on cricket, business and
            religion,the novel is set against thebackdrop of beautiful city
            ahmedabad.revolving around three young indian boys omi,ishan and
            govind,the book goes on to narrate howthe three are trying their
            best to make ends meet in the city.based on real events, the book
            starts with a book adramatic twist,where bhagat is reading an e-mail
            sent by some young person govind.
          </p>
          <div className="the-3-mistakes-of-my-life-book-detailed-page-buttons-container">
            <button
              className="back-button"
              onClick={() => setActiveBookPage(activePage.Home)}
            >
              Back
            </button>
            <button className="Buy-Now-button">Buy Now</button>
          </div>
        </div>
      )}

      {/* <!--Harry Potter book detailed Page Container--> */}
      {bookStoreActivePage === activePage.HarryPorter && (
        <div className="harry-potter-book-detailed-page-container">
          <img
            src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/harrypotter-img.png"
            className="harry-potter-book-detailed-page-image"
            alt="bookStoreImage"
          />
          <h1 className="harry-potter-book-detailed-page-heading">
            Harry Porter
          </h1>
          <p className="harry-potter-book-author">by j.k.rowling</p>
          <p className="harry-potter-book-detailed-page-para">
            harry potter's life is miserable.his parents are dead and he's stuck
            with his heartless relatives,who force him tolive in tiny closet
            under the start,but his fortune changes when he receives a letter
            that tells him the truth about himself;he's awizard, amysterious
            visitor rescuse him from his relative and takes him to his new home,
            hogwarts school of witchraft and wizardry.after a lifetime of
            bottling up his magical powers,harry finally fells like a normal
            kid.
          </p>
          <div className="harry-potter-book-detailed-page-buttons-container">
            <button
              className="back-button"
              onClick={() => setActiveBookPage(activePage.Home)}
            >
              Back
            </button>
            <button className="Buy-Now-button">Buy Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookStorePage;

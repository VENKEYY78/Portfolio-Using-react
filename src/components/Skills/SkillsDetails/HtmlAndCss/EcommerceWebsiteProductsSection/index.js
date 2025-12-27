import "./index.css";

const EcommerceWebsiteProductsSection = () => (
  <div class="products-card-container pt-5 pb-5 shadow">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="heading-01">Our Products</h1>
        </div>
        <div class="col-12 col-md-6">
          <div class="smart-headphones-card d-flex flex-column justify-content-end">
            <div class="smart-headphones-card-02">
              <h1 class="heading-02">Smart Headphones</h1>
              <p class="paragraph-01">
                Headphones with Deep Bass,sound,touch...
              </p>

              <button
                type="button"
                class="button-01"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Details
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Sony Wh-1000XM4 Noise Cancelling Headphones
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p class="paragraph-02">
                        Get Best Smart Headphones Prices Online in india. Select
                        from the best range of Headphones from most popular
                        brands...
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Voice assistant:</span> Alexa,gopgle
                        Assistant & Siri
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Smart Listening:</span> Ambient sound
                        with the best noise cancellation
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Long battery life:</span> A single
                        charge provides 30 hours of playtime
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Quick charging:</span> Charge for 10
                        min for 5 hours play back
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Touch controls:</span> Change the
                        track with your fingertip
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="button-03">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="smart-headphones-card d-flex flex-column justify-content-end">
            <div class="smart-headphones-card-02">
              <h1 class="heading-02">Smart Headphones</h1>
              <p class="paragraph-01">
                Headphones with Deep Bass,sound,touch...
              </p>

              <button
                type="button"
                class="button-01"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Details
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Sony Wh-1000XM4 Noise Cancelling Headphones
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p class="paragraph-02">
                        Get Best Smart Headphones Prices Online in india. Select
                        from the best range of Headphones from most popular
                        brands...
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Voice assistant:</span> Alexa,gopgle
                        Assistant & Siri
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Smart Listening:</span> Ambient sound
                        with the best noise cancellation
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Long battery life:</span> A single
                        charge provides 30 hours of playtime
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Quick charging:</span> Charge for 10
                        min for 5 hours play back
                      </p>
                      <p class="paragraph-02">
                        <span class="span">Touch controls:</span> Change the
                        track with your fingertip
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="button-03">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" col-12  d-flex flex-row justify-content-end">
          <p class="paragraph-03">
            See All Offers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default EcommerceWebsiteProductsSection;

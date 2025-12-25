import './index.css'

const FlatsPage = () => (

    <div id="sectionHome">
        <div class="flats-bg-img-card d-flex flex-column justify-content-end">
            <div class="sunrise-card-section">
                <h1 class="Sunrise-main-heading">Sunrise Avenue</h1>
                <p class="sunrise-main-paragraph pb-4">move to what moves you.</p>
                <button class="button btn btn-primary" onclick="display('section1')">Book Flat</button>
            </div>
        </div>
    </div>

    <div id="section1">
        <div class="sunrise-botttom-bg-section">
            <h1 class="Sunrise-main-heading2 pl-2">Sunrise Avenue</h1>
            <div class="flats-list-bg-card d-flex flex-row" onclick="display('section2')">
                <div>
                    <img src="https://assets.ccbp.in/frontend/static-website/flats-list-card1-img.png" class="flats-list-card1-img" />
                </div>
                <div class="flat-main-bg-card-section">
                    <h1 class="bhk-flat-heading">3BHK Flat</h1>
                    <p class="bhk-flat-paragraph">This is a flully furnished house with handmae furniture including
                        aluxry en-suite facilites pack.its built-up area is about 1600sq.
                        A spaious home for you to live in</p>
                </div>
            </div>

            <div class="flats-list-bg-card d-flex flex-row" onclick="display('section3')">
                <div>
                    <img src="https://assets.ccbp.in/frontend/static-website/flats-list-card2-img.png" class="flats-list-card1-img" />
                </div>
                <div class="flat-main-bg-card-section">
                    <h1 class="bhk-flat-heading">2BHK Flat</h1>
                    <p class="bhk-flat-paragraph">This is a flully furnished house with handmae furniture including
                        aluxry en-suite facilites pack.its built-up area is about 1600sq.
                        A spaious home for you to live in</p>
                </div>
            </div>

            <div class="flats-list-bg-card d-flex flex-row" onclick="display('section4')">
                <div>
                    <img src="https://assets.ccbp.in/frontend/static-website/flats-list-card3-img.png" class="flats-list-card1-img" />
                </div>
                <div class="flat-main-bg-card-section">
                    <h1 class="bhk-flat-heading">4BHK Flat</h1>
                    <p class="bhk-flat-paragraph">This is a flully furnished house with handmae furniture including
                        aluxry en-suite facilites pack.its built-up area is about 1600sq.
                        A spaious home for you to live in</p>
                </div>
            </div>
            <div>
                <button class="button2 m-4" onclick="display('sectionHome')">Back</button>
            </div>
        </div>
    </div>

    <div id="section2">
        <div class="bhk-bg-containe">
            <div class="img-container">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-d1-img.png" class="image-01" />
            </div>
            <h1 class="price-heading">Rs 3000/-</h1>
            <div class="d-flex flex-row p-4">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png" class="flats-list-location-icon-img" />
                <p class="food-location-paragraph pb-3">D/N S-2,Food Street,Indore</p>
            </div>
            <hr class="hr-line" />
            <div class="p-4">
                <h1 class="description-heading"> Description</h1>
                <p class="description-paragraph">This is a fully furnished house with handmade furniture including a luxury en-suite facilities pack.it's built-up area is about 1600sq,ft,A spacious home for you to live in.</p>
            </div>
            <div class="text-center p-3">
                <button class="button2 pl-2">Confirm</button>
                <button class="button2" onclick="display('section1')">Back</button>
            </div>
        </div>
    </div>
    <div id="section3">
        <div class="bhk-bg-containe">
            <div class="img-container">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-d2-img.png" class="image-01" />
            </div>
            <h1 class="price-heading">Rs 4000/-</h1>
            <div class="d-flex flex-row p-4">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png" class="flats-list-location-icon-img" />
                <p class="food-location-paragraph pb-3">D/N S-2,Food Street,Indore</p>
            </div>
            <hr class="hr-line" />

            <div class="p-4">
                <h1 class="description-heading"> Description</h1>
                <p class="description-paragraph">This is a fully furnished house with handmade furniture including a luxury en-suite facilities pack.it's built-up area is about 1600sq,ft,A spacious home for you to live in.</p>
            </div>
            <div class="text-center p-3">
                <button class="button2 pl-2">Confirm</button>
                <button class="button2" onclick="display('section1')">Back</button>
            </div>
        </div>
    </div>
    <div id="section4">
        <div class="bhk-bg-containe">
            <div class="img-container">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-d3-img.png" class="image-01" />
            </div>
            <h1 class="price-heading">Rs 2000/-</h1>
            <div class="d-flex flex-row p-4">
                <img src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png" class="flats-list-location-icon-img" />
                <p class="food-location-paragraph pb-3">D/N S-2,Food Street,Indore</p>
            </div>
            <hr class="hr-line" />

            <div class="p-4">
                <h1 class="description-heading"> Description</h1>
                <p class="description-paragraph">This is a fully furnished house with handmade furniture including a luxury en-suite facilities pack.it's built-up area is about 1600sq,ft,A spacious home for you to live in.</p>
            </div>
            <div class="text-center p-3">
                <button class="button2 pl-2">Confirm</button>
                <button class="button2" onclick="display('section1')">Back</button>

            </div>
        </div>
    </div>
    
)

export default FlatsPage
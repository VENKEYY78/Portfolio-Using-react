import './index.css'


const YogaPage = () => (

    <div id="sectionHome">
        <div class="yoga-bg-img-card pt-3">
            <div>
                <h1 class="yoga-heading-card">Discover the yogl life on the yoga Experience Platform</h1>
            </div>
            <div class="d-flex flex-row justify-content-center pt-5">
                <img src="https://assets.ccbp.in/frontend/static-website/yoga-girl-without-headphones-img.png" class="yoga-girl-without-headphones-img" />
            </div>
            <div class="yoga-bottom-section pt-5">
                <p class="yoga-paragraoh-card">Yoga poses strengthen and open tight areas of the body.</p>
                <button class="button btn btn-primary" onclick="display('sectiontypesofyoga')">Get Startead</button>
            </div>
        </div>
    </div>

    <div id="sectiontypesofyoga">
        <div class="yoga-next-page-section">
            <div class="d-flex flex-row justify-content-center pt-5">
                <img src="https://assets.ccbp.in/frontend/static-website/yoga-girl-without-headphones-img.png" class="yoga-girl-without-headphones-img" />
            </div>

            <div>
                <h1 class="types-of-yoga-heading pt-3">
                    Types of Yoga
                </h1>
            </div>

            <div class="types-bottom-section">
                <div class="d-flex flex-row pt-5">
                    <img src="https://assets.ccbp.in/frontend/static-website/yoga-card1-img.png" class="yoga-logo-img" />
                    <div class="yoga">
                        <h1 class="yoga-heading-card2">Acro yoga</h1>
                        <p class="yoga-paragraph-card2"> it stretces and relaxes your body,improves stamina ana memory.</p>
                    </div>
                </div>
            </div>

            <div class="types-bottom-section">
                <div class="d-flex flex-row pt-5">
                    <img src="https://assets.ccbp.in/frontend/static-website/yoga-card2-img.png" class="yoga-logo-img" />
                    <div class="yoga">
                        <h1 class="yoga-heading-card2">Vinyasa yoga</h1>
                        <p class="yoga-paragraph-card2"> it stretces and relaxes your body,improves stamina ana memory.</p>
                    </div>
                </div>
            </div>

            <div class="types-bottom-section">
                <div class="d-flex flex-row pt-5">
                    <img src="https://assets.ccbp.in/frontend/static-website/yoga-card3-img.png" class="yoga-logo-img" />
                    <div class="yoga">
                        <h1 class="yoga-heading-card2">Hatha yoga</h1>
                        <p class="yoga-paragraph-card2"> it stretces and relaxes your body,improves stamina ana memory.</p>
                    </div>
                </div>
            </div>

            <div class="types-bottom-section">
                <div class="d-flex flex-row pt-5">
                    <img src="https://assets.ccbp.in/frontend/static-website/yoga-card4-img.png" class="yoga-logo-img" />
                    <div class="yoga">
                        <h1 class="yoga-heading-card2">Kundalini yoga</h1>
                        <p class="yoga-paragraph-card2"> it stretces and relaxes your body,improves stamina ana memory.</p>
                    </div>
                </div>
            </div>
            <div class="back-button">
                <button class="button3" onclick="display('sectionHome')">Back</button>
            </div>
        </div>
    </div>

)

export default YogaPage
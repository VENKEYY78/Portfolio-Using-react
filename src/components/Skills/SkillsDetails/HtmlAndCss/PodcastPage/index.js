import BackButton from '../../backButton.'

import './index.css'


const PodcastPage = () => (

    <div class="podcast-home-page-main-bg-container" id="sectionHomePage">
        <div class="podcast-top-image-section">
            <h1 class="podcast-top-image-heading">Podcasts</h1>
        </div>
        <div class="podcast-bottom-section-container">
            <div class="podcast-person-container d-flex flex-row">
                <div class="podcast-01" onclick="display('sectionPuriPage')">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                        class="podcast-image" />
                    <h1 class="person-name">Puri jagannadh</h1>
                    <p class="no-of-episodes">24 Episodes</p>
                </div>
                <div class="podcast-01" onclick="display('sectionTedxPage')">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                        class="podcast-image" />
                    <h1 class="person-name">Tedx talks</h1>
                    <p class="no-of-episodes">12 Episodes</p>
                </div>
            </div>
            <div class="podcast-person-container d-flex flex-row">
                <div class="podcast-01" onclick="display('sectionSadhguruPage')">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="podcast-image" />
                    <h1 class="person-name">Sadhguru</h1>
                    <p class="no-of-episodes">49 Episodes</p>
                </div>
                <div class="podcast-01" onclick="display('sectionOnpurposePage')">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/on-purpose-img.png"
                        class="podcast-image" />
                    <h1 class="person-name">On purpose</h1>
                    <p class="no-of-episodes">49 Episodes</p>
                </div>
            </div>
        </div>
    </div>




    <!--PURI Jagannadh page -->
    <div class="podcast-person-main-bg-container" id="sectionPuriPage">
        <!--PODCAST PERSON TOP CONTAINER-->
        <div class="podcast-person-top-container d-flex flex-row">
            <div>
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                    class="person-image" />
            </div>
            <div class="d-flex flex-column">
                <p class="podcast">Podcast</p>
                <h1 class="name-heading">Puri Jagannadh Podcast</h1>
                <p class="para">The Puri Jagannadh Podcast</p>
            </div>
        </div>
        <!--PODCAST PERSON BOTTOM CONTAINER-->
        <div class="podcast-person-bottom-container">
            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Molecular Gastronomy</h1>
                    <p class="para text bottom-para">Anything happens there it will not cook...</p>
                    <p class="para bottom-para">15 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Mysterious book</h1>
                    <p class="para text bottom-para">The Voynich manuscript is the 15th century book....</p>
                    <p class="para bottom-para">12 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">paella</h1>
                    <p class="para text bottom-para">The national dish of spain. it was first star.....</p>
                    <p class="para bottom-para">6 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Predator Drone</h1>
                    <p class="para text bottom-para">The most power full drone it is 10 feet height....</p>
                    <p class="para bottom-para">10 min</p>
                </div>
            </div>
        </div>

        <div class="button-container d-flex flex-row justify-content-end">
            <button class="button" onclick="display('sectionHomePage')"><--- back</button>
        </div>
    </div>


    <!--TEDx podcast page-->
    <div class="podcast-person-main-bg-container" id="sectionTedxPage">
        <!---PODCAST PERSON TOP CONTAINER-->
        <div class="podcast-person-top-container d-flex flex-row">
            <div>
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                    class="person-image" />
            </div>
            <div class="d-flex flex-column">
                <p class="podcast">Podcast</p>
                <h1 class="name-heading">The Tedx Podcast</h1>
                <p class="para">The Tedx Podcast</p>
            </div>
        </div>
        <!---PODCAST PERSON BOTTOM CONTAINER-->
        <div class="podcast-person-bottom-container">
            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">The science of friction</h1>
                    <p class="para text bottom-para">Tribology. it's a funny sounding word you might...</p>
                    <p class="para bottom-para">12 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Unleash you</h1>
                    <p class="para text bottom-para">What can we learn from the world's most enduringly...</p>
                    <p class="para bottom-para">8 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">3 psychological tricks</h1>
                    <p class="para text bottom-para">We all want to save more money - but overall..</p>
                    <p class="para bottom-para">10 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/tedx-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">The case for stubborn</h1>
                    <p class="para text bottom-para">this decade is a moment of choice unlike any we....</p>
                    <p class="para bottom-para">12 min</p>
                </div>
            </div>
        </div>

        <div class="button-container d-flex flex-row justify-content-end">
            <button class="button" onclick="display('sectionHomePage')"><--- back</button>
        </div>
    </div>


    <!--Sadhguru podcast page-->
    <div class="podcast-person-main-bg-container" id="sectionSadhguruPage">
        <!---PODCAST PERSON TOP CONTAINER-->
        <div class="podcast-person-top-container d-flex flex-row">
            <div>
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    class="person-image" />
            </div>
            <div class="d-flex flex-column">
                <p class="podcast">Podcast</p>
                <h1 class="name-heading">The Sadhguru Podcast</h1>
                <p class="para">The Sadhguru Podcast</p>
            </div>
        </div>
        <!---PODCAST PERSON BOTTOM CONTAINER-->
        <div class="podcast-person-bottom-container">
            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Heat or heart</h1>
                    <p class="para text bottom-para">Sadhguru share his wisdom on how to make...</p>
                    <p class="para bottom-para">16 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">How to equip yourself</h1>
                    <p class="para text bottom-para">Society and human interactions are going....</p>
                    <p class="para bottom-para">13 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">How not to get irritated</h1>
                    <p class="para text bottom-para">How do you see an unplesant spouse the....</p>
                    <p class="para bottom-para">15 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Isha Kriya</h1>
                    <p class="para text bottom-para">Rooted in the timeless wisdom if the yogic....</p>
                    <p class="para bottom-para">16 min</p>
                </div>
            </div>
        </div>

        <div class="button-container d-flex flex-row justify-content-end">
            <button class="button" onclick="display('sectionHomePage')"><--- back</button>
        </div>
    </div>


    <!--On Purpose Page-->
    <div class="podcast-person-main-bg-container" id="sectionOnpurposePage">
        <!---PODCAST PERSON TOP CONTAINER-->
        <div class="podcast-person-top-container d-flex flex-row">
            <div>
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                    class="person-image" />
            </div>
            <div class="d-flex flex-column">
                <p class="podcast">Podcast</p>
                <h1 class="name-heading">On Purpose with Jay</h1>
                <p class="para">The Jay Shetty podcast</p>
            </div>
        </div>
        <!---PODCAST PERSON BOTTOM CONTAINER-->
        <div class="podcast-person-bottom-container">
            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Patrick Bet David</h1>
                    <p class="para text bottom-para">Are you an entrepreneur or have dreams of mental....</p>
                    <p class="para bottom-para">10 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">5 Technicques to cope</h1>
                    <p class="para text bottom-para">Does anxiety looms around every corner of your..</p>
                    <p class="para bottom-para">4 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">Radhanath Swami ON</h1>
                    <p class="para text bottom-para">World renowned spritual leader and philanthropist....</p>
                    <p class="para bottom-para">12 min</p>
                </div>
            </div>

            <div class="d-flex flex-row details-card">
                <div>
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sadhguru-img.png"
                        class="person-image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h1 class="name-heading bottom-heading">3 Ways to let go</h1>
                    <p class="para text bottom-para">Do the opinions of others veer you from the core....</p>
                    <p class="para bottom-para">13 min</p>
                </div>
            </div>
        </div>
         <div class="button-container d-flex flex-row justify-content-end">
            <button class="button" onclick="display('sectionHomePage')"><--- back</button>
        </div>
    </div>

)

export default PodcastPage
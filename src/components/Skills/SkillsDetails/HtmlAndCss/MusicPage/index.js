import BackButton from '../../backButton.'

import './index.css'


const MusicPage = () => (

     <div id="sectionHomePage">
        <div class="music-page-main-bg-container d-flex flex-column justify-content-between">
            <div class="home-page-text-container">
                <h1 class="home-page-heading">Sleep Music</h1>
                <p class="home-page-para-content">soothing bedtime music to help you fall into a deep and natural sleep
                </p>
            </div>

            <div class="cerd text-center">
                <div class="night-island-container">
                    <h1>Night Island</h1>
                </div>

                <div class="get-start-container">
                    <p class="para">Non-stop 8-hour mixes of our most popular sleep audio</p>
                    <button class="button" onclick="display('sectionMusic')">Get Started</button>
                </div>
            </div>
        </div>
    </div>



    <div id="sectionMusic">
        <div class="music-details-page-container">
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/clouds-img.png"
                class="music-detail-page-image" />
            <div class="text-container">
                <h1 class="heading-01">Night Island</h1>
                <p class="para-01">Ease the mind into a restful night's sleep with these deep, amblent tones.</p>
                <p class="para-02">45 MIN SLEEP MUSIC</p>
                <h1 class="heading-02">Related</h1>
                <div class="sleep-music-container d-flex">
                    <div class="Moon-Clouds">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/moon-clouds-img.png"
                            class="moon-clouds-image" />
                        <h1 class="heading-02">Moom Clouds</h1>
                        <p class="para-02">55 MIN SLEEP MUSIC</p>
                    </div>

                    <div class="Moon-Clouds">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/sweet-sleep-img.png"
                            class="moon-clouds-image" />
                        <h1 class="heading-02">Sweet Sleep</h1>
                        <p class="para-02">60 MIN SLEEP MUSIC</p>
                    </div>

                </div>
                <div>
                    <button class="button" onclick="display('sectionHomePage')">Back</button>
                </div>
            </div>
        </div>
    </div>

)

export default MusicPage
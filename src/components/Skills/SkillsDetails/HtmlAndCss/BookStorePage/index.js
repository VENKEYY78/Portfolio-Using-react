import './index.css'


const BookStorePage = () => (

    <div id="sectionPopularBookStoreHomePage">
        <div class="popular-book-store-home-page-bg-container">
            <h1 class="popular-book-store-home-page-heading">Popular Book</h1>

            <!--Wings of Fire Book Container-->
            <div class="wings-of-fire-book-container">
                <div class="wings-of-fire-book-img-container">
                    <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-apj-img.png"
                        class="wings-of-fire-book-image" />
                </div>
                <div class="wings-of-fire-book-details-container">
                    <h1 class="wings-of-fire-book-heading">Wings of Fire</h1>
                    <p class="wings-of-fire-book-para">An Autobiograpy of Abdul Kalam</p>
                    <p class="wings-of-fire-book-author">by Arun Tiwari</p>
                    <div class="wings-of-fire-book-read-me-button-container">
                        <button class="read-now-button" onclick="display('sectionWingsOfFireBook')">Read Now</button>
                    </div>
                </div>
            </div>
            <h1 class="Recommended-books-container">Recommended Books</h1>

            <!--Recommended Books Main Container-->
            <div class="popular-book-store-recommended-books-container">

                <!--The 3 Mistakes of Life Book Container-->
                <div class="the-3-mistakes-of-my-life-book-container">
                    <did class="the-3-mistakes-of-my-life-book-img-container">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
                            class="the-3-mistakes-of-my-life-book-image" />
                    </did>
                    <div class="the-3-mistakes-of-my-life-book-details-container">
                        <h1 class="the-3-mistakes-of-my-life-book-heading">The 3 mistakes of my life</h1>
                        <p class="">Indian author</p>
                        <p class="the-3-mistakes-of-my-life-book-author">by Chetan Bhagat</p>
                        <div class="the-3-mistakes-of-my-life-book-read-now-button-container">
                            <button class="the-3-mistakes-of-my-life-book-read-now-button"
                                onclick="display('sectionThe3MistackesOfMyLife')">
                                Read Now
                            </button>
                        </div>
                    </div>
                </div>

                <!---Harry Portter Containet-->
                <div class="harry-potter-book-container">
                    <did class="harry-potter-book-img-container">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/harrypotter-img.png"
                            class="harry-potter-book-image" />
                    </did>
                    <div class="harry-potter-book-details-container">
                        <h1 class="harry-potter-book-heading">Harry Potter</h1>
                        <p class="">and the Sorcerer's Stone</p>
                        <p class="harry-potter-book-author">by J.K.Rowlingt</p>
                        <div class="harry-potter-book-read-now-button-container">
                            <button class="harry-potter-book-read-now-button" onclick="display('sectionHarryPotter')">
                                Read Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Wings of fire book detailed Page--> <!--  <div class="wings-of-fire-book-detailed-page-top-container"></div>-->
    <div id="sectionWingsOfFireBook">
        <div class="wings-of-fire-book-detailed-page-container">
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-apj-img.png"
                class="wings-of-fire-book-detailed-page-image" />
            <h1 class="wings-of-fire-book-detailed-page-heading">Wings of Fire</h1>
            <p class="wings-of-fire-book-author">by Arun Tiwari</p>
            <p class="wings-of-fire-book-detailed-page-para">Every common man who by his sheer grit and hard work
                achleves success should his story with thw rest for they may find inspiration and strength to go on,in
                his
                story the wings of fire'is one such autobiography by
                visionary scientist dr.APJ abdul kalam,who from very
                humble beginning rose to be the president of india.the
                book is full of insights,personal moments and life
                expeiences of Dr.kalam,it gives us an understading on
                his journey of success.</p>
            <div class="wings-of-fire-book-detailed-page-buttons-container">
                <button class="back-button" onclick="display('sectionPopularBookStoreHomePage')">Back</button>
                <button class="Buy-Now-button">Buy Now</button>
            </div>
        </div>
    </div>


    <!--The 3 mistakes of my life book detailed Page-->
    <div id="sectionThe3MistackesOfMyLife">
        <div class="the-3-mistakes-of-my-life-book-detailed-container">
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
                class="the-3-mistakes-of-my-life-book-detailed-page-image" />
            <h1 class="the-3-mistakes-of-my-life-book-detailed-page-heading">The 3 mistakes of my life</h1>
            <p class="the-3-mistakes-of-my-life-book-author">by Chetan Bhagat</p>
            <p class="the-3-mistakes-of-my-life-book-detailed-page-para">
                The 3 mistakes of my life is the third novel written by
                eminent indian author chetan bhagat,based on cricket,
                business and religion,the novel is set against thebackdrop of beautiful city ahmedabad.revolving around
                three young indian boys omi,ishan and govind,the
                book goes on to narrate howthe three are trying their
                best to make ends meet in the city.based on real events,
                the book starts with a book adramatic twist,where bhagat is
                reading an e-mail sent by some young person govind.</p>
            <div class="the-3-mistakes-of-my-life-book-detailed-page-buttons-container">
                <button class="back-button" onclick="display('sectionPopularBookStoreHomePage')">Back</button>
                <button class="Buy-Now-button">Buy Now</button>
            </div>
        </div>
    </div>


    <!--Harry Potter book detailed Page Container-->
    <div id="sectionHarryPotter">
        <div class="harry-potter-book-detailed-page-container">
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/harrypotter-img.png"
                class="harry-potter-book-detailed-page-image" />
            <h1 class="harry-potter-book-detailed-page-heading">Harry Porter</h1>
            <p class="harry-potter-book-author">by j.k.rowling</p>
            <p class="harry-potter-book-detailed-page-para">
                harry potter's life is miserable.his parents are dead and
                he's stuck with his heartless relatives,who force him tolive in tiny closet under the start,but his
                fortune
                changes when he receives a letter that tells him the truth
                about himself;he's awizard, amysterious visitor rescuse
                him from his relative and takes him to his new home,
                hogwarts school of witchraft and wizardry.after a
                lifetime of bottling up his magical powers,harry finally
                fells like a normal kid.
            </p>
            <div class="harry-potter-book-detailed-page-buttons-container">
                <button class="back-button" onclick="display('sectionPopularBookStoreHomePage')">Back</button>
                <button class="Buy-Now-button">Buy Now</button>
            </div>
        </div>
    </div>

)

export default   BookStorePage
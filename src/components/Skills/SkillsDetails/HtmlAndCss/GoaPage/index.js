// import BackButton from '../../backButton.'

import './index.css'


const GoaPage = () => (

     <div class="Goa-page-main-bg-container">
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c1-img.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c2-img.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-c3-img.png"
                            class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="bottom-section">
            <div class="about-container">
                <h1>About</h1>
                <p>Goa is known for its striking landscap,famous beahes in india ,especia;y on weekends, as it is not
                    very far from mumbai landscap
                    a large number of touritsts from over the world ,round the year.
                </p>
            </div>
            <h1>More Picture</h1>
            <div>
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more1-img.png" />
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more2-img.png" />
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/goa-more3-img.png" />
            </div>
            <h1>videos</h1>
            <div class="videos-container d-flex flex-row">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NFalCkZAClY?rel=0"
                        allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4irzfMfTmM8?rel=0"
                        allowfullscreen></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OJu0gjzsvQE?rel=0"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
);

export default GoaPage
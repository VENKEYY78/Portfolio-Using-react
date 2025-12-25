import BackButton from '../../backButton.'

import './index.css'


const MoviePage = () => (

    <div class="movie-page-main-bg-container">
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/nemo-c1-img.png"
                            class="d-block w-100" alt="a1">
                    </div>
                    <div class="carousel-item">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/nemo-c2-img.png"
                            class="d-block w-100" alt="a2">
                    </div>
                    <div class="carousel-item">
                        <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/nemo-c3-img.png"
                            class="d-block w-100" alt="a3">
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
        <div class="Finding-container d-flex justify-content-between ">
            <h1 class="heading">Finding Nemo</h1>
            <button class="button">Watch Now</button>
        </div>
        <div>
            <p class="paragragh">
                A clown fish, is overly cautious with his son,Nemo who
                has a foreshortend fim.when Nemo swims too close to the surface to prove himself,he is caught by
                adiver,and homfied marilin and complicates the encounters with sharks,jellyfish,and ahost of ocean
                dangers.
                meanwhile,nemoplots his from a dentist's fish tank.</p>
        </div>
        <h1>Similar Movies</h1>
        <div class="d-flex flex-row">
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/finding-dory-img.png"
                class="similar-images" />
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/bugslife-img.png"
                class="similar-images" />
            <img src="https://d2clawv67efefq.cloudfront.net/ccbp-static-website/ratatouille-movie-img.png"
                class="similar-images" />
        </div>
    </div>
)

export default MoviePage
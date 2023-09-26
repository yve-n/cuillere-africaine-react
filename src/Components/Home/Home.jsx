import React from 'react'
import './carousel.css'

export default function Home() {
    return (
        <div id="myCarousel" className="carousel slide mb-6 custom-carousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${process.env.PUBLIC_URL}/images/cuillere_afr_accueil.jpg`} className="bd-placeholder-img" alt="vue avant du restaurant" loading="lazy" width="100%" height="100%" />
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Bienvenue à Cuillère Africaine, votre escapade gastronomique africaine à Paris.</h1>
                            <p className="opacity-75">Découvrez une cuisine authentique, riche en saveurs et en couleurs.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/images/cuillere_afr_accueil.jpg`} className="bd-placeholder-img" alt="vue avant du restaurant" loading="lazy" width="100%" height="100%" />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Bienvenue à Cuillère Africaine, votre escapade gastronomique africaine à Paris.</h1>
                            <p>Découvrez une cuisine authentique, riche en saveurs et en couleurs.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/images/cuillere_afr_accueil.jpg`} className="bd-placeholder-img" alt="vue avant du restaurant" loading="lazy" width="100%" height="100%" />
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Bienvenue à Cuillère Africaine, votre escapade gastronomique africaine à Paris.</h1>
                            <p>Découvrez une cuisine authentique, riche en saveurs et en couleurs.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

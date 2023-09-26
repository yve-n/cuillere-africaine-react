import React from 'react'
import '../Home/carousel.css'

export default function About() {
    return (
        <>
            <div class="container marketing">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Qui sommes-nous ?</h2>
                        <p class="lead">Cuillère Africaine est née de la passion pour la cuisine africaine authentique. 
                        Notre mission est de vous faire découvrir la richesse et la diversité des saveurs africaines dans un cadre chaleureux et accueillant.
                        Situé au cœur de Paris, Cuillère Africaine vous offre une expérience culinaire unique. 
                        De l'Abolo à la Choucouya, notre menu varié saura satisfaire tous les goûts. 
                        Rejoignez-nous pour un voyage gastronomique inoubliable.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img src={`${process.env.PUBLIC_URL}/images/image_avant.jpg`}
                            alt="vue avant du restaurant" loading="lazy" width="100%" height="100%"
                        />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Notre Histoire </h2>
                        <p class="lead">
                        Fondée par des passionnés de la gastronomie africaine, Cuillère Africaine est plus qu'un simple restaurant :
                        c'est une célébration de la culture et de la tradition africaine. 
                        Nous nous engageons à offrir une expérience authentique, du choix des ingrédients à la préparation des plats, tout est pensé pour vous faire voyager à travers les saveurs de l'Afrique. 
                        Venez découvrir ce qui fait de Cuillère Africaine un lieu unique au cœur de Paris.
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={`${process.env.PUBLIC_URL}/images/image_avant.jpg`}
                            alt="vue avant du restaurant" loading="lazy" width="100%" height="100%"
                        />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">L'Essence de Cuillère Africaine.</h2>
                        <p class="lead">
                            Cuillère Africaine est plus qu'un restaurant, c'est une invitation à un voyage sensoriel à travers l'Afrique. Chaque plat, chaque ingrédient, chaque épice est soigneusement sélectionné pour vous offrir une expérience gastronomique authentique.
                            Notre équipe dévouée et notre cheffe talentueuse travaillent ensemble pour capturer l'essence de la cuisine africaine, en la rendant accessible et appréciable pour tous.
                            Venez partager cette passion avec nous et découvrez pourquoi Cuillère Africaine est une véritable institution à Paris.
                        </p>
                    </div>

                    <div class="col-md-5 order-md-1">
                        <img src={`${process.env.PUBLIC_URL}/images/image_avant.jpg`}
                            alt="vue avant du restaurant" loading="lazy" width="100%" height="100%"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

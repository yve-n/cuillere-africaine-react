import React from 'react'

export default function Contact() {
    const api_key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

    return (
        <>
            <section className="py-3 text-center container">
                <div className="row py-lg-3">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Contactez-nous</h1>
                        <p className="lead text-body-secondary">
                            Pour toute question ou réservation, n'hésitez pas à nous contacter.
                            Nous sommes situés au cœur de Paris et sommes toujours heureux de vous accueillir.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container marketing">
                <div className="row featurette d-sm-flex justify-content-sm-center">
                    <div className="col-lg-6 col-md-6 col-sm-auto pb-sm-2">
                        <div className="card shadow-sm card-n">
                            <h5 className="card-title"><i className="bi bi-shop"></i> Cuillère Africaine</h5>
                            <p className="card-text"><i className="bi bi-geo-alt-fill"></i> 36 Rue Mathis 75019 Paris</p>
                            <p className="card-text"><i className="bi bi-telephone-fill"></i> 06.60.26.60.34</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-auto">
                        <iframe
                            title="la Carte Google Maps du restaurant"
                            width="100%"
                            height="100%"
                            frameborder="0" style={{ border: 0 }}
                            referrerpolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${api_key}&q=Cuillère+Africaine,Paris+France&center=48.891386426126225,2.373363262240684&zoom=18&maptype=satellite`}
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

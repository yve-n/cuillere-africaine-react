import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (

        <>
            <footer>
                <div className="bg-dark text-secondary px-3 py-4 text-center">
                    <div className="py-4">
                        <h1 className="display-4 fw-bold text-white">
                            Suivez-nous sur les réseaux sociaux pour les dernières nouvelles et offres spéciales.
                        </h1>
                        <div className="col-lg-6 mx-auto">
                            <div className="social-icons">
                                <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fa fa-facebook-square fa-2x text-primary"></i>
                                </Link>
                                <Link to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fa fa-twitter-square fa-2x text-info"></i>
                                </Link>
                                <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fa fa-instagram fa-2x text-danger"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                                    <i className="fa fa-linkedin-square fa-2x text-secondary"></i>
                                </Link>
                            </div>

                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                                    <Link className="nav-link active onglet" to="/" aria-current="page" aria-label="Accueil">ACCUEIL</Link>
                                </button>
                                <button type="button" className="btn btn-outline-primary btn-lg px-4">
                                    <Link className="nav-link onglet" to="/about-us" aria-label="A propos">À PROPOS</Link>
                                </button>
                                <button type="button" className="btn btn-outline-success btn-lg px-4">
                                    <Link className="nav-link onglet" to="/menu" aria-label="Menu">MENU</Link>
                                </button>
                                <button type="button" className="btn btn-outline-light btn-lg px-4">
                                    <Link className="nav-link onglet" to="/contact" aria-label="Contact">CONTACT</Link>
                                </button>
                            </div>
                            <div className='copyright'>&copy;2023 Cuillère Africaine. Tous droits réservés.</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

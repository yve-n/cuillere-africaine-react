import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (<>
            <header className="d-flex flex-wrap justify-content-center fixed-top bg-dark">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={`${process.env.PUBLIC_URL}/images/logo_africaine.png`} alt="logo" className="bd-placeholder-img card-img-top" width="60%" height="60" aria-label="Placeholder: Thumbnail" />
                </Link>

                <ul className="navbar nav">
                    <li className="nav-item ">
                        <Link className="nav-link active onglet" to="/" aria-current="page">ACCUEIL</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/about-us">À PROPOS</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/menu">MENU</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </header>
    </>
    )
}

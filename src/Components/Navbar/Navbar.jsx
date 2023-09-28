import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (<>
            <header className="d-flex flex-wrap justify-content-center fixed-top bg-dark">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="logo" >
                    <img src={`${process.env.PUBLIC_URL}/logo_ca_192.png`} alt="logo" className="card-img-top" width="60%" height="60" />
                </Link>

                <ul className="navbar nav">
                    <li className="nav-item ">
                        <Link className="nav-link active onglet" to="/" aria-current="page" aria-label="Accueil">ACCUEIL</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/about-us" aria-label="A propos">À PROPOS</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/menu" aria-label="Menu">MENU</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link onglet" to="/contact" aria-label="Contact">CONTACT</Link>
                    </li>
                </ul>
            </header>
    </>
    )
}

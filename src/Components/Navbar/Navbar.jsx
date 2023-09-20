import React from 'react'

export default function Navbar() {
    return (<>
            <header className="d-flex flex-wrap justify-content-center fixed-top">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4 text-black logo">CUILLÈRE AFRICAINE</span>
                    {/* <img src={`${process.env.PUBLIC_URL}/images/logo_africaine.png`} alt="logo" className="bd-placeholder-img card-img-top" width="50%" height="50" aria-label="Placeholder: Thumbnail" /> */}
                </a>

                <ul className="navbar nav">
                    <li className="nav-item ">
                        <a className="nav-link active onglet" href="#home" aria-current="page">ACCUEIL</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link onglet" href="#about-us">À PROPOS</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link onglet" href="#menu">MENU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link onglet" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </header>
    </>
    )
}

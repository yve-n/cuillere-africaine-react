import React from 'react'
import Product from '../../data.json'

export default function Menu() {
    return (
        <>
            <section className="py-3 text-center container">
                <div className="row py-lg-3">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Notre Menu</h1>
                        <p className="lead text-body-secondary">
                        Explorez notre menu varié, conçu pour ravir tous les palais. De l'incontournable Abolo au délicieux Choucouya, 
                        chaque plat est préparé avec des ingrédients de qualité et une touche de tradition africaine.
                        </p>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {Product.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card shadow-sm">
                                    <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} className="bd-placeholder-img card-img-top" width="100%" height="250" aria-label="Placeholder: Thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <div className="d-flex justify-content-end">
                                            <small className="text-body-secondary">{item.price} €</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

import React from 'react'
import Product from '../../data.json'

export default function Menu() {
    return (
        <>
            <hr className="featurette-divider"></hr>
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
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
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

import React from 'react'
import '../Home/carousel.css'

export default function About() {
    return (
        <>
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img src={`${process.env.PUBLIC_URL}/images/image_avant.jpg`} alt="vue avant du restaurant" loading="lazy" width="100%" height="100%" />
            </div>
        </>
    )
}

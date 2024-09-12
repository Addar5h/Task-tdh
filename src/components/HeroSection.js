import React from 'react'

const HeroSection = () => {
  return (
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
        />
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
        />
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
        />
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="Flood-Donation.jpg" className="d-block w-100" alt="Flood_Donation_Picture" />
        </div>
        <div className="carousel-item">
            <img src="Bigboss__Website.png" className="d-block w-100" alt="Bigboss_website_picture" />
        </div>
        <div className="carousel-item">
            <img src="1.png" className="d-block w-100" alt="Products_picture" />
        </div>
        </div>
        <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
        </button>
        <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default HeroSection

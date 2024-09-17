import React from 'react'
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

const JourneyCarousel = () => {
    const products = [
      {
        img: "PremiumUradGota1kg-TenaliDoubleHorseFoodsPrivateLimited1.png", 
        title: "Premium Urad Gota 1kg",
        description:
          "Urad Gota is used for preparing idly, dosa, vada, and other Indian recipes. It is a protein-rich food, and its quality is determined by the softness of the batter and the taste of the recipe.",
        status: "Sold out",
      },
      {
        img: "PremiumToorDall1kg-TenaliDoubleHorseFoodsPrivateLimited1.png",
        title: "Premium Toor Dall 1kg",
        description:
          "Indulge in the rich and authentic taste of Tenali Double Horse Toor Dall, a culinary gem that's cherished for its quality and flavor.",
        status: "Sold out",
      },
      {
        img: "PremiumUradDall500g-TenaliDoubleHorseFoodsPrivateLimited1.png",
        title: "Premium Urad Dall 500g",
        description:
          "Urad Dall is the choicest by procuring from the best farms & fields in the country, is packed under hygienic conditions.",
        status: "Sold out",
      },
      {
        img: "PremiumMoongDall500g-TenaliDoubleHorseFoodsPrivateLimited1.png",
        title: "Premium Moong Dall 500g",
        description:
          "Moong Dall is the choicest by procuring from the best farms & fields in the country, is packed under hygienic conditions.",
        status: "Sold out",
      },
    ];
  
    return (
      <div className="carousel-container">
        <div
          id="customCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="card-container">
                  <div className="card text-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="card-img-top product-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <span className="badge bg-dark sold-out">{product.status}</span>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-danger w-100">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-control">
          <button
            className="carousel-control-prev custom-control"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="prev"
          >
            <span className="custom-prev-icon"><GrCaretPrevious size={30} /></span>
          </button>
          <button
            className="carousel-control-next custom-control"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="next"
          >
            <span className="custom-next-icon"><GrCaretNext size={30} /></span>
          </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default JourneyCarousel;
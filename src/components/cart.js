import React from 'react'

export default function Card() {
    const products = [
        {
          name: 'DALLS',
          img: 'Urad-Dall.png',
        },
        {
          name: 'INSTANT BREAKFAST MIX',
          img: 'Instant-Vada-Mix.png',
        },
        {
          name: 'SUNNUNDALU',
          img: 'Sunnundalu.png',
        },
        {
          name: 'PICKLES',
          img: 'Mango-Pickle.png',
        },
        {
          name: 'CHUTNEY POWDER',
          img: 'Karvepaku.png',
        },
        {
          name: 'SPICE POWDERS',
          img: 'Turmeric-Powder.png',
        },
        {
          name: 'MILLET MEAL',
          img: 'Barnyard-Millet.png',
        },
        {
          name: 'NOODLES',
          img: 'Foxtail-Millet.png',
        },
      ];
  return (
    <>
    <div className="category-header">
      <h2 className="category-title">SHOP PRODUCTS BY CATEGORIES</h2>
      <button className="shop-all-btn ">SHOP ALL</button>
    </div>
    <div className="container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.img} alt={product.name} />
          <button className="product-name">{product.name}</button>
        </div>
      ))}
    </div>
    </>
    
  );

}

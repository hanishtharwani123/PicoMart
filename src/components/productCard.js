import React from "react";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((curElement) => (
        <>
          <div className="products" key={curElement.id}>
            <img
              src={curElement.image}
              alt="earpodes"
              className="product_img"
              data-aos="fade-up"
              loading="lazy"
            />
            <div className="info" data-aos="fade-up">
              <h1 className="title" data-aos="fade-up">
                {curElement.name}
              </h1>
              <p className="description" data-aos="fade-up">
                {curElement.description}
              </p>
              <div className="star" data-aos="fade-up">
                {curElement.rating}
              </div>
              <div className="price" data-aos="fade-up">
                {curElement.price}
              </div>
              <button className="add-to-cart" data-aos="fade-up">
                Add to cart
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProductCard;

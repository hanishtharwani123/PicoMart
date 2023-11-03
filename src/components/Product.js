import React, { useState, useEffect } from "react";
import product from "./productApi";
import ProductCard from "./productCard"; // Assuming the filename is "ProductCard.js"
import "aos/dist/aos.css";
import "../styles/product.css";

const Product = () => {
  const [products, setProducts] = useState(product);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState(""); // State to track the sorting option

  const filterItem = (category) => {
    const updatedList = product.filter((curElem) => {
      return curElem.category === category;
    });

    setProducts(updatedList);
    setActiveCategory(category);
  };

  const sorting = (event) => {
    const selectedSort = event.target.value;

    if (selectedSort === "lowest") {
      const sortedProducts = [...products].sort(
        (a, b) =>
          parseFloat(a.price.replace("₹", "").replace(",", "")) -
          parseFloat(b.price.replace("₹", "").replace(",", ""))
      );
      setProducts(sortedProducts);
      setSortBy("lowest");
    } else if (selectedSort === "highest") {
      const sortedProducts = [...products].sort(
        (a, b) =>
          parseFloat(b.price.replace("₹", "").replace(",", "")) -
          parseFloat(a.price.replace("₹", "").replace(",", ""))
      );
      setProducts(sortedProducts);
      setSortBy("highest");
    } else {
      setSortBy(""); // Reset the sorting
    }
  };

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="box1" data-aos="fade-up">
          <h1 className="category">Category</h1>
          <ul>
            <li
              onClick={() => {
                setProducts(product);
                setActiveCategory("All");
              }}
              className={activeCategory === "All" ? "active" : ""}
            >
              All
            </li>
            <li
              onClick={() => filterItem("mobile")}
              className={activeCategory === "mobile" ? "active" : ""}
            >
              Mobile
            </li>
            <li
              onClick={() => filterItem("laptop")}
              className={activeCategory === "laptop" ? "active" : ""}
            >
              Laptop
            </li>
            <li
              onClick={() => filterItem("headphone")}
              className={activeCategory === "headphone" ? "active" : ""}
            >
              Headphone
            </li>
            <li
              onClick={() => filterItem("watch")}
              className={activeCategory === "watch" ? "active" : ""}
            >
              Watch
            </li>
            <li
              onClick={() => filterItem("acessories")}
              className={activeCategory === "acessories" ? "active" : ""}
            >
              Television
            </li>
          </ul>
        </div>
        <div className="box2">
          <div className="card1" data-aos="fade-up">
            <h1 className="tagline">
              Explore. Select. Checkout. Your E-commerce Destination.
            </h1>
            <form action="">
              <select
                name="sort"
                id="sort"
                className="select_sort"
                value={sortBy}
                onChange={sorting}
              >
                <option value="" className="select_option" disabled>
                  Sort by: Price
                </option>
                <option value="lowest" className="select_option">
                  Price: Low to High
                </option>
                <option value="highest" className="select_option">
                  Price: High to Low
                </option>
              </select>
            </form>
          </div>
          <div className="card2" data-aos="fade-up">
            <ProductCard products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

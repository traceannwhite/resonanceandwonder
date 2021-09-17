import React from "react";
import products from "../../products.json";
import styles from "../../styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.grid}>
      {products.map((product) => {
        return (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.name}</h3>
            <p>{product.seller}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

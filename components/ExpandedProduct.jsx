import products from "../pages/api/products/products/json";
import styles from "../styles/Products.module.css";

const ExpandedProduct = () => {
  return (
    <div className={styles.grid}>
      {products.map((product) => {
        return (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.name}</h3>
            <p>Sold by: {product.seller}</p>
            <p>${product.price}</p>
            <p>Product Description: {product.description}</p>
            <p>Product Category: {product.category}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandedProduct;

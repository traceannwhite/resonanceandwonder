import Link from "next/link";
import products from "../products.json";
import styles from "../styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.grid}>
      {products.map((product) => {
        return (
          <div className={styles.card} key={product.id}>
            <Link href="/products/id">
              <div>
                <img src={product.image} alt={product.title} />
                <h3>{product.name}</h3>
                <p>{product.seller}</p>
                <p>${product.price}</p>
              </div>
            </Link>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

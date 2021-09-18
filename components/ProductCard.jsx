import styles from "../styles/Shop.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import products from "../products.json";

const Products = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.grid}>
      {products.map((product) => {
        return (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.name}</h3>
            <p>{product.seller}</p>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

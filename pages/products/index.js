import Product from "../../components/Product";
import Link from "next/link";
import styles from "../../styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.grid}>
        <Product />
    </div>
  );
};

export default Products;

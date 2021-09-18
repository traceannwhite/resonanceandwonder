import ProductCard from "../components/ProductCard";
import styles from "../styles/Shop.module.css";
import { getProducts } from "./api/products/index";

const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

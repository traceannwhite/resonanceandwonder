import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Products.module.css";

const CategoryCard = ({ image, name, url }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <Link href={`/category/${url.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>See More</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

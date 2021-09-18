import Link from "next/link";
import styles from "../styles/Shop.module.css";

const CategoryCard = ({ image, name, url }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>See More</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

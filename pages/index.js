import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resonance and Wonder</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        {/* <Hero /> */}
        <div className={styles.headline}>
          <h2>Featured Products</h2>
          <Link href="/shop">See All Products</Link>
        </div>
        <div className={styles.grid}>
          <ProductCard />
        </div>
        <div>
          <h2 className={styles.headline}>Product Categories</h2>
          <div className={styles.grid}>
            <CategoryCard
              image="image/clothing-and-shoes.jpeg"
              name="Clothing and Shoes"
            />
            <CategoryCard
              image="image/home-and-living.jpeg"
              name="Home and Living"
            />
            <CategoryCard
              image="image/eco-friendly.jpeg"
              name="Eco-friendly Products"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

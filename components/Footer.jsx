import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright by <span>Trace White </span>
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;

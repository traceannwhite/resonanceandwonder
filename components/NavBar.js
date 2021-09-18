import { Container, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { RiShoppingCartLine } from "react-icons/ri";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navcontainer} id="navbar">
      <Navbar color="light" light expand="md" className={styles.navbar}>
        <Container className="home-logo">
          <NavLink href="/" className="nav-link" id="navbar-home">
            <img
              src="http://res.cloudinary.com/dhcagrzcb/image/upload/v1631639955/resonance_wonder_u5ooyz.png"
              alt=""
            />
          </NavLink>
        </Container>
        <Container className="user-links">
          {/* <NavLink href="/signup">Sign Up</NavLink>
          <NavLink href="/login">Log In</NavLink> */}
          {/* <NavAuth /> */}
          <NavItem>
            <NavLink href="/cart" className={styles.cartlink}>
              <RiShoppingCartLine className={styles.cartbtn} />
            </NavLink>
          </NavItem>
        </Container>
      </Navbar>
      <Nav className={styles.categorylinks}>
        <NavItem>
          <NavLink href="/products/clothingandshoes" className={styles.navlink}>
            Clothing and Shoes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products/homeandliving" className={styles.navlink}>
            Home and Living
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products/ecofriendly" className={styles.navlink}>
            Eco-friendly Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products/selfcare" className={styles.navlink}>
            Self-care Goods
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;

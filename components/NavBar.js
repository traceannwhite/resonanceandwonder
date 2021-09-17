import { Container, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { RiShoppingCartLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="nav-container" id="navbar">
      <Navbar color="light" light expand="md" className="nav-bar">
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
            <NavLink href="/cart" className="cart-link">
              <RiShoppingCartLine className="cart-btn" />
            </NavLink>
          </NavItem>
        </Container>
      </Navbar>
      <Nav className="product-pages-links">
        <NavItem>
          <NavLink href="/products/clothingandshoes/">
            Clothing and Shoes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products/homeandliving/">Home and Living</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/products/ecofriendly/">Eco-friendly Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products/selfcare/">Self-care Goods</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;

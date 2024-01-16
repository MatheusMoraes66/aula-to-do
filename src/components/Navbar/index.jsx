import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function NavBar({ title }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
              <Navbar.Brand href="#home">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;

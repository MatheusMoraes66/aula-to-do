import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
function BoxConteiner({ children }) {
  return (
    <Card style={{ width: "60vw", height: "50vh" }}>
      <Card.Header>List</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

BoxConteiner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxConteiner;

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../styles/searchbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Row className="w-70">
        <Col xs={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 flex-grow-1"
              aria-label="Search"
            />
            <Button variant="outline-success">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;

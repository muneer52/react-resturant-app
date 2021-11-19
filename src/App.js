import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import "./App.scss";

const App = () => {
  return (
    <div>
      Welcome Munir {3 + 3}
      <MyName name="taha" />
    </div>
  );
};

const MyName = ({ name }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

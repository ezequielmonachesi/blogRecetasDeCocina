import { Button, Card, Col } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>Pizza</Card.Title>
          <Card.Text>$1.740,00</Card.Text>
          <Button variant="dark">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
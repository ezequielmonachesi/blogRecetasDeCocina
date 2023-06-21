import { Button, Card, Col } from "react-bootstrap";

const CardReceta = ({receta}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={receta.imagen}
        />
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <Card.Text>{receta.resenia}</Card.Text>
          <Button variant="dark">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
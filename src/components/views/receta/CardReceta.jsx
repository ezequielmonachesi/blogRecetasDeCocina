import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card className="h-100 shadow">
        <Card.Img
          variant="top"
          src={receta.imagen}
        />
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <Card.Text>{receta.resenia}</Card.Text>
          <Link className="btn btn-dark" to={'/detalle/'+receta.id}>Ver detalle</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
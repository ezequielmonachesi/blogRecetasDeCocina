import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getReceta } from "../helpers/queries";

const DetalleReceta = () => {

  const [unaReceta, setUnaReceta] = useState({});

  const {id} = useParams();

  useEffect(()=>{
    getReceta(id).then((respuesta)=>{
      setUnaReceta(respuesta);
    })
  },[])

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={unaReceta.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{unaReceta.nombreReceta}</Card.Title>
              <hr />
              <Card.Text>{unaReceta.resenia}
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> {unaReceta.categoria}
              <br />
              <span className="text-danger fw-semibold ">Ingredientes:</span> {unaReceta.ingredientes}</Card.Text>
              <Card.Text>
                {unaReceta.descripcion}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;

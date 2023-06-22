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
    <Container className="mainSection">
      <Card className="mt-5">
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
              <hr />
              <Card.Text>
                <h6>Pasos a seguir</h6>
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

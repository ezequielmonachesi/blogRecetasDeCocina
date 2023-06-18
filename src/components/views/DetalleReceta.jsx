import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Pizza</Card.Title>
              <hr />
              <Card.Text>
              Combinación perfecta entre leche, choclate, café intenso y un toque de canela. Café con granos 100% de arábica brasileña. Todo en una capsula inteligente.
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> comida
              <br />
              <span className="text-danger fw-semibold ">Precio:</span> $1.740,00</Card.Text>
              <Card.Text>
                Pasos a seguir: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, vel consectetur delectus error illum ut autem ipsa obcaecati recusandae, cumque incidunt laudantium impedit perferendis facere ex vitae tenetur voluptatem reiciendis!
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;

import { Carousel, Container, Row } from "react-bootstrap";
import CardReceta from "./receta/cardReceta";
import { useEffect, useState } from "react";
import { getRecetas } from "../helpers/queries";
const Inicio = () => {
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(() => {
    getRecetas().then((respuesta) => {
      setListaRecetas(respuesta);
    });
  }, []);

  return (
    <section className="mainSection">
      <Carousel fade>
        <Carousel.Item>
          <div className="d-block w-100 banner slide1" alt="primeraImagen" />
          <Carousel.Caption>
            <h3>Aprende Rápido</h3>
            <p>Desarrolla tu habilidad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 banner slide2" alt="segundaImagen" />
          <Carousel.Caption>
            <h3>Aprende Recetas</h3>
            <p>Las mejores recetas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 banner slide3" alt="terceraImagen" />
          <Carousel.Caption>
            <h3>Aprende Cocina</h3>
            <p>Ser constante para llegar al éxito.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h1 className="display-4 mt-5">Nuestras Recetas</h1>
        <hr />
        <Row className="gy-4 mt-5 justify-content-center">
          {listaRecetas.map((receta) => (
            <CardReceta receta={receta} key={receta.id}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;

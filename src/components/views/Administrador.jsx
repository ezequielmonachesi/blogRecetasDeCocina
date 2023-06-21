import { Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { getRecetas } from "../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [listaDeRecetas, setListaDeRecetas] = useState([]);

  useEffect(() => {
    getRecetas().then((respuesta) => {
      if (respuesta) {
        setListaDeRecetas(respuesta);
      } else {
        Swal.fire("Ocurrio un error", "Intente nuevamente más tarde", "error");
      }
    });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-dark" to="/administrador/crear-receta">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaDeRecetas.map((receta) => (
            <ItemReceta receta={receta} key={receta.id}></ItemReceta>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;

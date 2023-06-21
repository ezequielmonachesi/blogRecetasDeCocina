import { Button } from "react-bootstrap";
import { borrarReceta, getRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setListaDeRecetas }) => {
  const eliminarReceta = () => {
    borrarReceta(receta.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Receta borrada",
          `La receta ${receta.nombreReceta} se borró exitosamnete`,
          "success"
        );
        getRecetas().then((respeusta) => {
          setListaDeRecetas(respeusta);
        });
      } else {
        Swal.fire(
          "No se pudo borrar",
          `La receta ${receta.nombreReceta} no se logro borrar`,
          "error"
        );
      }
    });
  };
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger" onClick={eliminarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;

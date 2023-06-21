import { Button } from "react-bootstrap";


const ItemReceta = ({receta}) => {
   return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;

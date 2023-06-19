import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (nuevaReceta) => {
    console.log(nuevaReceta);
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 3,
                message: "Cantidad mínima de caracteres 3.",
              },
              maxLength: {
                value: 100,
                message: "Cantidad máxima de caracteres 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formResenia">
          <Form.Label>Reseña</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Reseña"
            {...register("resenia", {
              minLength: {
                value: 20,
                message: "Cantidad mínima de caracteres 20.",
              },
              maxLength: {
                value: 500,
                message: "Cantidad máxima de caracteres 500",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.resenia?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value:
                  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                message: "La imagen debe ser una URL válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formResenia">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingredientes"
            {...register("ingredientes", {
              required: "Los ingredientes son obligatorios",
              minLength: {
                value: 20,
                message: "Cantidad mínima de caracteres 20.",
              },
              maxLength: {
                value: 2000,
                message: "Cantidad máxima de caracteres 2000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formResenia">
          <Form.Label>Descripción (pasos a seguir) *</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descripción"
            {...register("descripcion", {
              required: "Los pasos a seguir son obligatorios",
              minLength: {
                value: 20,
                message: "Cantidad mínima de caracteres 20.",
              },
              maxLength: {
                value: 2000,
                message: "Cantidad máxima de caracteres 2000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="carne">Carne</option>
            <option value="cerdo">Cerdo</option>
            <option value="ensalada">Ensalada</option>
            <option value="pastas">Pastas</option>
            <option value="dulce">Dulce</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarReceta;

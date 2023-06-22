import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    login(usuario).then((respuesta)=>{
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        navegacion('/administrador');
      }else{
        Swal.fire(
          'Ocurrió un error!',
          'El mail o contraseña es incorrecto.',
          'error'
        )
      }
    })
  };

  return (
    <Container className="mainSection">
      <Card className="my-5 shadow">
        <Card.Header as="h5" className="bg-dark text-light">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El mail es obligatorio.",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El mail debe ser válido ( ejemplo@mail.com ).",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "La contraseña es obligatoria.",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
                    message:
                      "La contraseña debe tener almenos: una mayúscula, una minúscula, número, caracter especial (@) y de 8 a 15 caracteres.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;

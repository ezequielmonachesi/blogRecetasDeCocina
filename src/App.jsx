import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Administrador from "./components/views/Administrador";
import DetalleReceta from "./components/views/DetalleReceta";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";

function App() {
  return (
    <>
    <Menu></Menu>
    {/* <Administrador></Administrador>  */}
    {/* <DetalleReceta></DetalleReceta> */}
    {/* <Error404></Error404> */}
    <Inicio></Inicio>
    {/* <Login></Login> */}
    {/* <Registro></Registro> */}
    <Footer></Footer>
    </>
  );
}

export default App;

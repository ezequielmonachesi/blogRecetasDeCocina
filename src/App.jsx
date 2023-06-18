import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Administrador from "./components/views/Administrador";
import DetalleReceta from "./components/views/DetalleReceta";
import Error404 from "./components/views/Error404";

function App() {
  return (
    <>
    <Menu></Menu>
    {/* <Administrador></Administrador>  */}
    {/* <DetalleReceta></DetalleReceta> */}
    <Error404></Error404>
    <Footer></Footer>
    </>
  );
}

export default App;

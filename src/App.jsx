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
import CrearReceta from "./components/views/receta/CrearReceta"
import EditarReceta from "./components/views/receta/EditarReceta"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crear-receta" element={<CrearReceta></CrearReceta>}></Route>
        <Route exact path="/administrador/editar-receta" element={<EditarReceta></EditarReceta>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

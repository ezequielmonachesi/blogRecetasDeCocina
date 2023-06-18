import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import CardReceta from "./components/views/receta/CardReceta";
import CrearReceta from "./components/views/receta/CrearReceta";

function App() {
  return (
    <>
    <Menu></Menu>
    <CardReceta></CardReceta>
    <CrearReceta></CrearReceta>
    <Footer></Footer>
    </>
  );
}

export default App;

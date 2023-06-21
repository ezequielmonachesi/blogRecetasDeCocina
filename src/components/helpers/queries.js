const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_productos = import.meta.env.VITE_API_RECETA;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("La contraseña es incorrecta");
        return null;
      }
    } else {
      console.log("El mail no fue encontrado");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecetas = async () => {
  try {
    const respuesta = await fetch(URL_productos);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const agregarReceta = async (nuevaReceta) => {
  try {
    const respuesta = await fetch(URL_productos, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(nuevaReceta)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(URL_productos+'/'+id, {
      method: "DELETE"});
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_recetas = import.meta.env.VITE_API_RECETA;

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
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecetas = async () => {
  try {
    const respuesta = await fetch(URL_recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const agregarReceta = async (nuevaReceta) => {
  try {
    const respuesta = await fetch(URL_recetas, {
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
    const respuesta = await fetch(URL_recetas+'/'+id, {
      method: "DELETE"});
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const getReceta = async (id) => {
  try {
    const respuesta = await fetch(URL_recetas+'/'+id);
    const receta = await respuesta.json();
    return receta;
  } catch (error) {
    console.log(error);
  }
};

export const editarReceta = async (nuevaReceta, id) => {
  try {
    const respuesta = await fetch(URL_recetas+'/'+id, {
      method: "PUT",
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
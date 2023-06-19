const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(itemUsuario =>itemUsuario.email === usuario.email);
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

export const guardarDatos = (datos) => ({
    type: 'GUARDAR_DATOS',
    payload: datos,
  });

  export const eliminarRegistro = (id) => ({
    type: 'ELIMINAR_REGISTRO',
    payload: id,
  });
import React from 'react';
import { ListaFormularioContainer } from './estilos';
import { useSelector, useDispatch } from 'react-redux';
import { eliminarRegistro } from './actions'; // Importa la acción para eliminar el registro
import eliminarImage from './assets/delete_button.png'; // Importa la imagen de eliminar
import './App.css';

function Listaformulario() {
    const formulariosEnviados = useSelector((state) => state.form.formulariosEnviados);
    const dispatch = useDispatch();
    const ultimosRegistros = formulariosEnviados.slice(-10)
    const handleEliminarRegistro = (index) => {
        dispatch(eliminarRegistro(index)); // Llama a la acción para eliminar el registro
    };
    console.log('Ultimos registros:', ultimosRegistros);
    return (
        <div className="formulario_container"> 
            <ListaFormularioContainer className="table-container">
                <h3 className='sub_lista'>Lista formulario </h3>
                <p className="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rut vendedor</th>
                        <th>Patente vehículo</th>
                        <th>Marca vehículo</th>
                        <th>Modelo vehículo</th>
                        <th>Precio vehículo</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ultimosRegistros.map((registro, index) => (
                        <tr key={registro.id}>
                            <td>{registro.nombre}</td>
                            <td>{registro.rut}</td>
                            <td>{registro.patente}</td>
                            <td>{registro.marca}</td>
                            <td>{registro.modelo}</td>
                            <td>{registro.precio}</td>
                            <td>
                                <img
                                    src={eliminarImage}
                                    alt="Eliminar"
                                    className="eliminar-btn"
                                    onClick={() => handleEliminarRegistro(index)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </ListaFormularioContainer>
        </div>
    );
}

export { Listaformulario };
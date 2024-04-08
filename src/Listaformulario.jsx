import React from 'react';
import { ListaFormularioContainer } from './estilos';
import { useSelector } from 'react-redux';
import './App.css';

function Listaformulario() {
    const formulariosEnviados = useSelector((state) => state.form.formulariosEnviados);
    const ultimosRegistros = formulariosEnviados.slice(-10);
    console.log('Ultimos registros:', ultimosRegistros);
    return (
        <div className="formulario_container"> 
            <ListaFormularioContainer>
                <h3 className='sub_lista'>Lista formulario </h3>
                <p className="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>RUT</th>
                        <th>Patente</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ultimosRegistros.map((registro, index) => (
                        <tr key={index}>
                        <td>{registro.nombre}</td>
                        <td>{registro.rut}</td>
                        <td>{registro.patente}</td>
                        <td>{registro.marca}</td>
                        <td>{registro.modelo}</td>
                        <td>{registro.precio}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </ListaFormularioContainer>
        </div>
    );
}

export { Listaformulario };

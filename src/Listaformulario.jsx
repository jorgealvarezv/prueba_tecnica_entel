import React from 'react';
import { ListaFormularioContainer } from './estilos';
import { useState } from 'react';
import './App.css';

function Listaformulario() {
    return (
        <div className="formulario_container"> 
            <ListaFormularioContainer>
                <h3 className='sub_lista'>Lista formulario </h3>
                <p className="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since. </p>
            </ListaFormularioContainer>
        </div>
    );
}

export { Listaformulario };

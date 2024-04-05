import { Button, Form, Input, Select, HeaderContainer, Header, Image, InputContainer } from './estilos';
import Laptop from './assets/Laptop.png';
import { useState } from 'react';
import './App.css';


function Formulario () {
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [patente, setPatente] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Nombre:', nombre);
      console.log('Rut:', rut);
      console.log('Patente:', patente);
      console.log('Marca:', marca);
      console.log('Modelo:', modelo);
      console.log('Precio:', precio);
    }
     return (
        <div>
            <HeaderContainer>
    <Header>Formulario <b>de Prueba</b></Header>
    </HeaderContainer>
    {/* carga la imagen */}
    <Image src={Laptop} alt="Laptop" className='laptop'/>
    {/* formulario */}

    <Form onSubmit={handleSubmit}>
      {/* Titulo que diga Datos del vendedor */}
      
      <h3 className="subtitulo"> Nuevo Formulario</h3>
     
      <p className="descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since. </p>


      <h4 className="subtitulo2" >Datos del vendedor:</h4>
      <InputContainer>
      <Input  className='nombre'
        type="text"
        placeholder="Nombre completo"
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)}
        label="Nombre completo" 
       
      />
      
      <Input className='rut'
        type="text" 
        placeholder="Rut vendedor" 
        value={rut} 
        onChange={(e) => setRut(e.target.value)} 
      />
      </InputContainer>
      {/* porner el boton abajo */}
      <h4 className="subtitulo2">Datos del Vehículo:</h4>
      <InputContainer>
      <Input  className='patente'
        type="text" 
        placeholder="Pantente del vehículo" 
        value={patente} 
        onChange={(e) => setPatente(e.target.value)}
      />
      <Select
      className='marca'
      value={marca} 
      onChange={(e) => setMarca(e.target.value)}
    >
      <option value="" disabled hidden>Marca</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option> 
    </Select>
    <Select
      className='modelo'
      value={modelo} 
      onChange={(e) => setModelo(e.target.value)}
    >
      <option value="" disabled hidden>Modelo</option>
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option> 
    </Select>
       {/* </InputContainer>
       <InputContainer> */}
      <Input  className='precio'
        type="text" 
        placeholder="Precio del vehículo"
        value={precio} 
        onChange={(e) => setPrecio(e.target.value)}
        
      />
      </InputContainer>
      <Button type="submit">Enviar</Button>
    </Form>
        </div>
    )
}
export {Formulario};
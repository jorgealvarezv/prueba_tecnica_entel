
import './App.css';

import { PageContainer } from './estilos';
import { NavegationBar } from './Navbar';
import { Formulario } from './Formulario';
import { Listaformulario } from './Listaformulario';
import { useState } from 'react';


function App() {

  const [selectedView, setSelectedView] = useState('formulario'); // Estado para controlar la vista seleccionada

  return (
    //pon los botones uno al lado del otro no debajo
    <PageContainer>
    {/* create navbar */}
    <NavegationBar onSelectView={setSelectedView} /> {/* Pasa la función para actualizar el estado al componente de navegación */}
      {/* Renderiza el componente correspondiente según el estado */}
      {selectedView === 'formulario' ? <Formulario /> : <Listaformulario />}



    </PageContainer>
  );
}
export default App;

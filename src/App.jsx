
import './App.css';

import { PageContainer } from './estilos';
import { NavegationBar } from './Navbar';
import { Formulario } from './Formulario';
import { Listaformulario } from './Listaformulario';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  const [selectedView, setSelectedView] = useState('formulario'); // Estado para controlar la vista seleccionada

  return (
    //pon los botones uno al lado del otro no debajo
    <Provider store={store}>
    <PageContainer>
    {/* create navbar */}
    <NavegationBar onSelectView={setSelectedView} /> {/* Pasa la función para actualizar el estado al componente de navegación */}
      {/* Renderiza el componente correspondiente según el estado */}
      {selectedView === 'formulario' ? <Formulario /> : <Listaformulario />}



    </PageContainer>
    </Provider>
  );
}
export default App;

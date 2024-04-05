
import './App.css';

import { PageContainer } from './estilos';
import { NavegationBar } from './Navbar';
import { Formulario } from './Formulario';


function App() {

  

  return (
    //pon los botones uno al lado del otro no debajo
    <PageContainer>
    {/* create navbar */}
    <NavegationBar/>
    <Formulario/>
   


    
    </PageContainer>
  );
}
export default App;

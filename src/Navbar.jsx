
import { Navbar,ButtonNav} from './estilos';
import { useState } from 'react';

function NavegationBar({onSelectView})  {
    const [selectedButton, setSelectedButton] = useState(1);
    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
      if (buttonId === 1) {
        onSelectView('formulario');
      }
      else if (buttonId === 2) {
        onSelectView('listaFormulario');
      }
    };
   
    return (
        <div>
            <Navbar>
                <div className="botones-navbar">
            <ButtonNav selected={selectedButton === 1}
                onClick={() => handleButtonClick(1)}
            >Formulario</ButtonNav>
            <ButtonNav selected={selectedButton === 2}
                onClick={() => handleButtonClick(2)}
            >Lista formulario</ButtonNav>
            </div>
      
            </Navbar>
        </div>
    )
}

export {NavegationBar};
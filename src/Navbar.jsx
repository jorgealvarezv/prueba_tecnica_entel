
import { Navbar,ButtonNav} from './estilos';
import { useState } from 'react';

function NavegationBar() {
    const [selectedButton, setSelectedButton] = useState(1);
    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
    };
   
    return (
        <div>
            <Navbar>
            <ButtonNav selected={selectedButton === 1}
                onClick={() => handleButtonClick(1)}
            >Formulario</ButtonNav>
            <ButtonNav selected={selectedButton === 2}
                onClick={() => handleButtonClick(2)}
            >Lista formulario</ButtonNav>
      
    </Navbar>
        </div>
    )
}

export {NavegationBar};
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 750px;
  //height: 100px;
  margin: 110px auto;
  margin-top: -100px;
`;
const InputContainer = styled.div`
  display: flex;
  gap: 10px; /* Espacio entre los inputs */
  margin-bottom: 10px;
  flex-wrap: wrap;
  border-bottom: 3px solid rgba(128, 128, 128, 0.1);
  padding-bottom: 40px;
`;

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: -10px;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #0540F2;
  margin-right: 10px;
  color: black;
  overflow: visible;
  border-radius: 5px;
  height: 25px;
  position: relative;
`;

const Select = styled.select`
  margin-top: 10px;
  margin-bottom: -10px;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #0540F2;
  margin-right: 19px;
  color: gray;
  overflow: visible;
  border-radius: 5px;
  height: 39px;
  position: relative;
`;

const Button = styled.button`
  padding: 5px;
  background-color: #0540F2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius:90px;
  width: 150px;
  height: 40px;
  margin-left: 600px;  
  margin-top: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid rgba(128, 128, 128, 0.1);
  padding-bottom: 40px;
  margin-top: -35px;
`;

const Header = styled.header`
  //background-color: #fff;
  color: #0540F2;
  //padding: 10px;
  text-align: center;
  font-size: 40px;
  text-align: left;
  //centrar entre arriba y abajo
  margin-top: 120px;
  margin-left: 70px;
  margin-bottom: 30px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 1100px;
    margin: 0 auto;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: right;
  padding: 30px;
  #background-color: #fff;
  color: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1); /* Agrega la sombra en la parte inferior */
  width: 1000px;
`;

const ButtonNav = styled.button`
color: #0540F2;
border: none;
cursor: pointer;
border-radius:90px;

background-color: ${({ selected }) => (selected ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
margin-left: 10px;
margin-right: 10px;
padding: 10px;
width: 150px;
height: 40px;
margin-top: 10px;
border : 2px white;
outline: none;
&:focus {
  outline: none; /* Asegurarse de que no aparezca el contorno en estado de enfoque */
}
`;

const Image = styled.img`
  margin-left: -900px;
  max-width: 100px; /* Ajusta el ancho máximo de la imagen según sea necesario */
`;

export { Form, InputContainer, Input, Select, Button, HeaderContainer, Header, PageContainer, Navbar, ButtonNav, Image };
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
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
  padding: 2px;
  background-color: #fff;
  border: 2px solid #0540F2;
  //margin-right: 19px;
  color: gray;
  overflow: visible;
  border-radius: 5px;
  height: 39px;
  position: relative;
  //espacio entre los inputs
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 5px;
  background-color: #0540F2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius:90px;
  width: 150px;
  height: 50px;
  margin-left: 53rem;  
  margin-top: 1rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const Header = styled.header`
  width: 60%;
  color: #0540F2;
  text-align: left;
  font-size: 3.5rem;
  
  
`;

const PageContainer = styled.div`
margin: 0;
`;

const Navbar = styled.nav`
  display: flex;
  #background-color: #fff;
  color: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); /* Agrega la sombra en la parte inferior */
  width: 100%;
`;

const ButtonNav = styled.button`
color: #0540F2;
border: none;
cursor: pointer;
border-radius:90px;
background-color: ${({ selected }) => (selected ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
padding: 1vh;
margin: 1vh;
font-size: 0.8rem;
outline: none;
&:focus {
  outline: none;
}
`;

const Image = styled.img`
width: 25%;
display: flex;
justify-content: center;
align-items: end;
margin-bottom: -5.5%;
margin-right: 15%;
`;

const ListaFormularioContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export { Form, InputContainer, Input, Select, Button, HeaderContainer, Header, PageContainer, Navbar, ButtonNav, Image, ListaFormularioContainer};
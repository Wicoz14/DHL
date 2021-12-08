import React, {useState} from "react";
import Usuario from "./Usuario.jsx";
import Pedidos from "./Pedidos.jsx";
import { Navbar, Container, Nav} from "react-bootstrap";

function home() {
    const [cambio, setCambio]=useState()

    const render = (event)=>{
        setCambio(event.target.attributes.value.value);
        if(cambio == "usuario"){
            setCambio(<Usuario/>)
            return (cambio)
        }
        /* if( cambio == "home"){
            setCambio()
        } 
        if(cambio == "usuario"){
            setCambio(<Usuario/>)
            console.log(cambio)
        }
        if(cambio == "Pedidos"){
            setCambio(<Pedidos/>)
        } */
    }
    
            
    
    
    return (
    <>
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">DHL</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home" onClick={render} value="home">Home</Nav.Link>
        <Nav.Link href="#Usuario" onClick={render} value="Usuario">Usuario</Nav.Link>
        <Nav.Link href="#Pedidos" onClick={render} value="Pedidos">Pedidos</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        <Usuario/>
        
        

    </>
    )};

export default App

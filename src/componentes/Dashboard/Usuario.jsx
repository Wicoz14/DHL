import React, { Fragment, useState } from "react";
import { RegistroMensajero } from "./RegistroMensajero";
/* import { Navbar, Container, Nav} from "react-bootstrap"  */

function Usuario(){
    const [show, setShow]=useState(false);
    const mostrar = () => {
        setShow(prev => !prev)     
    }

    let a = " "
    if (!show)
        a=(
        <div class="card-body">
        <button type="button" class="btn btn-primary" onClick={mostrar}>Agregar usuario</button>
        <div class="card-text">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">cargo</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <button type="button" class="btn btn-danger">Eliminar</button>{"  "}
                <button type="button" class="btn btn-secondary">Editar</button>
            </td>
            </tr>
            
        </tbody>
    </table>
    </div>
    </div>)
    else  a=(
    <div class="card-body">
    
    <div class="card-text">
       <RegistroMensajero/>
 
    </div>
    <button type="button" class="btn btn-primary" onClick={mostrar}>salir</button>
</div>
        )
    

    return (<Fragment>
        <div className="contenedor">
        {/* <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">DHL</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home"  value="home">Home</Nav.Link>
        <Nav.Link href="#Usuario"  value="Usuario">Usuario</Nav.Link>
        <Nav.Link href="#Pedidos"  value="Pedidos">Pedidos</Nav.Link>
        </Nav>
        </Container>
        </Navbar>  */}

        <div class="card">
            <div class="card-header">
                (imagen) Usuario
            </div>
            {a}
        </div> 
        </div>
    
        </Fragment>)
}

export default Usuario


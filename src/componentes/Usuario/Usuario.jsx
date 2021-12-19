import React, { Fragment, useState } from "react";
import { RegistroMensajero } from "../RegistroMensajero/RegistroMensajero.jsx";
import "./Usuario.css"

function Usuario(){
    const [show, setShow]=useState(" ");

const addUser = () =>{
    setShow(
        <div class="card-body">
    
        <div class="card-text registroMensajero">
            <RegistroMensajero/>
        
        </div>
    </div>
        

    )
}    


const externo = () =>{ 
    setShow(
    <div class="card-body">
        <div class="card-text">
        <table class="table dashboardTable">
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
    </div>
)
}

const mensajero = () =>{
    setShow(
        <div class="card-body">
        <button type="button" class="btn btn-primary" onClick={addUser}>Agregar usuario</button>
        <div class="card-text">
        <table className="table dashboardTable">
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
    </div> 
    )
}

    
    return (<Fragment>
        <div className="contenedor">
        

        <div className="cardDashboardUser">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link " onClick={externo}>Externo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " onClick={mensajero} >Mensajero</a>
                    </li>
                </ul>
            </div>
            {show}
        </div> 
        </div>
    
        </Fragment>)
}

export default Usuario


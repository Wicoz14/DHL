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

function listar(){
    var valor = " "
fetch("http://localhost:5000/dashboard/listar",{
    headers: {"content-type":"application/json"},
    method:"get",
    body:JSON.stringify()
}).then(res=>res.json())
    .then(res=>{
        if(res.estado==="ok"){
            valor = res.data
            console.log(valor)
        }else{
            console.log(res.msg)
        }
    })

}

function eliminar(numerodocumento){
    const dato = {numerodocumento}
    fetch("http://localhost:5000/dashboard/eliminar",{
        headers: {"content-type":"application/json"},
        method:"post",
        body:JSON.stringify(dato)
    })
    
}

function editar(numerodocumento){
    /* redireccionar, hay que crear una ventana con los campos editables */
    const edit = numerodocumento
    fetch("http://localhost:5000/dashboard/consulta",{
        headers: {"content-type":"application/json"},
        method:"post",
        body:JSON.stringify(edit)
    }).then(res=>res.json())
    .then(res=>{
        /* const nombres = nombresRef.current.value;
        const apellidos = apellidosRef.current.value;
        const tipodocumento = documentoRef.current.value;
        const numerodocumento = numerodocumentoRef.current.value;
        const correo = correoRef.current.value;
        const usuario = usuarioRef.current.value; */
        
        
    })
}


const externo = () =>{ 
    listar()
   
    setShow(
        <div class="card-body">
            <div class="card-text">
            <table class="table dashboardTable">
            <thead>
                <tr>
                <th scope="col">#Identificación</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
           {/*  {lista.map((list)=> {
            return( 
            <Fragment> 
            <tr>
                <th scope="row">{list.numerodocumento}</th>
                <td>{list.nombres}</td>
                <td>{list.apellidos}</td>
                <td>{list.correo}</td>
                <td>
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
                </tr>

                </Fragment>
            )  
            })}  */}
                
            </tbody>
        </table>
        </div>
        </div>
)
}

const mensajero = () =>{
    setShow(
        <div class="card-body">
        <button type="button" class="btn btn-primary agregarUsuario" onClick={addUser}>Agregar usuario</button>
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
                <button type="button" class="btn btn-danger" onClick={eliminar(/* numerodocumento */)}>Eliminar</button>{"  "}
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
            {show} {/* mostrando el estado */}
        </div> 
        </div>
    
        </Fragment>)
}

export default Usuario


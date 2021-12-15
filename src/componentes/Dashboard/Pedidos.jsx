/* import React, { Fragment, useState } from "react";*/
/* import {Container, containerModal} from "react-bootstrap"; */
/* import ListaPedidos from "./ListaPedidos";
import "./Pedidos.css"

const data=[{Id: "1", tipo:"normal",Dia:12, Direccion:"calle 21", EntegreA:"carlos", Estado:"pendiente",Mensajero:"alfred"},
{Id: "2", tipo:"Urgente",Dia:12, Direccion:"calle 21", EntegreA:"carlos", Estado:"pendiente",Mensajero:"alfred"}
]

function Pedidos(){
const state = {
  data:data,
  
}

const [listas,setListas]=useState(data)



 return (
 <Fragment>

 <div className="contenedor ">
        <div className="card">
            <div className="card-header">
                (imagen) Pedidos
            </div>
            <div className="card-body">

                <div className="Botones">
                <button type="button" class="btn btn-primary">Eliminar</button>
                <button type="button" class="btn btn-primary">Editar</button>{""}
                <button type="button" class="btn btn-primary" >Programar</button>
                </div>

                <div className="mx-auto">
                <ListaPedidos listas={listas}/>  
                </div>
            </div>  
        </div> 
  </div>


 </Fragment>
    )}
  
      

export default Pedidos */
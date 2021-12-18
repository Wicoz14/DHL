import React, { Fragment } from "react";
import './UsuarioMensajeria.css';
import solicitudes from '../../img/solicitudes.svg';
import enproceso from '../../img/enproceso.svg';
import reporte from '../../img/reporte.svg';
import { Link } from 'react-router-dom';
import {ProteccionURL} from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";

export function UsuarioMensajeria() {
    function retornar() {
        if (ProteccionURL() === 2) {
          return (
            <Fragment>
            <div className="container px-5 contenedorregistro">
               <div className="row row-cols-1 row-cols-md-3 g-4 cajamensajeria">
                   <div className="col">
                       <div className="card text-center tarjetamensajeria">
                           <Link to="/solicitudes"><img src={solicitudes} className="card-img-top imgtarjetas" alt="..." /></Link>
                           <div className="card-body">
                               <h5 className="card-title">Solicitudes de envío</h5>
                               <p className="card-text">Consultar las solicitudes de envíos de cliente por su fecha y asignarles la confirmación de mensajero a recoger</p>
                           </div>
                       </div>
                   </div>
                   <div className="col">
                       <div className="card text-center tarjetamensajeria1">
                           <Link to="/estadoenvio"><img src={enproceso} className="card-img-top imgtarjetas" alt="..." /></Link>
                           <div className="card-body">
                               <h5 className="card-title">Estados de envíos asignados</h5>
                               <p className="card-text">Ver, modificar el estado del envío y generar los reportes de los envíos programados y/o entregados por ciudad de origen </p>
                           </div>
                       </div>
                   </div>
                   <div className="col">
                       <div className="card text-center tarjetamensajeria">
                           <Link to="/reportes"><img src={reporte} className="card-img-top imgtarjetas" alt="..." /></Link>
                           <div className="card-body">
                               <h5 className="card-title">Reportes</h5>
                               <p className="card-text">Mostrar los reportes por día y por ciudad de los envíos programados y entregados</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </Fragment>
          )
        }else{
            return(<Navigate to="/" />)
        }
    }
    return retornar()
}
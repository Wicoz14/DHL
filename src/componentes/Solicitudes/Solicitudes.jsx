import React, { Fragment, useState, useEffect } from "react";
import './Solicitudes.css';
import {ProteccionURL} from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";
import {listarSolicitudes} from "./SolicitudesService.js"

export function Solicitudes() {
    const [listado, setListado] = useState([]);
    useEffect(async () => {
        const respuesta = await listarSolicitudes()
        setListado(respuesta.solicitudes)
    }, [])
    function retornar() {
        if (ProteccionURL() === 2) {
            return (
                <Fragment>
            <div className="container px-2 cajasolicitudes">
                <div className="table-responsive">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col"># del envío</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Ciudad de origen</th>
                            <th scope="col">Ciudad de destino</th>
                            <th scope="col">Dirección destino</th>
                            <th scope="col">Caracteristticas del paquete</th>
                            <th scope="col">Fecha de solicitud</th>
                            <th scope="col">Asignar a</th>
                            <th scope="col">Encargado</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listado.map(p => <tr>
                                <th scope="row">{p._id}</th>
                                <td>Mark</td>
                                <td>{p.direccion}</td>
                                <td>{p.ciudad}</td>
                                <td>{p.ciudadentrega}</td>
                                <td>{p.direccionentrega}</td>
                                <td>{p.alto+"-"+p.largo+"-"+p.ancho}</td>
                                <td>{p.fecharecogida}</td>
                                <td><button type="button" className="btn btn-primary">Asignar</button></td>
                                <td><input type="text" className="inputsolicitud" /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
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
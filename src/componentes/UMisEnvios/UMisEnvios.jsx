import React, { Fragment, useEffect, useState } from 'react';
import './UMisEnvios.css';
import misenvios from '../../img/misenvios.png';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";
import {listarmisenvios} from "./UMisEnvios.js"

export function UMisEnvios() {
    function retornar() {
        if (ProteccionURL() === 1) {
            const [listado, setListado] = useState([]);
            useEffect(async () => {
                const respuesta = await listarmisenvios();
                console.log(respuesta.misenvios);
                setListado(respuesta.misenvios)
            }, []);

            return (
                <Fragment>
                    <div className="container px-2 contenedormisenvios">
                        <h5 className="card-title text-center">Mis Envíos</h5>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha De Registro:</th>
                                        <th scope="col">Enviado a:</th>
                                        <th scope="col">Dirrección a entregar:</th>
                                        <th scope="col">Ciudad de entrega:</th>
                                        <th scope="col">Fecha de entrega:</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listado.map(p=>(<tr>
                                        <td>{p.fecharecogida}</td>
                                        <td>{p.nombreentrega}</td>
                                        <td>{p.direccionentrega}</td>
                                        <td>{p.ciudadentrega}</td>
                                        <td>{p.fechaentrega}</td>
                                        <td>{p.estado}</td>
                                    </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (<Navigate to="/" />)
        }
    }
    return retornar()
}
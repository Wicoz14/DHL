import React, { Fragment, useState, useEffect, useRef } from "react";
import './Solicitudes.css';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";
import { listarSolicitudes, encargar, validarsolicitud } from "./SolicitudesService.js"

export function Solicitudes() {
    const [listado, setListado] = useState([]);
    useEffect(async () => {
        const respuesta = await listarSolicitudes()
        setListado(respuesta.solicitudes)
    }, []);

    const [_id, setId] = useState("");

    const encargadoRef = useRef();

    function mod(p) {
        setId(p._id);
    }

    async function asignar(p) {
        console.log(encargadoRef.current.value);
        const encargado = encargadoRef.current.value;

        if (validarsolicitud(encargado)) {
            const respuesta = await encargar(_id, encargado);

            if (respuesta.estado === "Ok") {
                alert(respuesta.msg);
                window.location.href = "/solicitudes";
            }
            else (
                alert(respuesta.msg)
            )
        }


    }

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
                                            <td>{p.alto + "-" + p.largo + "-" + p.ancho}</td>
                                            <td>{p.fecharecogida}</td>
                                            <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => mod(p)}>Asignar</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Asignar envío a:</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <label>{_id}</label>
                                        <div>
                                            <input type="text" ref={encargadoRef} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={asignar}>Asignarlo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
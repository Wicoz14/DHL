import React, { Fragment, useRef, useEffect, useState } from "react";
import './Reportes.css';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";
import { traerReporte } from "./ReportesService.js"


export function Reportes() {
    const [listado, setListado] = useState([]);

    const estadoRef = useRef();
    const fechaRef = useRef();
    const ciudadRef = useRef();

    async function listarReporte() {
        const estado = estadoRef.current.value;
        const fecha = fechaRef.current.value;
        const ciudad = ciudadRef.current.value;
        
        const respuesta = await traerReporte(estado, fecha, ciudad);
        console.log(respuesta.reportes);
        setListado(respuesta.reportes)
    }

    function retornar() {

        if (ProteccionURL() === 2) {
            return (
                <Fragment>
                    <div className="container px-3 cajareportes text-white">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <form>
                                    <h3 className="text-center">Generar reportes</h3>
                                    <div className="form-group">
                                        <label className="inputreportes">Fecha:</label>
                                        <input ref={fechaRef} type="date" className=" form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="inputreportes">Ciudad:</label>
                                        <input ref={ciudadRef} type="text" className=" form-control" placeholder="Ciudad" />
                                    </div>
                                    <div>
                                        <label className="inputreportes">Estado del envío:</label>
                                        <select className="form-select selector " name="selector" ref={estadoRef}>
                                            <option value="">...</option>
                                            <option value="Programado">Programado</option>
                                            <option value="Recogido">Recogido</option>
                                            <option value="Entregado">Entregado</option>
                                            <option value="Cancelado-Cliente">Cancelado cliente</option>
                                            <option value="Cancelado-Empresa">Cancelado empresa</option>
                                        </select>
                                    </div>
                                    <div className="align-items-center">
                                        <button type="button" className="btn btn-primary textoslabel botonreportes" onClick={listarReporte}>Generar reporte</button>
                                    </div>
                                </form>
                                <div className="container px-0 cajatabla">
                                    <div className="table-responsive">
                                        <table className="table table-dark table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col"># del envío</th>
                                                    <th scope="col">Caracteristicas finales</th>
                                                    <th scope="col">Comentarios</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listado.map(p =>
                                                        <tr>
                                                            <th scope="row">{p._id}</th>
                                                            <td>{p.caracteristicasfinales}</td>
                                                            <td>{p.comentarios}</td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </table>
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
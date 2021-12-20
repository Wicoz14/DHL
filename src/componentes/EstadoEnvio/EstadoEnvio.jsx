import React, { Fragment, useEffect, useState, useRef } from "react";
import './EstadoEnvio.css'
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";
import { listarEstados, modificar } from "./EstadoService";

export function EstadoEnvio() {
    const [listado, setListado] = useState([]);
    useEffect(async () => {
        const respuesta = await listarEstados();
        setListado(respuesta.estados)
    }, []);
    const [_id, setId] = useState("");

    const caracteristicasRef = useRef();
    const comentariosRef = useRef();
    const fechaentregaRef = useRef();
    const estadoenvioRef = useRef();

    function mod(p) {
        setId(p._id);
    }

    async function modificarEstado() {
        const caracteristicasfinales = caracteristicasRef.current.value;
        const comentarios = comentariosRef.current.value;
        const fechaentrega = fechaentregaRef.current.value;
        const estadoenvio = estadoenvioRef.current.value;

        const respuesta = await modificar(_id, caracteristicasfinales, comentarios, fechaentrega, estadoenvio);

        if (respuesta.estado === "Ok") {
            alert(respuesta.msg);
            window.location.href = "/estadoenvio";
        }
        else {
            alert(respuesta.msg);
        }

    }




    function retornar() {
        if (ProteccionURL() === 2) {
            return (
                <Fragment>
                    <div className="container px-2 cajasolicitudes">
                        <div className="table-responsive">
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"># del envío</th>
                                        <th scope="col">Caracteristicas finales</th>
                                        <th scope="col">Comentarios</th>
                                        <th scope="col">Fecha de entrega</th>
                                        <th scope="col">Encargado</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Modificar estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listado.map(p => <tr>
                                            <th scope="row">{p._id}</th>
                                            <td>{p.caracteristicasfinales}</td>
                                            <td>{p.comentarios}</td>
                                            <td>{p.fechaentrega}</td>
                                            <td>{p.encargado}</td>
                                            <td>{p.estado}</td>

                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => mod(p)} >
                                                Modificar Estado</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content text-center modalrecuperar text-white">
                                    <div class="modal-header headerrecuperar">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modificar envio</h5>
                                        <button type="button" class="btn-close closerecuperar" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body bodyrecuperar">
                                        <div>
                                            <h6>Número único de envío:</h6>
                                        </div>
                                        <label>{_id}</label>
                                        <div>
                                            <h6>Caracteristicas finales:</h6>
                                            <input className="form-control inputsolicitudes" type="text" ref={caracteristicasRef} />
                                        </div>
                                        <div>
                                            <h6>Comentarios:</h6>
                                            <input className="form-control inputsolicitudes" type="text" ref={comentariosRef} />
                                        </div>
                                        <div>
                                            <h6>Fecha de entrega:</h6>
                                            <input className="form-control inputsolicitudes" type="date" ref={fechaentregaRef} />
                                        </div>
                                        <div>
                                            <h6>Estado:</h6>
                                            <select className="form-select selectorestadoenvio" name="selector" ref={estadoenvioRef}>
                                                <option value="">...</option>
                                                <option value="Programado">Programado</option>
                                                <option value="Recogido">Recogido</option>
                                                <option value="Entregado">Entregado</option>
                                                <option value="Cancelado-Cliente">Cancelado cliente</option>
                                                <option value="Cancelado-Empresa">Cancelado empresa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer footerrecuperar">
                                        <button type="button" class="btn btn-primary" onClick={modificarEstado}>Modificar</button>
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
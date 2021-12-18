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
    const[id, setId] = useState("");

    const caracteristicasRef = useRef();
    const comentariosRef= useRef();
    const fechaentregaRef= useRef();
    const estadoenvioRef = useRef();

    function mod(p){
        setId(p._id);
    }

    function modificarEstado(){
        const caracteristicasfinales = caracteristicasRef.current.value;
        const comentarios = comentarios.current.value;
        const fechaentrega = fechaentregaRef.current.value;
        const estadoenvio = estadoenvio.current.value;
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
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>{id}</label>
                                        <div>
                                            <label>Caracteristicas finales</label>
                                            <input type="text" ref={caracteristicasRef}/>
                                        </div>
                                        <div>
                                            <label>Comentarios</label>
                                            <input type="text" ref={comentariosRef}/>
                                        </div>
                                        <div>
                                            <label>Fecha de entrega</label>
                                            <input type="date" ref={fechaentregaRef}/>
                                        </div>
                                        <div>
                                            <label>Estado</label>
                                            <select className="form-select selector" name="selector" ref={estadoenvioRef}>
                                                <option value="">...</option>
                                                <option value="Programado">Programado</option>
                                                <option value="Recogido">Recogido</option>
                                                <option value="Entregado">Entregado</option>
                                                <option value="Cancelado-Cliente">Cancelado cliente</option>
                                                <option value="Cancelado-Empresa">Cancelado empresa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
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
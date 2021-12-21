import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Perfil.css';
import perfiles from '../../img/perfiles.png';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { validaractualizacion, perfil, actualizarusuario } from './Perfil.js';

export function Perfil() {

    const [listado, setListado] = useState([]);
    useEffect(async () => {
        const respuesta = await perfil()
        setListado(respuesta.respuesta)
    }, []);

    const nombresactualizadosRef = useRef()
    const apellidosactualizadosRef = useRef()
    const correoactualizadoRef = useRef()

    async function actualizar() {
        const nombres = nombresactualizadosRef.current.value;
        const apellidos = apellidosactualizadosRef.current.value;
        const correo = correoactualizadoRef.current.value;

        if (await validaractualizacion(nombres, apellidos, correo)) {
            let respuesta = await actualizarusuario(nombres, apellidos, correo);
            if (respuesta.estado === "Ok") {
                alert(respuesta.msg);
                window.location.href = "/perfil"
            }
            else {
                alert(respuesta.msg);
            }
        }
    }

    function retornar() {
        if (ProteccionURL() === 1) {
            return (
                <Fragment>
                    <div className="container px-5 contenedorregistro text-white">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <form>
                                    <h2 className="text-center">PERFIL</h2>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Nombres</label>
                                        <input value={listado.nombres} type="text" className="form-control" placeholder="Nombres" required disable />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Apellidos</label>
                                        <input value={listado.apellidos} type="text" className="form-control" placeholder="Apellidos" disable />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Documento de identidad</label>
                                        <input value={listado.tipodocumento} type="texto" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" disable />
                                        <input value={listado.numerodocumento} type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" disable />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Correo</label>
                                        <input value={listado.correo} type="email" className="form-control" placeholder="Correo" disable />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Nombre de usuario</label>
                                        <input value={listado.usuario} type="text" className="form-control" placeholder="Usuario" disable />
                                    </div>
                                    <div className="botonactualizar">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modificar</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={perfiles} alt="..." /></div>
                        </div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content text-center modalrecuperar text-white">
                                    <div className="modal-header headerrecuperar">
                                        <h5 className="modal-title" id="staticBackdropLabel">Ingrese la información correspondiente</h5>
                                        <button type="button" className="btn-close closerecuperar" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="modal-body bodyrecuperar">
                                        <label>Nombres</label>
                                        <input type="text" class="form-control inputsolicitudes" ref={nombresactualizadosRef} />
                                        <label>Apellidos</label>
                                        <input type="text" class="form-control inputsolicitudes" ref={apellidosactualizadosRef} />
                                        <label>Correo</label>
                                        <input type="text" class="form-control inputsolicitudes" ref={correoactualizadoRef} />
                                    </div>
                                    <div className="modal-footer footerrecuperar">
                                        <button type="button" className="btn btn-primary" onClick={actualizar} >Actualizar</button>
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
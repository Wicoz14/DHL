import React, { Fragment, useRef } from 'react';
import './Registro.css';
import { validar, registrar } from './RegistroService.js';
import registro from '../../img/registro.svg';
import { Navigate } from 'react-router-dom';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";

export function Registro() {
    const nombresRef = useRef();
    const apellidosRef = useRef();
    const documentoRef = useRef();
    const numerodocumentoRef = useRef();
    const correoRef = useRef();
    const usuarioRef = useRef();
    const contraseñaRef = useRef();
    const confirmarcontraseñaRef = useRef();
    const chequeadoRef = useRef();

    async function registrarse() {
        const nombres = nombresRef.current.value;
        const apellidos = apellidosRef.current.value;
        const tipodocumento = documentoRef.current.value;
        const numerodocumento = numerodocumentoRef.current.value;
        const correo = correoRef.current.value;
        const usuario = usuarioRef.current.value;
        const contraseña = contraseñaRef.current.value;
        const confirmarcontraseña = confirmarcontraseñaRef.current.value;
        const chequeado = chequeadoRef.current.checked;
        const rol = "usuarioexterno";
        const recuperar = false;

        if (await validar(nombres, apellidos, numerodocumento, correo, usuario, contraseña, confirmarcontraseña, chequeado)) {
            let respuesta = await registrar(nombres, apellidos, tipodocumento, numerodocumento, correo, usuario, contraseña, rol, recuperar);
            if (respuesta.estado === "Ok") {
                alert(respuesta.msg);
                window.location.href = "/"
            }
            else {
                alert(respuesta.msg);
            }
        }
    }

    function retornar() {
        if (ProteccionURL() === 0) {
            return (
                <Fragment>
                    <div className="container px-5 contenedorregistro">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <form>
                                    <h2 className="text-center">REGISTRO</h2>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Nombres</label>
                                        <input ref={nombresRef} type="text" className="form-control" placeholder="Nombres" required />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Apellidos</label>
                                        <input ref={apellidosRef} type="text" className="form-control" placeholder="Apellidos" />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Documento de identidad</label>
                                        <select ref={documentoRef} className="form-select selector" name="selector">
                                            <option value="CC">Cédula de ciudadanía</option>
                                            <option value="TI">Tarjeta de identidad</option>
                                            <option value="PE">Pasaporte de extrangería</option>
                                        </select>
                                        <input ref={numerodocumentoRef} type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Correo</label>
                                        <input ref={correoRef} type="email" className="form-control" placeholder="Correo" />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Nombre de usuario</label>
                                        <input ref={usuarioRef} type="text" className="form-control" placeholder="Usuario" />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Contraseña</label>
                                        <input ref={contraseñaRef} type="password" className="form-control" placeholder="Contraseña" />
                                    </div>
                                    <div className="col-sm form-group">
                                        <label className="form- label registrolabel">Confirmar contraseña</label>
                                        <input ref={confirmarcontraseñaRef} type="password" className="form-control" placeholder="Confirmar contraseña" />
                                    </div>
                                    <div className="px-5 form-check">
                                        <input ref={chequeadoRef} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label textcheck" htmlFor="exampleCheck1">Acepto los términos y condiciones del uso del portal, para mayor información haga click aquí*</label>
                                    </div>
                                    <div className="botonregistrarse">
                                        <button type="button" className="btn btn-primary" onClick={registrarse}>Registrarse</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={registro} alt="..." /></div>
                        </div>
                    </div>
                </Fragment>
            )
        }else {
            return (<Navigate to="/" />)
        }
    }
    return retornar()
}

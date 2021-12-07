import React, { Fragment, useRef } from 'react';
import './RegistroMensajero.css';
import { validar, registrar } from './RegistroMensajeroS.js';
import registro from '../../img/registro.svg';

export function RegistroMensajero() {
    const nombresRef = useRef();
    const apellidosRef = useRef();
    const documentoRef = useRef();
    const numerodocumentoRef = useRef();
    const correoRef = useRef();
    const usuarioRef = useRef();
    const contraseñaRef = useRef();
    const confirmarcontraseñaRef = useRef();
    const chequeadoRef = useRef();

    const registrarse = () => {
        const nombres = nombresRef.current.value;
        const apellidos = apellidosRef.current.value;
        const documento = documentoRef.current.value;
        const numerodocumento = numerodocumentoRef.current.value;
        const correo = correoRef.current.value;
        const usuario = usuarioRef.current.value;
        const contraseña = contraseñaRef.current.value;
        const confirmarcontraseña = confirmarcontraseñaRef.current.value;
        const chequeado = chequeadoRef.current.checked;

        if (validar(nombres, apellidos, numerodocumento, correo, usuario, contraseña, confirmarcontraseña, chequeado)) {
            registrar(nombres, apellidos, documento, numerodocumento, correo, usuario, contraseña);
            nombresRef.current.value = "";
            apellidosRef.current.value = "";
            documentoRef.current.value = "Choose...";
            numerodocumentoRef.current.value = "";
            correoRef.current.value = "";
            usuarioRef.current.value = "";
            contraseñaRef.current.value = "";
            confirmarcontraseñaRef.current.value = "";
        }
    }
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
                                <label className="form- label registrolabel">Rol</label>
                                <input ref={usuarioRef} type="text" className="form-control" placeholder="Rol" />
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
}
import React, { useRef } from 'react';
import recuperar from '../../img/recuperar.svg';
import './RecuperarContrasena.css'
import { validacionRecuperar, recuperarC } from './RecuperarService.js'

export function RecuperarContrasena() {
    const conficontrasenaRef = useRef();
    const contrasenaRef = useRef();

    async function recuperarContrasena() {
        const contrasena = contrasenaRef.current.value;
        const confirmarcontrasena = conficontrasenaRef.current.value;
        if (await validacionRecuperar(contrasena, confirmarcontrasena)) {
            let respuesta = await recuperarC(contrasena);
            if (respuesta.estado === "Ok") {
                window.location.href = "/usuarioexterno"
            }
            else {
                alert(respuesta.msg);
                contrasenaRef.current.value = "";
                conficontrasenaRef.current.value = "";
            }
        }
    }
    return (
        <div className="contenedorrecuperar">
            <div className="container px-4 text-center text-white">
                <h1 className="fw-bolder">Cambiar Contraseña</h1>
                <p className="lead">Ha recuperado su contraseña mediante su correo electrónico, ahora debe ingresar una nueva contraseña:</p>
            </div>
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6 cajalogin">
                        <form>
                            <h3 className="text-center ingresa">INGRESA NUEVA CONTRASEÑA</h3>
                            <div className="form-group ">
                                <label className="textoslabel">Nueva Contraseña:</label>
                                <input ref={contrasenaRef} type="password" className="form-control" placeholder="Contraseña" />
                            </div>
                            <div className="form-group">
                                <label className="textoslabel">Confirma Nueva Contraseña:</label>
                                <input ref={conficontrasenaRef} type="password" className="form-control" placeholder="Confirma Nueva Contraseña" />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary textoslabel" onClick={recuperarContrasena}>Confirmar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={recuperar} alt="..." /></div>
                </div>
            </div>
        </div>
    )
}
import React, { Fragment,useRef} from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Perfil.css';
import perfiles from '../../img/perfiles.png';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { validar,perfil,actualizar } from './Perfil.js';

export function Perfil() {
        const nombresRef = useRef();
        const apellidosRef = useRef();
        const documentoRef = useRef();
        const numerodocumentoRef = useRef();
        const correoRef = useRef();
        const usuarioRef = useRef();
        const respuestas =async() => await perfil();
        console.log(respuestas);
    
        async function actualizarPerfil() {
            const nombres = nombresRef.current.value;
            const apellidos = apellidosRef.current.value;
            const tipodocumento = documentoRef.current.value;
            const numerodocumento = numerodocumentoRef.current.value;
            const correo = correoRef.current.value;
            const usuario = usuarioRef.current.value;
            const rol = "usuarioexterno";
    
            if (await validar(nombres, apellidos, correo)) {
                let respuesta = await actualizar(nombres, apellidos, correo);
                if (respuesta.estado === "Ok") {
                    alert(respuesta.msg);
                    window.location.ref = "/";
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
                    <div className="container px-5 contenedorregistro">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">
                    <form>
                        <h2 className="text-center">PERFIL</h2>
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
                            <select ref={documentoRef} className="form-select 
                            selector" name="selector" disabled>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="PE">Pasaporte de extrangería</option>
                        </select>
                            <input ref={numerodocumentoRef} type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" disabled/>
                        </div>
                        <div className="col-sm form-group">
                            <label className="form- label registrolabel">Correo</label>
                            <input ref={correoRef} type="email" className="form-control" placeholder="Correo" />
                        </div>
                        <div className="col-sm form-group">
                            <label className="form- label registrolabel">Nombre de usuario</label>
                            <input ref={usuarioRef} type="text" className="form-control" placeholder="Usuario" disabled/>
                        </div>
                        <div className="botonregistrarse">
                            <button type="button" className="btn btn-primary" onClick={actualizarPerfil}>Actualizar</button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={perfiles} alt="..." /></div>
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
import React, { Fragment, useRef } from 'react';
import envio from '../../img/envio.png';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import { login, recuperar, validar, validarCorreo } from './LoginService.js';
import perfiles from '../../img/perfiles.png';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";

export function Login() {
  const usuarioRef = useRef();
  const contraseñaRef = useRef();
  const correoRef = useRef();

  async function logearse() {
    const usuario = usuarioRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (await validar(usuario, contraseña)) {
      let respuesta = await login(usuario, contraseña);
      if (respuesta.recuperar === true) {
        window.location.href = "/recuperarcontrasena"
        localStorage.setItem("token", respuesta.token)
      }
      else if (respuesta.estado === "Ok") {
        window.location.href = "/usuarioexterno"
        localStorage.setItem("token", respuesta.token)
      }
      else {
        alert(respuesta.msg);
        usuarioRef.current.value = "";
        contraseñaRef.current.value = "";
      }
    }
  };

  async function recuperarContraseña() {
    const correo = correoRef.current.value;
    if (await validarCorreo(correo)) {
      let respuesta = await recuperar(correo);
      if (respuesta.estado === "Ok") {
        alert(respuesta.msg);
        correoRef.current.value = "";
        window.location.href = "/"
      }
      else {
        alert(respuesta.msg);
      }
    }
  }

  function retornar() {
    console.log(ProteccionURL())
    if (ProteccionURL() === 0) {
      return (
        <Fragment>
          <main className="text-white main">
            <div className="container px-4 text-center">
              <h1 className="fw-bolder">Bienvenido a DHL-Colombia</h1>
              <p className="lead">Entregamos tus paquetes con el mayor cuidado y rapidez</p>
              <p className="lead">Llegamos a tu casa y hacemos el trabajo por ti</p>
              <Link to="/registro" className="btn btn-lg btn-light">Registrate y programa tus envíos</Link>
            </div>
            <div className="container px-5">
              <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6 cajalogin">
                  <form>
                    <h3 className="text-center ingresa">INGRESA</h3>
                    <div className="form-group ">
                      <label className="textoslabel">Usuario:</label>
                      <input ref={usuarioRef} type="text" className="form-control" placeholder="Usuario" />
                    </div>
                    <div className="form-group">
                      <label className="textoslabel">Contraseña:</label>
                      <input ref={contraseñaRef} type="password" className="form-control" placeholder="Contraseña" />
                      <a className="form-text text-white enlacerecuperar textoslabel" data-bs-toggle="modal" data-bs-target="#exampleModal">¿Olvidaste la contraseña?</a>
                    </div>
                    <div>
                      <button type="button" className="btn btn-primary textoslabel" onClick={logearse}>Entrar</button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={envio} alt="..." /></div>
              </div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content modalrecuperar">
                  <div className="modal-header headerrecuperar">
                    <h5 className="modal-title" id="exampleModalLabel">Recuperar contraseña</h5>
                    <button type="button" className="btn-close closerecuperar" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body bodyrecuperar">
                    <form>
                      <div className="mb-3">
                        <label className="col-form-label">Correo electrónico:</label>
                        <input ref={correoRef} type="email" className="form-control" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer footerrecuperar">
                    <button type="button" className="btn btn-primary" onClick={recuperarContraseña}>Recuperar</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      )
    } else if (ProteccionURL()===1){
      return (<Navigate to="/usuarioexterno" />)
    }
    else if(ProteccionURL()===2){
      return (<Navigate to="/usuariomensajeria" />)
    }else{
      return ( (<Navigate to="/" />))
    }
  }

  return retornar()
}
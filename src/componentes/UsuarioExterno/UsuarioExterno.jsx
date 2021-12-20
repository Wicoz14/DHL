import React, { Fragment } from 'react';
import realizarenvio from '../../img/realizarenvio.png';
import perfil from '../../img/perfil.png';
import misenvios from '../../img/misenvios.png';
import { Link } from 'react-router-dom';
import './UsuarioExterno.css';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";


export function UsuarioExterno() {
    function retornar() {
        if (ProteccionURL()=== 1) {
            return (
                <Fragment>
                    <div className="container px-5 contenedorusuarioexterno">
                        <div className="row justify-content-start">
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={perfil} class="img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mi Perfil</h5>
                                        <p className="card-text">Manten al día tu información personal.</p>
                                        <Link to="/perfil" className="btn btn-primary">Acceder</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={realizarenvio} class="img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Nuevo Envío</h5>
                                        <p className="card-text">Realiza los envíos que requieras sin demoras.</p>
                                        <Link to="/realizarenvio" className="btn btn-primary">Hacer Envío</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={misenvios} className="img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mis Envios</h5>
                                        <p className="card-text">Informe y estado de cada uno de tus envíos.</p>
                                        <Link to="/umisenvios" className="btn btn-primary">Revisar</Link>
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

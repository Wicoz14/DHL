import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Perfil.css';
import perfiles from '../../img/perfiles.png';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";

export function Perfil() {
    function retornar() {
        if (ProteccionURL() === 1) {
            return (
                <Fragment>
                    <div className="container px-5 contenedorperfil">
                        <div class="card mb-3 tarjetaperfil">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={perfiles} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Perfil</h5>
                                        <p class="card-text">Nombre del usuario, dirección, teléfono, correo ...</p>
                                        <p class="card-text"><small class="text-muted">Última actualización hace 3 mins </small></p>
                                        <Link to="/perfil" class="btn btn-primary">Actualizar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                </Fragment>
            )
        } else {
            return (<Navigate to="/" />)
        }
    }
    return retornar()
}
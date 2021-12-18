import React from 'react';
import realizarenvio from '../../img/realizarenvio.png';
import perfil from '../../img/perfil.png';
import misenvios from '../../img/misenvios.png';
import { Link } from 'react-router-dom';
import './UsuarioExterno.css';


export function UsuarioExterno() {
    return (
        <div className="container px-5 contenedorusuarioexterno">
            <div class="row justify-content-start">
                <div class="col-sm-4">
                    <div class="card">
                        <img src={perfil} class="img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Mi Perfil</h5>
                            <p class="card-text">Manten al día tu información personal.</p>
                            <Link to="/perfil" class="btn btn-primary">Acceder</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img src={realizarenvio} class="img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Nuevo Envío</h5>
                            <p class="card-text">Realiza los envíos que requieras sin demoras.</p>
                            <Link to="/realizarenvio" class="btn btn-primary">Hacer Envío</Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img src={misenvios} class="img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Mis Envios</h5>
                            <p class="card-text">Informe y estado de cada uno de tus envíos.</p>
                            <Link to="/umisenvios" class="btn btn-primary">Revisar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

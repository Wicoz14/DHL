import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"

function Dashboard(){

    return(
        <div className="containerDashboard ">
            <div className="row justify-content-start">
                <div className="col-6">
                    <div className="card"> 
                        <div class="card-body">
                            <h5 class="card-title">Registrar mensajero</h5>
                            <Link to="/registro-mensajero" className="btn btn-primary"> Registrar</Link>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Solicitudes de envio</h5>
                            <p class="card-text">Solicitudes de envio de los clientes a la espera de ser asignadas</p>
                            <Link to="/lista-pedidos" class="btn btn-primary">Asignar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-start">

                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Mi Perfil</h5>
                            <p class="card-text">Manten al día tu información personal.</p>
                            {/* <Link to="/perfil" class="btn btn-primary">Acceder</Link> */}
                        </div>
                    </div>
                </div>
                
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Mi Perfil</h5>
                            <p class="card-text">Manten al día tu información personal.</p>
                            {/* <Link to="/perfil" class="btn btn-primary">Acceder</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
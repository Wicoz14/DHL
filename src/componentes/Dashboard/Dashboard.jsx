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
                            <h5 class="card-title">Usuario</h5>
                            <p class="card-text">listado de usuarios</p>
                            <Link to="/dashboard/usuario" className="btn btn-primary"> Acceder</Link>
                        </div>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

export default Dashboard
import React, { Fragment } from 'react';
import logo from '../../img/logo.svg';
import './Layout.css';
import { Link } from 'react-router-dom';
import jwtDecode from "jwt-decode";

export function Layout() {
    let sesion = false;
    let payload = "";
    try {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            payload = jwtDecode(token);
            if (payload.usuario) {
                sesion = true;
            }
        }
    } catch (error) {

    }

    function cerrarSesion(){
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top barranav" id="mainNav">
                <div className="container px-4">
                    <a href="/">
                        <img src={logo} className="App-logo link-light" alt="logo" />
                    </a>
                    <a className="navbar-brand" href="/">DHL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li><Link to="/servicios" className="nav-link">Nuestro servicio</Link></li>
                            <li><Link to="/contactanos" className="nav-link">Contáctanos</Link></li>
                            {sesion && <div className="dropdown">
                                <button className="dropdown-toggle btn-outline btn-outline-primary bt2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">{payload.usuario}</button>
                                <ul className="dropdown-menu dropdown-menu-dark dropusuario" aria-labelledby="dropdownMenuButton2">
                                    <li><Link to="/perfil" className="dropdown-item drop1">Mi perfil</Link></li>
                                    <li><a className="dropdown-item drop1" onClick={cerrarSesion}>Cerrar cesión</a></li>
                                </ul>
                            </div>}
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}
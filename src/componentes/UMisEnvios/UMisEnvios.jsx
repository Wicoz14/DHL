import React from 'react';
import './UMisEnvios.css';
//import misenvios from '../../img/misenvios.png';

export function UMisEnvios() {
    return (
        <div className="container px-2 contenedormisenvios">
            <h5 class="card-title text-center">Mis Envíos</h5>
            <div className="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha de Envío</th>
                            <th scope="col">Enviado a</th>
                            <th scope="col">Número de rastreo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>07-12-2021</td>
                            <td>Otto</td>
                            <td>035-123456</td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria="false">
                                        Action
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Rastrear</a></li>
                                        <li><a class="dropdown-item" href="#">Cancelar</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>07-12-2021</td>
                            <td>Thornton</td>
                            <td>035-654123</td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria="false">
                                        Action
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Rastrear</a></li>
                                        <li><a class="dropdown-item" href="#">Cancelar</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>07-12-2021</td>
                            <td>UniNorte</td>
                            <td>035-741258</td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria="false">
                                        Action
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Rastrear</a></li>
                                        <li><a class="dropdown-item" href="#">Cancelar</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
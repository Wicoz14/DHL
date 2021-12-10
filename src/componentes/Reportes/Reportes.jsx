import React, { Fragment } from "react";
import './Reportes.css'

export function Reportes() {
    return (
        <Fragment>
            <div className="container px-3 cajareportes">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <form>
                            <h3 className="text-center">Programados</h3>
                            <div className="form-group">
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input type="text" className="form-control" placeholder="Usuario" />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary textoslabel">Generar reporte</button>
                            </div>
                        </form>
                        <div className="container px-0 cajasolicitudes">
                            <div className="table-responsive">
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"># del envío</th>
                                            <th scope="col">Caracteristicas finales</th>
                                            <th scope="col">Comentarios</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <form>
                            <h3 className="text-center">Entregados</h3>
                            <div className="form-group">
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input type="text" className="form-control" placeholder="Usuario" />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary textoslabel">Generar reporte</button>
                            </div>
                        </form>
                        <div className="container px-0 cajasolicitudes">
                            <div className="table-responsive">
                                <table class="table table-success table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"># del envío</th>
                                            <th scope="col">Caracteristicas finales</th>
                                            <th scope="col">Comentarios</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>peso:7kg, largo:5cm, alto:6cm, ancho:14cm</td>
                                            <td>sin comentarios</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
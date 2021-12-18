import React, { Fragment } from "react";
import FormGroup from "./FormGroup";
import FormSelectDepto from "./FormSelectDepto";
import './RealizarEnvio.css';
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";
import { Navigate } from "react-router-dom";

const RealizarEnvio = () => {
  function retornar() {
    if (ProteccionURL() === 1) {
      return (
        <Fragment>
          <div className="contenedorform">
            <div className="container w-100 d-flex justify-content-center">
              <h2 className="fw-bolder">Envío de Paquetes</h2>
            </div>
            <div className="container px-5">
              <h3>Datos del solicitante</h3>
              <div className="row gx-5 align-items-center fondo">
                <form>
                  <div className="row gx-5 align-items-center">
                    <FormGroup label={'Día a recoger paquete'} type={'date'} id={'date'} />
                  </div>
                  <div className="row gx-5 align-items-center">
                    <FormGroup label={'Alto'} type={'number'} id={'inputAlto'} />
                    <FormGroup label={'Largo'} type={'number'} id={'inputLargo'} />
                  </div>
                  <div className="row gx-5 align-items-center">
                    <FormGroup label={'Ancho'} type={'number'} id={'inputAncho'} />
                    <FormGroup label={'Dirección'} type={'text'} id={'inputDir'} />
                  </div>
                  <div className="row gx-5 align-items-center">

                    <FormSelectDepto label={"Departamento"} label2={"Ciudad"} id={"depto"} id2={"city"} />

                  </div>
                  <div className="row gx-5 align-items-center">
                    <h3>Datos del receptor</h3>
                  </div>
                  <div className="row gx-5 align-items-center">
                    <FormSelectDepto label={"Departamento"} label2={"Ciudad"} id={"depto"} id2={"city"} />
                  </div>
                  <div className="row gx-5 align-items-center">
                    <FormGroup label={'Dirección'} type={'text'} id={'direccion'} />
                    <FormGroup label={'N° de identificación'} type={'text'} id={'idReceptor'} />
                  </div>
                  <div className="row gx-5 align-items-center">
                    <FormGroup label={'Nombre Completo'} type={'text'} id={'NombreReceptor'} />
                    <div className="col-sm form-group">{" "}</div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div> :
        </Fragment>
      )
    } else {
      return (<Navigate to="/" />)
    }
  }
  return retornar();
};

export default RealizarEnvio;

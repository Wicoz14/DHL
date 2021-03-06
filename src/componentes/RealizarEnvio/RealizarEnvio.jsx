import React, { Fragment, useRef } from "react";
import './RealizarEnvio.css';
import {validar,realizarenvio} from './RealizarEnvio.js';
import { Navigate } from "react-router-dom";
import { ProteccionURL } from "../ProteccionURL/ProteccionURL";


export function RealizarEnvio() {
    const fecharecogidaRef = useRef();
    const altoRef = useRef();
    const anchoRef = useRef();
    const largoRef = useRef();
    const departamentoRef = useRef();
    const ciudadRef = useRef();
    const direccionRef = useRef();
    const departamentoentregaRef = useRef();
    const ciudadentregaRef = useRef();
    const documentoentregaRef = useRef();
    const direccionentregaRef = useRef();
    const nombreentregaRef = useRef();
  
    async function envio() {
        const fecharecogida = fecharecogidaRef.current.value;
        const alto = altoRef.current.value;
        const ancho = anchoRef.current.value;
        const largo = largoRef.current.value;
        const departamento = departamentoRef.current.value;
        const ciudad = ciudadRef.current.value;
        const direccion = direccionRef.current.value;
        const departamentoentrega = departamentoentregaRef.current.value;
        const ciudadentrega = ciudadentregaRef.current.value;
        const direccionentrega = direccionentregaRef.current.value;
        const nombreentrega = nombreentregaRef.current.value;
        const documentoentrega = documentoentregaRef.current.value;

        console.log("lia")
        if (await validar(fecharecogida,alto,ancho,largo,direccion,direccionentrega,nombreentrega,documentoentrega,departamento,departamentoentrega,ciudad,ciudadentrega)) {
          let respuesta = await realizarenvio(fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega);
          console.log(respuesta)
          if (respuesta.estado === "Ok") {
              alert(respuesta.msg);
              window.location.href = "/realizarenvio"
        }
        else {
            alert(respuesta.msg);
        } 
    }
    }

    function retornar() {
       if (ProteccionURL() === 1) {
            return (
                <Fragment>
                    <div className="container px-5 contenedor">
                        <div className="row gx-5 align-items-center justify-content-center">
                            
                            <form class="row g-2">
                                <h2 className="text-center">Env??o de Paquetes</h2>
                                <h3>Datos del solicitante</h3>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">D??a a recoger paquete</label>
                                    <input ref={fecharecogidaRef} type="date" className="form-control" placeholder="fecha recogida" required />
                                </div>

                                <div className="col-md-6">
                                    <label className="form- labelenvio">Departamento</label>
                                    <select ref={departamentoRef} className="form-select selector" name="selector">
                                        <option value="DEFAULT" selected>Seleccionar...</option>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="Antioquia">Antioquia</option>
                                        <option value="Arauca">Arauca</option>
                                        <option value="Atl??ntico">Atl??ntico</option>                                           
                                        <option value="Bol??var">Bol??var</option>                      
                                        <option value="Boyac??">Boyac??</option>                      
                                        <option value="Caldas">Caldas</option>
                                        <option value="Caquet??">Caquet??</option>                      
                                        <option value="Cauca">Cauca</option>
                                        <option value="Cesar">Cesar</option>                      
                                        <option value="Choc??">Choc??</option>                     
                                        <option value="C??rdoba">C??rdoba</option>                      
                                        <option value="Cundinamarca">Cundinamarca</option>                      
                                        <option value="Guain??a">Guain??a</option>                      
                                        <option value="Guaviare">Guaviare</option>                      
                                        <option value="Huila">Huila</option>                      
                                        <option value="La Guajira">La Guajira</option>                      
                                        <option value="Magdalena">Magdalena</option>                      
                                        <option value="Meta">Meta</option>
                                        <option value="Narri??o">Nari??o</option>                      
                                        <option value="Norte de Santander">Norte de Santander</option>
                                        <option value="Putumayo">Putumayo</option>                      
                                        <option value="Quind??o">Quind??o</option>                     
                                        <option value="Risaralda">Risaralda</option>                      
                                        <option value="Santander">Santander</option>                      
                                        <option value="Sucre">Sucre</option>                      
                                        <option value="Tolima">Tolima</option>                      
                                        <option value="Valle del Cauca">Valle del Cauca</option>                      
                                        <option value="Vaup??s">Vaup??s</option>                      
                                        <option value="Vichada">Vichada</option>                      
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Ciudad</label>
                                    <select ref={ciudadRef} className="form-select selector" name="selector">
                                    <option value="DEFAULT" selected>Seleccionar...</option>
                                    <option value="Leticia">Leticia</option>
                                    <option value="Medell??n">Medell??n</option>
                                    <option value="Arauca">Arauca</option>
                                    <option value="Barranquilla">Barranquilla</option>
                                    <option value="Cartagena de Indias">Cartagena de Indias</option>
                                    <option value="Tunja">Tunja</option>
                                    <option value="Manizales">Manizales</option>
                                    <option value="Florencia">Florencia</option>
                                    <option value="Yopal">Yopal</option>
                                    <option value="Popay??n">Popay??n</option>
                                    <option value="Valledupar">Valledupar</option>
                                    <option value="Quibd??">Quibd??</option>
                                    <option value="Monter??a">Monter??a</option>
                                    <option value="Bogot??">Bogot??</option>
                                    <option value="In??rida">In??rida</option>
                                    <option value="San Jos?? del Guaviare">San Jos?? del Guaviare</option>
                                    <option value="Neiva">Neiva</option>
                                    <option value="Rioacha">Riohacha</option>
                                    <option value="Santa Marta">Santa Marta</option>
                                    <option value="Villavicencio">Villavicencio</option>
                                    <option value="San Juan de Pasto">San Juan de Pasto</option>
                                    <option value="San Jos?? de C??cuta">San Jos?? de C??cuta</option>
                                    <option value="Mocoa">Mocoa</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Pereira">Pereira</option>
                                    <option value="Bucaramanga">Bucaramanga</option>
                                    <option value="Sincelejo">Sincelejo</option>
                                    <option value="Ibagu??">Ibagu??</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Mit??">Mit??</option>
                                    <option value="Puerto Carre??o">Puerto Carre??o</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Direcci??n</label>
                                    <input ref={direccionRef} type="text" className="form-control" placeholder="Direcci??n" />
                                </div>
                                
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Alto</label>
                                    <input ref={altoRef} type="number" className="form-control" placeholder="cm" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Ancho</label>
                                    <input ref={anchoRef} type="number" className="form-control" placeholder="cm" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Largo</label>
                                    <input ref={largoRef} type= "number" className="form-control" placeholder="cm" />
                                </div>
                                
                                
                                <h3>Datos del receptor</h3>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Departamento</label>
                                    <select ref={departamentoentregaRef} className="form-select selector" name="selector">
                                        <option value="DEFAULT" selected>Seleccionar...</option>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="Antioquia">Antioquia</option>
                                        <option value="Arauca">Arauca</option>
                                        <option value="Atl??ntico">Atl??ntico</option>                                           
                                        <option value="Bol??var">Bol??var</option>                      
                                        <option value="Boyac??">Boyac??</option>                      
                                        <option value="Caldas">Caldas</option>
                                        <option value="Caquet??">Caquet??</option>                      
                                        <option value="Cauca">Cauca</option>
                                        <option value="Cesar">Cesar</option>                      
                                        <option value="Choc??">Choc??</option>                     
                                        <option value="C??rdoba">C??rdoba</option>                      
                                        <option value="Cundinamarca">Cundinamarca</option>                      
                                        <option value="Guain??a">Guain??a</option>                      
                                        <option value="Guaviare">Guaviare</option>                      
                                        <option value="Huila">Huila</option>                      
                                        <option value="La Guajira">La Guajira</option>                      
                                        <option value="Magdalena">Magdalena</option>                      
                                        <option value="Meta">Meta</option>
                                        <option value="Narri??o">Nari??o</option>                      
                                        <option value="Norte de Santander">Norte de Santander</option>
                                        <option value="Putumayo">Putumayo</option>                      
                                        <option value="Quind??o">Quind??o</option>                     
                                        <option value="Risaralda">Risaralda</option>                      
                                        <option value="Santander">Santander</option>                      
                                        <option value="Sucre">Sucre</option>                      
                                        <option value="Tolima">Tolima</option>                      
                                        <option value="Valle del Cauca">Valle del Cauca</option>                      
                                        <option value="Vaup??s">Vaup??s</option>                      
                                        <option value="Vichada">Vichada</option>  
                                    </select>
                                    </div>
                                    
                                <div className="col-md-6">
                                    <label className="form- labelenvio">N??mero de documento</label>
                                    <input ref={documentoentregaRef} type="number" name="doc" className="form-control" placeholder="N??mero de documento" id="doc" required minLength="6" />
                                </div>
                            
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Ciudad</label>
                                    <select ref={ciudadentregaRef} className="form-select selector" name="selector">
                                    <option value="DEFAULT" selected>Seleccionar...</option>
                                    <option value="Leticia">Leticia</option>
                                    <option value="Medell??n">Medell??n</option>
                                    <option value="Arauca">Arauca</option>
                                    <option value="Barranquilla">Barranquilla</option>
                                    <option value="Cartagena de Indias">Cartagena de Indias</option>
                                    <option value="Tunja">Tunja</option>
                                    <option value="Manizales">Manizales</option>
                                    <option value="Florencia">Florencia</option>
                                    <option value="Yopal">Yopal</option>
                                    <option value="Popay??n">Popay??n</option>
                                    <option value="Valledupar">Valledupar</option>
                                    <option value="Quibd??">Quibd??</option>
                                    <option value="Monter??a">Monter??a</option>
                                    <option value="Bogot??">Bogot??</option>
                                    <option value="In??rida">In??rida</option>
                                    <option value="San Jos?? del Guaviare">San Jos?? del Guaviare</option>
                                    <option value="Neiva">Neiva</option>
                                    <option value="Rioacha">Riohacha</option>
                                    <option value="Santa Marta">Santa Marta</option>
                                    <option value="Villavicencio">Villavicencio</option>
                                    <option value="San Juan de Pasto">San Juan de Pasto</option>
                                    <option value="San Jos?? de C??cuta">San Jos?? de C??cuta</option>
                                    <option value="Mocoa">Mocoa</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Pereira">Pereira</option>
                                    <option value="Bucaramanga">Bucaramanga</option>
                                    <option value="Sincelejo">Sincelejo</option>
                                    <option value="Ibagu??">Ibagu??</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Mit??">Mit??</option>
                                    <option value="Puerto Carre??o">Puerto Carre??o</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Nombre Completo</label>
                                    <input ref={nombreentregaRef} type="text" className="form-control" placeholder="Nombre Completo" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- labelenvio">Direcci??n</label>
                                    <input ref={direccionentregaRef} type="text" className="form-control" placeholder="Direcci??n" />
                                </div>
                                
                            
                            <div className="botonenvio">
                                    <button type="button" className="btn btn-primary" onClick={envio}>Enviar</button>
                                </div>
                            </form>
                                 
                        </div>
                    </div>
                </Fragment>
            )
        }else {
            return (<Navigate to="/" />)
        }
    }
    return retornar()
}




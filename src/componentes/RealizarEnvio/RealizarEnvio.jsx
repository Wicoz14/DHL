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
        const departamento = departamentoRef.current.checked;
        const ciudad = ciudadRef.current.value;
        const direccion = direccionRef.current.value;
        const departamentoentrega = departamentoentregaRef.current.checked;
        const ciudadentrega = ciudadentregaRef.current.value;
        const direccionentrega = direccionentregaRef.current.value;
        const nombreentrega = nombreentregaRef.current.checked;
        const documentoentrega = documentoentregaRef.current.value;

        console.log("lia")
        if (await validar(fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega)) {
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
                                <h2 className="text-center">Envío de Paquetes</h2>
                                <h3>Datos del solicitante</h3>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Día a recoger paquete</label>
                                    <input ref={fecharecogidaRef} type="date" className="form-control" placeholder="fecha recogida" required />
                                </div>

                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Departamento</label>
                                    <select ref={departamentoRef} className="form-select selector" name="selector">
                                        <option selected>Seleccionar...</option>
                                        <option value="Ama">Amazonas</option>
                                        <option value="Ant">Antioquia</option>
                                        <option value="Ara">Arauca</option>
                                        <option value="Atl">Atlántico</option>                      
                                        <option value="Bog">Bogotá</option>                      
                                        <option value="Bol">Bolívar</option>                      
                                        <option value="Boy">Boyacá</option>                      
                                        <option value="Cal">Caldas</option>
                                        <option value="Caq">Caquetá</option>                      
                                        <option value="Cau">Cauca</option>
                                        <option value="Ces">Cesar</option>                      
                                        <option value="Cho">Chocó</option>                     
                                        <option value="Cor">Córdoba</option>                      
                                        <option value="Cun">Cundinamarca</option>                      
                                        <option value="Gia">Guainía</option>                      
                                        <option value="Gre">Guaviare</option>                      
                                        <option value="Hui">Huila</option>                      
                                        <option value="Gra">La Guajira</option>                      
                                        <option value="Mag">Magdalena</option>                      
                                        <option value="Met">Meta</option>
                                        <option value="Nar">Nariño</option>                      
                                        <option value="NSr">Norte de Santander</option>
                                        <option value="Put">Putumayo</option>                      
                                        <option value="Qui">Quindío</option>                     
                                        <option value="Ris">Risaralda</option>                      
                                        <option value="San">Santander</option>                      
                                        <option value="Suc">Sucre</option>                      
                                        <option value="Tol">Tolima</option>                      
                                        <option value="VCa">Valle del Cauca</option>                      
                                        <option value="Vau">Vaupés</option>                      
                                        <option value="Vic">Vichada</option>                      
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Ciudad</label>
                                    <select ref={ciudadRef} className="form-select selector" name="selector">
                                    <option selected>Seleccionar...</option>
                                    <option value="Let">Leticia</option>
                                    <option value="Med">Medellín</option>
                                    <option value="Ara">Arauca</option>
                                    <option value="Baq">Barranquilla</option>
                                    <option value="Car">Cartagena de Indias</option>
                                    <option value="Tun">Tunja</option>
                                    <option value="Man">Manizales</option>
                                    <option value="Flo">Florencia</option>
                                    <option value="Yop">Yopal</option>
                                    <option value="Pop">Popayán</option>
                                    <option value="Val">Valledupar</option>
                                    <option value="Qui">Quibdó</option>
                                    <option value="Mon">Montería</option>
                                    <option value="Bog">Bogotá</option>
                                    <option value="Ind">Inírida</option>
                                    <option value="SJG">San José del Guaviare</option>
                                    <option value="Nei">Neiva</option>
                                    <option value="Rio">Riohacha</option>
                                    <option value="SMa">Santa Marta</option>
                                    <option value="Vil">Villavicencio</option>
                                    <option value="SJP">San Juan de Pasto</option>
                                    <option value="SJC">San José de Cúcuta</option>
                                    <option value="Moc">Mocoa</option>
                                    <option value="Arm">Armenia</option>
                                    <option value="Per">Pereira</option>
                                    <option value="Buc">Bucaramanga</option>
                                    <option value="Sin">Sincelejo</option>
                                    <option value="Iba">Ibagué</option>
                                    <option value="Cal">Cali</option>
                                    <option value="Mit">Mitú</option>
                                    <option value="PCr">Puerto Carreño"</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Dirección</label>
                                    <input ref={direccionRef} type="text" className="form-control" placeholder="Dirección" />
                                </div>
                                
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Alto</label>
                                    <input ref={altoRef} type="number" className="form-control" placeholder="cm" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Ancho</label>
                                    <input ref={anchoRef} type="number" className="form-control" placeholder="cm" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Largo</label>
                                    <input ref={largoRef} type="number" className="form-control" placeholder="cm" />
                                </div>
                                
                                
                                <h3>Datos del receptor</h3>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Departamento</label>
                                    <select ref={departamentoentregaRef} className="form-select selector" name="selector">
                                        <option selected>Seleccionar...</option>
                                        <option value="Ama">Amazonas</option>
                                        <option value="Ant">Antioquia</option>
                                        <option value="Ara">Arauca</option>
                                        <option value="Atl">Atlántico</option>                      
                                        <option value="Bog">Bogotá</option>                      
                                        <option value="Bol">Bolívar</option>                      
                                        <option value="Boy">Boyacá</option>                      
                                        <option value="Cal">Caldas</option>
                                        <option value="Caq">Caquetá</option>                      
                                        <option value="Cau">Cauca</option>
                                        <option value="Ces">Cesar</option>                      
                                        <option value="Cho">Chocó</option>                     
                                        <option value="Cor">Córdoba</option>                      
                                        <option value="Cun">Cundinamarca</option>                      
                                        <option value="Gia">Guainía</option>                      
                                        <option value="Gre">Guaviare</option>                      
                                        <option value="Hui">Huila</option>                      
                                        <option value="Gra">La Guajira</option>                      
                                        <option value="Mag">Magdalena</option>                      
                                        <option value="Met">Meta</option>
                                        <option value="Nar">Nariño</option>                      
                                        <option value="NSr">Norte de Santander</option>
                                        <option value="Put">Putumayo</option>                      
                                        <option value="Qui">Quindío</option>                     
                                        <option value="Ris">Risaralda</option>                      
                                        <option value="San">Santander</option>                      
                                        <option value="Suc">Sucre</option>                      
                                        <option value="Tol">Tolima</option>                      
                                        <option value="VCa">Valle del Cauca</option>                      
                                        <option value="Vau">Vaupés</option>                      
                                        <option value="Vic">Vichada</option> 
                                    </select>
                                    </div>
                                    
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Número de documento</label>
                                    <input ref={documentoentregaRef} type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" />
                                </div>
                            
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Ciudad</label>
                                    <select ref={ciudadentregaRef} className="form-select selector" name="selector">
                                    <option selected>Seleccionar...</option>
                                    <option value="Let">Leticia</option>
                                    <option value="Med">Medellín</option>
                                    <option value="Ara">Arauca</option>
                                    <option value="Baq">Barranquilla</option>
                                    <option value="Car">Cartagena de Indias</option>
                                    <option value="Tun">Tunja</option>
                                    <option value="Man">Manizales</option>
                                    <option value="Flo">Florencia</option>
                                    <option value="Yop">Yopal</option>
                                    <option value="Pop">Popayán</option>
                                    <option value="Val">Valledupar</option>
                                    <option value="Qui">Quibdó</option>
                                    <option value="Mon">Montería</option>
                                    <option value="Bog">Bogotá</option>
                                    <option value="Ind">Inírida</option>
                                    <option value="SJG">San José del Guaviare</option>
                                    <option value="Nei">Neiva</option>
                                    <option value="Rio">Riohacha</option>
                                    <option value="SMa">Santa Marta</option>
                                    <option value="Vil">Villavicencio</option>
                                    <option value="SJP">San Juan de Pasto</option>
                                    <option value="SJC">San José de Cúcuta</option>
                                    <option value="Moc">Mocoa</option>
                                    <option value="Arm">Armenia</option>
                                    <option value="Per">Pereira</option>
                                    <option value="Buc">Bucaramanga</option>
                                    <option value="Sin">Sincelejo</option>
                                    <option value="Iba">Ibagué</option>
                                    <option value="Cal">Cali</option>
                                    <option value="Mit">Mitú</option>
                                    <option value="PCr">Puerto Carreño"</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Nombre Completo</label>
                                    <input ref={nombreentregaRef} type="text" className="form-control" placeholder="Nombre Completo" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form- label enviolabel">Dirección</label>
                                    <input ref={direccionentregaRef} type="text" className="form-control" placeholder="Dirección" />
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




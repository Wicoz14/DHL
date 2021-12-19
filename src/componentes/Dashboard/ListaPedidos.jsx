import React, {Fragment, useState} from "react";
import "./ListaPedidos.css"



function ListaPedidos({listas}){
    
    let listas2 = [{Id: "1", tipo:"normal",Dia:12, Direccion:"calle 21", EntegreA:"carlos", Estado:"pendiente",Mensajero:"alfred"},
   {Id: "2", tipo:"Urgente",Dia:12, Direccion:"calle 21", EntegreA:"carlos", Estado:"pendiente",Mensajero:"alfred"}
    ] 

    const[marcado,setMarcado]=useState(1)
    const CambioRadio = (event) =>{
        setMarcado(event.target.value);

    }
    return (<Fragment>
        
        <div className="contenedor">
        

        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link " >Externo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " >Mensajero</a>
                    </li>
                </ul>
               {/*  (imagen) Usuario */}
            </div>
        </div> 
        </div>
    
        <div className="table-responsive">
        <table className="table table-bordered ">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dia</th>
            <th scope="col">Dirección</th>
            <th scope="col">Entregar a</th>
            <th scope="col">Estado</th>
            <th scope="col">Mensajero</th>
            </tr>
        </thead>
        <tbody>
           
        {listas2.map((lista)=> {
           return( 
           <Fragment> 
            <tr>
            <th scope="col"> <input   type="radio" value={lista.Id} checked={marcado === lista.Id ? true: false} onChange={CambioRadio}/></th>
            <th scope="row">{lista.Id}</th>
            <td>{lista.tipo}</td>
            <td>{lista.Dia}</td>
            <td>{lista.Direccion}</td>
            <td>{lista.EntegreA}</td>
            <td>{lista.Estado}</td>
            <td>X</td>
            </tr> 

            </Fragment>
           )  
        })} 
        </tbody>
    </table>   
    </div>
    </Fragment>
    )

}
/*       <table class="table table-bordered ">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dia</th>
            <th scope="col">Dirección</th>
            <th scope="col">Entregar a</th>
            <th scope="col">Estado</th>
            <th scope="col">Mensajero</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            </tr>
            
        </tbody>
    </table> 
    
 */

export default ListaPedidos
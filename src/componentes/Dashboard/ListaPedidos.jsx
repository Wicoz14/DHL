import React, {Fragment, useState} from "react";
/* import {table} from "react-bootstrap"
 */
function ListaPedidos({listas}){

    const[marcado,setMarcado]=useState(1)
    const CambioRadio = (event) =>{
        setMarcado(event.target.value);

    }
    return (<Fragment>
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
        {listas.map((lista)=> {
           return( 
           <Fragment> 
            <tr>
            <th scope="col"> <input   type="radio" value={lista.Id} checked={marcado == lista.Id ? true: false} onChange={CambioRadio}/></th>
            <th scope="row">{lista.Id}</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            </tr>

            </Fragment>
           )
          
        })} 
        </tbody>
    </table> 
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
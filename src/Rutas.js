import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './componentes/Login/Login.jsx';
import { Registro } from './componentes/Registro/Registro.jsx';
import { Contactanos } from './componentes/Contactanos/Contactanos.jsx';
import { Servicios } from './componentes/Servicios/Servicios.jsx';
import RealizarEnvio from './componentes/RealizarEnvio/RealizarEnvio.jsx';
import { UsuarioExterno } from './componentes/UsuarioExterno/UsuarioExterno.jsx';
import { UsuarioMensajeria } from './componentes/UsuarioMensajeria/UsuarioMensajeria.jsx';
import { Solicitudes } from './componentes/Solicitudes/Solicitudes.jsx';
import { EstadoEnvio } from './componentes/EstadoEnvio/EstadoEnvio.jsx';
import { Reportes } from './componentes/Reportes/Reportes.jsx';
import { UMisEnvios } from './componentes/UMisEnvios/UMisEnvios.jsx';
import { Perfil } from './componentes/Perfil/Perfil.jsx';
import Usuario from "./componentes/Usuario/Usuario.jsx"
import { RegistroMensajero } from './componentes/RegistroMensajero/RegistroMensajero.jsx';
import Dashboard from './componentes/Dashboard/Dashboard.jsx';
import ListaPedidos from './componentes/Dashboard/ListaPedidos.jsx' 
/* import Pedidos from './componentes/Dashboard/Pedidos.jsx' */
import Pedidos from './componentes/Dashboard/Pedidos.jsx'
import { RecuperarContrasena } from './componentes/RecuperarContrasena/RecuperarContrasena.jsx';

export function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/realizarenvio" element={<RealizarEnvio />} />
            <Route path="/usuarioexterno" element={<UsuarioExterno />} />
            <Route path="/umisenvios" element={<UMisEnvios />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/dashboard/usuario" element={ <Usuario/>}/>
            <Route path="/dashboard/registro-mensajero" element={<RegistroMensajero/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/lista-pedidos" element={ <ListaPedidos/>}/>
            <Route path="/usuariomensajeria" element={ <UsuarioMensajeria/>}/>
            <Route path="/solicitudes" element={ <Solicitudes/>}/>
            <Route path="/estadoenvio" element={ <EstadoEnvio/>}/>
            <Route path="/reportes" element={ <Reportes/>}/>
            <Route path="/recuperarcontrasena" element={ <RecuperarContrasena/>}/>
        </Routes>
    )
}
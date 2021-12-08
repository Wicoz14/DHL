import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './componentes/Login/Login.jsx';
import { Registro } from './componentes/Registro/Registro.jsx';
import { Contactanos } from './componentes/Contactanos/Contactanos.jsx';
import { Servicios } from './componentes/Servicios/Servicios.jsx';
import RealizarEnvio from './componentes/RealizarEnvio/RealizarEnvio.jsx';
import { UsuarioExterno } from './componentes/UsuarioExterno/UsuarioExterno.jsx';
import { UMisEnvios } from './componentes/UMisEnvios/UMisEnvios.jsx';
import { Perfil } from './componentes/Perfil/Perfil.jsx';

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
        </Routes>
    )
}
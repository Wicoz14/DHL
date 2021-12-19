function validaractualizacion(nombres, apellidos, correo){
    
    let sw = true

    if (nombres.length < 3) {
        alert("Escriba sus nombres completo")
        sw = false
    }
        
    if (apellidos.length < 5) {
        alert("Escriba sus apellidos correctamente")
        sw = false
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        alert("Escriba un correo válido")
        sw = false
    }

    if (sw){
        return true;
    }else{
        return false;
    }
};

async function perfil(){
    const token = localStorage.getItem("token")
    const response = await fetch(`http://localhost:8080/perfil/mostrarperfil`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify()
    })
    return response.json();
};


async function actualizarusuario(nombres, apellidos, correo){
    const perfil = {nombres, apellidos,correo};
    //console.log(perfil);
    const token = localStorage.getItem("token")
    const response = await fetch(`http://localhost:8080/perfil/modificarperfil`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(perfil)
    })
    return response.json();
};

export {validaractualizacion,perfil,actualizarusuario};
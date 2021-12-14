async function login(usuario,contraseña){
    const response = await  fetch(`http://localhost:8080/usuario/login`,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify({usuario, contraseña})
    });
    return response.json();
};

async function recuperar(correo){
    const response = await fetch(`http://localhost:8080/usuario/recuperarcontrasena`,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify({correo})
    });
    return response.json();
};

function validar(usuario,contraseña){
    let sw = true

    if (usuario.length < 5) {
        alert("El usuario debe tener 5 caracteres o más")
        sw = false
    }

    if (contraseña.length < 6) {
        alert("la contraseña debe tener al menos 6 caracteres")
        sw = false
    }
    if (sw){
        return true;
    }else{
        return false;
    }
};

function validarCorreo(correo){
    let sw = true

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        alert("Escriba un correo válido")
        sw = false
    }

    return sw;
};

export {login,recuperar,validar,validarCorreo};
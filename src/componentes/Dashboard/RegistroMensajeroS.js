function validar(nombres, apellidos, numerodocumento, correo, usuario, contraseña, confirmarcontraseña,chequeado){
    
    let sw = true

    if (nombres.length < 6) {
        alert("Escriba sus nombres completo")
        sw = false
    }
        
    if (apellidos.length < 7) {
        alert("Escriba sus apellidos correctamente")
        sw = false
    }

    if (numerodocumento.length < 6) {
        alert("Escriba su documento completo")
        sw = false
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(correo)) {
        alert("Escriba un correo válido")
        sw = false
    }

    if (usuario.length < 5) {
        alert("Escriba un usuario con 5 caracteres o más")
        sw = false
    }

    if (contraseña.length < 6) {
        alert("la contraseña debe tener al menos 6 caracteres")
        sw = false
    }

    if (contraseña !== confirmarcontraseña){
        alert("los contraseñas inscritas son distintas en ambos campos")
        sw= false
    }

    if (chequeado!== true){
        alert("Debe aceptar el check de tratamiento de datos")
        sw= false
    }

    if (sw){
        return true;
    }else{
        return false;
    }
};

function registrar(nombres, apellidos, documento, numerodocumento, correo, usuario, contraseña){
    const registro = {nombres, apellidos, documento, numerodocumento, correo, usuario, contraseña};
    console.log(registro);
    fetch(``,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify(registro)
    }).then( data => data.json()).then(data => {
        alert("Registrado exitosamente")
    })
};

export {validar,registrar};
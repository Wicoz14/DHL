function validacionRecuperar(contraseña,confirmarcontraseña){
    let sw = true

    if (contraseña.length < 6) {
        alert("la contraseña debe tener al menos 6 caracteres")
        sw = false
    }

    if (contraseña !== confirmarcontraseña){
        alert("los contraseñas inscritas son distintas en ambos campos")
        sw= false
    }

    if (sw){
        return true;
    }else{
        return false;
    }
}

async function recuperarC(contraseña){
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/usuario/nuevacontrasena`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify({contraseña})
    })
    return response.json();
};

export {validacionRecuperar,recuperarC};
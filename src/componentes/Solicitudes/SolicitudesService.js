async function listarSolicitudes(){
    const token = localStorage.getItem("token");
    const response = await  fetch(`https://dhl-colombia.herokuapp.com/usuariomensajeria/solicitudes`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify()
    });
    return response.json();
};

async function encargar(_id,encargado){
    const token = localStorage.getItem("token");
    const envio ={_id,encargado};
    console.log(envio)
    const response = await  fetch(`https://dhl-colombia.herokuapp.com/usuariomensajeria/asignar`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(envio)
    });
    return response.json();
};

function validarsolicitud(encargado){
    let sw = true

    if (encargado.length < 3) {
        alert("Debe tener al menos tres caracteres")
        sw = false
    }

    if (encargado==="") {
        alert("Escriba la asignación, no puede ir vacía")
        sw = false
    }
    if (sw){
        return true;
    }else{
        return false;
    }
}

export {listarSolicitudes, encargar, validarsolicitud}
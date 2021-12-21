function validar(fecharecogida,alto,ancho,largo,direccion,direccionentrega,nombreentrega,documentoentrega,departamento,departamentoentrega,ciudad,ciudadentrega){
    var hoy = new Date();
    let sw = true
     if (hoy<fecharecogida) {
        alert("Escriba una fecha valida")
        sw = false
    }
    if (nombreentrega.length < 3) {
        alert("Escriba su nombre completo")
        sw = false
    }
    if (documentoentrega.length < 6) {
        alert("Ingrese número documento valido")
        sw = false
    }
    if (alto.length > 3) {
        alert("El alto del paquete no debe ser mayor a 100cm")
        sw = false
    }
    if (ancho.length > 3) {
        alert("El alto del paquete no debe ser mayor a 100cm")
        sw = false
    }
    if (largo.length > 3) {
        alert("El alto del paquete no debe ser mayor a 100cm")
        sw = false
    }
    if (direccion.length < 5) {
        alert("Ingrese una dirección valida")
        sw = false
    }
    if (direccionentrega.length < 5) {
        alert("Ingrese una dirección valida")
        sw = false
    }
    if (departamento==="DEFAULT") {
        alert("Seleccione un departamento")
        sw = false
    }
    if (departamentoentrega==="DEFAULT") {
        alert("Seleccione un departamento de entrega")
        sw = false
    }
    if (ciudad==="DEFAULT") {
        alert("Seleccione una ciudad")
        sw = false
    }
    if (ciudadentrega==="DEFAULT") {
        alert("Seleccione una ciudad de entrega")
        sw = false
    }


    if (sw){
        return true;
    }else{
        return false;
    }
};


async function realizarenvio(fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega){
    const nuevoenvio = {fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega,"asignado":false,"estado":""};
    console.log(nuevoenvio)
    const token = localStorage.getItem("token")
    const response = await fetch(`https://dhl-colombia.herokuapp.com/envios/registrarenvio`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(nuevoenvio)
    })
    return response.json();
};


export {validar,realizarenvio};
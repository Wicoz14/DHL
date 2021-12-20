function validar(fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega){
    var hoy = new Date();
    let sw = true
    /* if (hoy<fecharecogida) {
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
    if (departamento.length < 3) {
        alert("Escriba su documento completo")
        sw = false
    }
    if (departamentoentrega.length < 3) {
        alert("Seleccione un departamento")
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

    if (direccion.length < 6) {
        alert("Ingrese una dirección valida")
        sw = false
    }
    if (direccionentrega.length < 6) {
        alert("Ingrese una dirección valida")
        sw = false
    }
    if (ciudad.length < 3) {
        alert("Seleccione una ciudad")
        sw = false
    }
    if (ciudadentrega.length < 3) {
        alert("Seleccione una ciudad")
        sw = false
    } */
  

    if (sw){
        return true;
    }else{
        return true;
    }
};


async function realizarenvio(fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega){
    const nuevoenvio = {fecharecogida,alto,ancho,largo,departamento,ciudad,direccion,departamentoentrega,ciudadentrega,direccionentrega,nombreentrega,documentoentrega};
    const token = localStorage.getItem("token")
    const response = await fetch(`http://localhost:8080/envios/registrarenvio`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(nuevoenvio)
    })
    return response.json();
};


export {validar,realizarenvio};
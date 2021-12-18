async function actualizarenvios(id, fechaenvio, enviadoa, rastreo, accion){
    const misenvios = {id, fechaenvio, enviadoa, rastreo, accion};
    console.log(misenvios);
    const response = await fetch(`http://localhost:8080/usuario/misenvios`,{
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify(misenvios)
    })
    return response.json();
};

export {actualizarenvios};
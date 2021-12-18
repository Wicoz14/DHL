async function listarEstados(){
    const token = localStorage.getItem("token");
    const response = await  fetch(`http://localhost:8080/usuariomensajeria/estados`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify()
    });
    return response.json();
};

async function modificar(_id, caracteristicasfinales,comentarios,fechaentrega,estadoenvio){
    const token = localStorage.getItem("token");
    const registro = {_id,caracteristicasfinales,comentarios,fechaentrega,estadoenvio};
    console.log(registro);
    const response = await fetch(`http://localhost:8080/usuariomensajeria/modificarestados`,{
        method: "POST", 
        headers:{"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(registro)
    })
    return response.json();
};

export {listarEstados, modificar}
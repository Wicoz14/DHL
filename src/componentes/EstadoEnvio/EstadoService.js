async function listarEstados(){
    const token = localStorage.getItem("token");
    const response = await  fetch(`https://dhl-colombia.herokuapp.com/usuariomensajeria/estados`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify()
    });
    return response.json();
};

async function modificar(_id, caracteristicasfinales,comentarios,fechaentrega,estadoenvio){
    const token = localStorage.getItem("token");
    const registro = {_id,caracteristicasfinales,comentarios,fechaentrega,estadoenvio};
    const response = await fetch(`https://dhl-colombia.herokuapp.com/usuariomensajeria/modificarestados`,{
        method: "POST", 
        headers:{"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(registro)
    })
    return response.json();
};

export {listarEstados, modificar}
async function listarSolicitudes(){
    const token = localStorage.getItem("token");
    const response = await  fetch(`http://localhost:8080/usuariomensajeria/solicitudes`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify()
    });
    return response.json();
};

export {listarSolicitudes}
async function traerReporte(estado,fecha,ciudad){
    const valor ={estado,fecha,ciudad};
    console.log(valor);
    const token = localStorage.getItem("token");
    const response = await  fetch(`https://dhl-colombia.herokuapp.com/usuariomensajeria/reportes`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
        body: JSON.stringify(valor)
    });
    return response.json();
};



export {traerReporte}
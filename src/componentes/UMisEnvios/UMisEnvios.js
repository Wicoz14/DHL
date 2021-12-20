async function listarmisenvios(){
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/envios/misenvios`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
    })
    return response.json();
};

export {listarmisenvios};
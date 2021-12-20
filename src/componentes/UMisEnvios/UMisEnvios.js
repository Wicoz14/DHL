async function listarmisenvios(){
    const token = localStorage.getItem("token");
    const response = await fetch(`https://dhl-colombia.herokuapp.com/envios/misenvios`,{
        method: "POST", 
        headers: {"content-type":"application/json", "authorization": `Bearer ${token}`},
    })
    return response.json();
};

export {listarmisenvios};
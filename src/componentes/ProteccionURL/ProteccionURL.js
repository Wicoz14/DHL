import jwtDecode from "jwt-decode";

export function ProteccionURL() {
    let resp = 0;
    try {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            const payload = jwtDecode(token);
            if (payload.usuario) {
                if (payload.rol === "usuarioexterno") {
                    resp = 1;
                }
                else if (payload.rol === "usuariomensajeria") {
                    resp = 2;
                }
                else if (payload.rol === "admi") {
                    resp = 3;
                }
            }else{
                resp = 0;
            }
        }
    } catch (error) {

    }
    return resp;
}
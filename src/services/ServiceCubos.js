import Global from "@/Global";

export default class ServiceCubos {

    async getMarcas(){
        let url = Global.urlApi + "api/cubos/marcas";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getCubos(){
        let url = Global.urlApi + "api/cubos";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getCubosMarca(marca){
        let url = Global.urlApi + "api/Cubos/CubosMarca/" + marca;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getCubo(id){
        let url = Global.urlApi + "api/cubos/" + id;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getComentarios(id){
        let url = Global.urlApi + "api/comentarioscubo/getcomentarioscubo/" + id;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async login(email, password) {
        let url = Global.urlApi + "api/Manage/Login";
        let body = { "email": email, "password": password };

        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await response.json();
        return data;
    }

    async getPerfil(){
        let url = Global.urlApi + "api/manage/perfilusuario";
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        let data = await response.json();
        return data;
    }

    async getCompras(){
        let url = Global.urlApi + "api/compra/comprasusuario";
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        let data = await response.json();
        return data;
    }

    async hacerPedido(idCubo){
        let url = Global.urlApi + "api/compra/insertarpedido/" + idCubo;
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        // let data = await response.json();
        return response;
    }

}

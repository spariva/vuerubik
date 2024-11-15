<template>
    <div class="w-75 mx-auto">
        <form v-on:submit.prevent="login()">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" name="email" v-model="email">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" name="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Conectarse</button>
        </form>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "LoginComponent",
    data() {
        return {
            email: "",
            password: "",
            token: ""
        }
    },
    methods: {
        login() {
            service.login(this.email, this.password).then(response => {
                this.token = response.response;
                console.log(response.response);
                if (this.token) {
                    localStorage.setItem("token", this.token);
                    console.log("local: " + localStorage.getItem("token"));
                    this.$router.push("/perfil");
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
            })
        }
    }
}
</script>

<style></style>
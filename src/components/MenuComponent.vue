<template>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Rubik 🐲</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Marcas
                            </a>
                            <ul class="dropdown-menu" >
                                <li v-for="marca in marcas" :key="marca"><router-link class="dropdown-item" :to="'/cubos/' + marca">{{ marca }}</router-link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Seguridad
                            </a>
                            <ul class="dropdown-menu">
                                <li v-if="!token"><router-link class="dropdown-item" to="/login">Iniciar sesión</router-link></li>
                                <li v-if="token"><button class="dropdown-item" @click="logOut()">Cerrar sesión</button></li>
                            </ul>
                        </li>

                        <li v-if="token" class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Usuario
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/perfil">Perfil</router-link></li>
                                <li><router-link class="dropdown-item" to="/compras">Compras</router-link></li>
                                <li><router-link class="dropdown-item" to="/pedido">Realizar Pedido</router-link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: 'MenuComponent',
    data() {
        return {
            marcas: [],
            token: localStorage.getItem('token')
        }
    },
    mounted() {
        service.getMarcas().then(response=>{
            this.marcas = response;
        })
    },
    methods: {
        logOut() {
            localStorage.removeItem('token');
            this.token = null;
            this.$router.push('/');
        }
    },

}
</script>

<style></style>
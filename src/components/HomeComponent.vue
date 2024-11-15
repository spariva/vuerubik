<template>
    <div>
        <h2>Home</h2>
        <div class="row">
            <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem;">
                <img :src="cubo.imagen" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ cubo.nombre }}</h5>
                    <p class="card-text">{{ cubo.precio }}</p>
                    <router-link class="btn btn-primary" :to="'/cubo/' + cubo.idCubo">Detalles</router-link>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: 'HomeComponent',
    data() {
        return {
            cubos: []
        }
    },
    methods: {
    },
    mounted() {
        service.getCubos().then(response=>{
            this.cubos = response;
        })
    }
}
</script>

<style></style>
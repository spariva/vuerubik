<template>
    <div>
        <h2>Marca {{ $route.params.marca }}</h2>
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
    name: "MarcaComponent",
    data() {
        return {
            cubos: [],
        }
    },
    mounted() {
        service.getCubosMarca(this.$route.params.marca).then(response => {
            this.cubos = response;
        })
    },
    watch: {
        '$route.params.marca': function (nextVal, oldVal) {
            if (nextVal != oldVal) {
                service.getCubosMarca(this.$route.params.marca).then(response => {
                    this.cubos = response;
                })
            }
        }
    }
}
</script>

<style></style>
<template>
    <div>
        <h2>{{ cubo.nombre }}</h2>
        <hr/>
        <div class="card w-50 mx-auto" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" :alt="cubo.nombre">
            <div class="card-body">
                <table class="table mx-auto">
                    <thead>
                        <tr>
                            <th>Marca y Modelo</th>
                            <th>Valoración</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ cubo.marca }}  {{ cubo.modelo }}</td>
                            <td>{{ cubo.valoracion }}</td>
                            <td>{{ cubo.precio }}</td>
                        </tr>
                    </tbody>
                </table>
                <router-link class="btn btn-warning" to="/">Volver</router-link>
            </div>
        </div>
        <div v-if="comentarios.length > 0">
            <h3>Comentarios</h3>
            <table class="table mx-auto">
                    <tbody>
                        <tr v-for="comentario in comentarios" :key="comentario">
                            <td>Usuario {{ comentario.idUsuario }}</td>
                            <td>{{ comentario.comentario }}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: 'DetailComponent',
    data() {
        return {
            cubo: {},
            comentarios: []
        }
    },
    mounted(){
        service.getCubo(this.$route.params.id).then(response => {
            this.cubo = response;
        })

        service.getComentarios(this.$route.params.id).then(response => {
            this.comentarios = response;
            console.log(response);
        })
    }
}
</script>

<style></style>
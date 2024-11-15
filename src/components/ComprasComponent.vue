<template>
    <div>
        <h2>compras</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Núm. Pedido</th>
                    <th>Id cubo</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="compra in compras" :key="compra">
                    <td>{{ compra.idPedido }}</td>
                    <td>{{ compra.idCubo }}</td>
                    <td>{{ compra.fechaPedido }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary m-3" to="/perfil">Volver al Perfil</router-link>
        <router-link class="btn btn-primary m-3" to="/pedido">Realizar Pedido</router-link>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "ComprasComponent",
    data() {
        return {
            compras: []
        }
    },
    mounted() {
        service.getCompras().then(response => {
            this.compras = response;
        })
    },
}
</script>

<style></style>
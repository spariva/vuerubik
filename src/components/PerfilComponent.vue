<template>
    <div>
        <h2>Mi Perfil: {{ usuario.nombre }} </h2>
        <table class="table mx-auto">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.email }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" to="/compras">Mostrar Compras</router-link>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: 'PerfilComponent',
    data() {
        return {
            usuario: {}
        }
    },
    mounted() {
        service.getPerfil().then(response => {
            this.usuario = response;
            console.log(response);
        })
    }
}
</script>

<style></style>
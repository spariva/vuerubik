<template>
  <h2>pedido</h2>
  <form v-on:submit.prevent="comprar()">
  <select class="form-control" v-model="id">
    <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo" >{{ cubo.nombre }}</option>
  </select>
  <button class="btn btn-primary">Comprar</button>
</form>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name:"PedidoComponent",
    data() {
        return {
            cubos: [],
            id: 0
        }
    },
    methods: {
      comprar(){
        console.log(this.id);
        service.hacerPedido(this.id).then(response=>{
          console.log(response);
          this.$router.push("/compras");
        })
      }
    },
    mounted() {
        service.getCubos().then(response=>{
            this.cubos = response;
        })
    }
}
</script>

<style>

</style>
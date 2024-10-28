<template>
  <div>
    <h1>Directivas Component</h1>

    <h1>
      <!-- EL SIMBOLO DEL DOLAR NOS PERMITE ACCEDER A ELEMENTOS EN FORMATO JSON -->
      {{ $data }}
    </h1>

    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <h2 v-if="numero > 0" style="color: green">POSITIVO</h2>
    <h2 v-else-if="numero < 0" style="color: red">NEGATIVO</h2>
    <h2 v-else style="color: black">CERO</h2>
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">
        {{ serie }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "The Boys", "Stranger Things", "Dark"],
      numero: 0,
      nombre: "Paco",
      edad: 25,
    };
  },
};
</script>

<style>
</style>
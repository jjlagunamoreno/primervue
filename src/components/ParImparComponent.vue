<template>
  <div>
    <h1>Par o Impar?</h1>
    <h3>
      <!-- EL SIMBOLO DEL DOLAR NOS PERMITE ACCEDER A ELEMENTOS EN FORMATO JSON -->
      {{ $data }}
    </h3>

    <!-- 3) Intentarlo con directivas. -->
    <label>Directivas</label>
    <input type="number" v-model="numero" />
    <h1 style="text-decoration: underline; color: black">
      Propiedad Conmutada
    </h1>
    <h2 v-if="numero % 2 === 0 && numero !== 0" style="color: green">PAR</h2>
    <h2 v-else-if="numero % 2 !== 0" style="color: red">IMPAR</h2>
    <h2 v-else style="color: BLACK">CERO</h2>

    <!-- 2) El mismo ejemplo en el mismo component, pero con un botón y método -->
    <hr />
    <h1 style="text-decoration: underline; color: black">
      Botón y Método
    </h1>
    <button @click="getParImpar()">Comprobar</button>
    <div v-html="html"></div>

    <!-- 1) Propiedad conmutada que nos devuelva un <h1> con colores si el número es par o es Impar -->
    <hr />
    <h1 style="text-decoration: underline; color: black">
      Propiedad Conmutada
    </h1>
    <h2 :style="{ color: paridad.color }">{{ paridad.texto }}</h2>
  </div>
</template>

<script>
export default {
  name: "ParImparComponent",
  data() {
    return {
      html: "",
      numero: 0,
    };
  },

  computed: {
    paridad() {
      if (this.numero === 0) {
        return { texto: "CERO", color: "black" };
      } else if (this.numero % 2 === 0) {
        return { texto: "PAR", color: "green" };
      } else {
        return { texto: "IMPAR", color: "red" };
      }
    },
  },

  methods: {
    getParImpar() {
      if (this.numero % 2 === 0 && this.numero !== 0) {
        this.html += "<h4 style='color:green'>PAR</h4>";
      } else if (this.numero % 2 !== 0) {
        this.html += "<h4 style='color:red'>IMPAR</h4>";
      } else {
        this.html += "<h4 style='color:black'>CERO</h4>";
      }
    },
  },
};
</script>

<style></style>
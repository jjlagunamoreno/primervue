<template>
  <div>
    <h1>CicloVida Component</h1>
    <button @click="cambiarSaludo">Cambiar Saludo</button>
    <h2>{{ saludo }}</h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data() {
    return {
      saludo: "Hoy es lunes...",
    };
  },
  methods: {
    //EN ESTA ZONA INCLUIREMOS NUESTROS METODOS PERSONALIZADOS
    cambiarSaludo() {
      //SE UTILIZA LA PALABRA CLAVE this PARA
      //LAMAR A LAS VARIABLES DE data()
      this.saludo = "Y mañana martes...";
    },
  },
  mounted() {
    console.log("Componente Montado");
  },
  unmounted() {
    console.log("Componente destruido");
  },
  updated() {
    console.log("Componente modificado");
  },
  created() {
    console.log("Componente Creado");
  },
};
</script>

<style>
</style>
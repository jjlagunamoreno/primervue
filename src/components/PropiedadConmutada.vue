<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <hr />
    <button @click="getJuegosAzules()">Juegos Azules</button>
    <div v-html="html"></div>
    <!-- <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul> -->
  </div>
</template>


<script>
export default {
  name: "PropiedadConmutada",
  methods: {
    getJuegosAzules() {
      //EL METODO NO DEVUELVE NADA, NECESITAMOS TENER UN DIBUJO
      for (var juego of this.juegos) {
        this.html += "<h4 style='color:blue'>" + juego + "</h4>";
      }
    },
  },
  computed: {
    //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES Y NO PUEDE RECIBIR PARÁMETROS
    juegosRojos() {
      //VAMOS A DEVOLVER TODOS LOS JUEGOS CON UN FORMATO DE COLOR ROJO
      var datos = this.juegos;
      //RECORREMOS CADA JUEGO Y MODIFICAMOS SU DIBUJO A COLOR ROJO
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  data() {
    return {
      html: "",
      juegos: ["minecraft", "canicas", "dnd", "lol", "teto"],
    };
  },
};
</script>
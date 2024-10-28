<template>
  <div>
    <h1>Métodos Filters</h1>
    <ul>
      <li v-for="num in numeros" :key="num">
        Numero: {{ num }}, Doble: {{ $filters.getNumeroDoble(num) }}
      </li>
      <li v-for="name in nombres" :key="name">
        {{ $filters.mayuscula(name) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodosFilters",
  data() {
    return {
      numeros: [2, 54, 3, 9, 15, 38],
      nombres: ["Adri", "JJ", "Manu", "Tomi", "Andrei"],
    };
  },
};
</script>
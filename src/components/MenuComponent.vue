<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home - </router-link>
      </li>
      <li>
        <router-link to="/cine">Cine - </router-link>
      </li>
      <li>
        <router-link to="/musica">Musica - </router-link>
      </li>
      <li>
        <router-link to="/ciclovida">CicloVida - </router-link>
      </li>
      <li>
        <router-link to="/directivas">Directivas - </router-link>
      </li>
      <li>
        <router-link to="/propiedadconmutada">PropiedadConmutada - </router-link>
      </li>
      <li>
        <router-link to="/parimpar">Par e Impar - </router-link>
      </li>
      <li>
        <router-link to="/metodosfilter">Metodos Filter</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>

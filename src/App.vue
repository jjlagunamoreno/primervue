<template>
  <div>
    <!-- <HolaMundo />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <HomeComponent />
    <MusicComponent />
    <CineComponent /> -->
    <MenuComponent />
    <h1 style="color: blue">TITULO ESTÁTICO</h1>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import HolaMundo from "./components/HolaMundo.vue";
// import HomeComponent from "./components/HomeComponent.vue";
// import MusicComponent from "./components/MusicComponent.vue";
// import CineComponent from "./components/CineComponent.vue";

export default {
  name: "App",
  components: {
    MenuComponent,
    // HelloWorld,
    // HolaMundo,
    // HomeComponent,
    // MusicComponent,
    // CineComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

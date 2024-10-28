import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicComponent from './components/MusicComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import ParImparComponent from './components/ParImparComponent.vue';

//
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicComponent
    },
    {
        path: "/ciclovida", component: CicloVida
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/propiedadconmutada", component: PropiedadConmutada
    },
    {
        path: "/parimpar", component: ParImparComponent
    }
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;

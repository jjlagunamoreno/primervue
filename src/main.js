import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

//COMENZAMOS SEPARANDO NUESTRA CREACCIÓN DE APLICACION EN UNA VARIABLE
var app = createApp(App)

app.config.globalProperties.$filters = {
    //CREAMOS DOS MÉTODOS QUE RECIBIRAN PARÁMETROS Y DEVOLVERAN UN CÓDIGO
    mayuscula(dato) {
        return dato.toUpperCase();
    },

    getNumeroDoble(numero){
        return numero*2;
    }
}
app.use(router).mount('#app')

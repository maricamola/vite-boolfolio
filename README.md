# Vue 3 + Vite

# Descrizione

Creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.

Colleghiamo questo progetto ad una repo separata. (laravel-api)

---

## TODO:

1. Nel terminale per creare il nuovo progetto vue;

**npm create vite@latest nome-cartella -- --template vue**

2. rientriamo nella cartella appena creata con cd nome-cartella

3. npm i

4. code . (apre il progetto direttamente in vs code)

5. Nel terminale: npm i sass

------------

## Aggiungere il router a Vue e inserire un menu di navigazione fra le pagine.

1. Installare il router dal terminale 

**npm install vue-router@4 --force**

2. Creiamo il file router.js 

3. Importiamo in questo file :

**import { createRouter,  createWebHistory } from "vue-router";**

4. Creiamo la vista quindi una cartella "pages" dentro src 

5. Aggiungiamo i componenti con import nel router e li passiamo come oggetto;

const router = createRouter({

    history: createWebHistory(),

    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },

        //Qui gli altri componenti
    ]
    })

6. In fondo alle rotte, aggiungiamo l'export

**export { router }**

7. Creato questo "pacchetto" lo importiamo nel main.js 

        import { createApp } from 'vue'
        import App from './App.vue';
        import { router } from "./router";
        
        createApp(App).use(router).mount('#app')

8. Ora in App.vue possiamo importarlo con questa direttiva

        <router-view></router-view>


----------------

## Gestiore errori 404

1. Aggiungiamo alla fine delle rotte, questo path 

        {
          path: '/:pathMatch(.*)*',
        }

2. Creiamo un componente 'Error404'

3. Importo il componente nel router.js 

4. Nel router, sotto il path inseriamo;

**component: Error404**

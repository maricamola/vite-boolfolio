import { createRouter , createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Error404 from './pages/Error404.vue'


const router = createRouter({

    history: createWebHistory(),

    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contacts
        },

        //Per gestire l'errore 404
        {
          path: '/:pathMatch(.*)*',
          component: Error404
        }
    ]
})

export { router }

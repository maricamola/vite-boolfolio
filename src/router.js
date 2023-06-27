import { createRouter , createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import Error404 from './pages/Error404.vue'


const router = createRouter({

    history: createWebHistory(),
    linkExactActiveClass: 'active',

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
        {
          path: '/chi-siamo',
          name: 'about',
          component: About
        },
        {
          path: '/blog',
          name: 'blog',
          component: Blog
        },

        //Per gestire l'errore 404
        {
          path: '/:pathMatch(.*)*',
          component: Error404
        }
    ]
})

export { router }

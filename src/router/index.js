import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParametersView from '../views/ParametersView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/parameters',
            name: 'parameters',
            component: () =>
                import ('@/views/ParametersView.vue')
        },
        {
            path: '/suggestions',
            name: 'suggestions',
            component: () =>
                import ('@/views/SuggestionsView.vue')
        },
        {
            path: '/solution',
            name: 'solution',
            component: () =>
                import ('@/views/SolutionsView.vue')
        }
    ],
    linkActiveClass: 'nr-active-page',
})

export default router
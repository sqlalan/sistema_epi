import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import MovimentacaoView from '../views/MovimentacaoView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    },
    {
      path: '/movimentacao',
      name: 'movimentacao',
      component: MovimentacaoView,
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: RelatoriosView,
    },
  ],
})

export default router

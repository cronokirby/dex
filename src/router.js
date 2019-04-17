import Vue from 'vue';
import Router from 'vue-router';
import PokemonView from './views/PokemonView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: PokemonView
    }
  ]
})

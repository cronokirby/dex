<template>
  <div id="pokemon-view">
    <transition name="slide-fade">
      <pokemon-card v-if="pokemon" v-bind:pokemon="pokemon"></pokemon-card>
    </transition>
    <div
      class="shadow-lg rounded mx-auto max-w-sm p-10 mt-8 text-red-darkest bg-white text-2xl"
      id="error-pane"
      v-if="error"
    >Couldn't fetch that pokémon :(</div>
    <div class="text-center" id="spinner">
      <pulse-loader class="mt-20" :loading="loading" color="red" size="30px"></pulse-loader>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import PokemonCard from "../components/PokemonCard.vue";
import Pokemon from "../pokemon";

export default {
  data() {
    return {
      loading: true,
      pokemon: null,
      error: null
    };
  },

  async created() {
    await this.fetch(this.$route.params.name);
  },

  async beforeRouteUpdate(to, from, next) {
    next();
    await this.fetch(to.params.name);
  },

  methods: {
    async fetch(name) {
      this.error = null;
      this.pokemon = null;
      this.loading = true;
      try {
        this.pokemon = await Pokemon.fromApi(name.toLowerCase());
      } catch (e) {
        this.error = e;
      }
      this.loading = false;
    }
  },

  components: {
    PokemonCard,
    PulseLoader
  }
};
</script>
<template>
  <div class="h-screen bg-red-lightest" id="app">
    <div class="bg-red shadow-lg pt-6 pb-5" id="nav">
      <div class="flex" id="search">
        <div class="w-1/4"></div>
        <div class="mt-8 ml-2 mr-8" id="search-icon">
          <magnify-icon decorative></magnify-icon>
        </div>
        <input
          class="border rounded p-2 text-grey-darker text-lg mr-4"
          v-model="name"
          v-on:keyup.enter="fetch"
          placeholder="Search for a Pokémon"
        >
      </div>
    </div>
    <pokemon-card v-if="loaded" v-bind:pokemon="pokemon"></pokemon-card>
  </div>
</template>

<script>
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import PokemonCard from "./components/PokemonCard.vue";
import Pokemon from "./pokemon";

export default {
  data() {
    return {
      name: "",
      loaded: false,
      pokemon: {}
    };
  },

  methods: {
    async fetch() {
      this.loaded = false;
      this.pokemon = await Pokemon.fromApi(this.name.toLowerCase());
      this.loaded = true;
    }
  },

  components: {
    MagnifyIcon,
    PokemonCard
  }
};
</script>

<style>
#search-icon svg {
  padding-right: 4px;
  fill: white;
  height: 3em;
  width: 3em;
}
</style>

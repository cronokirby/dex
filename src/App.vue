<template>
  <div class="h-screen bg-red-lightest" id="app">
    <div class="text-center bg-red shadow-lg pt-6 pb-5" id="search">
      <input
        class="border rounded p-2 text-grey-darker text-lg"
        v-model="name"
        v-on:keyup.enter="fetch"
        placeholder="Search for a Pokémon"
      >
    </div>
    <pokemon-card v-if="loaded" v-bind:pokemon="pokemon"></pokemon-card>
  </div>
</template>

<script>
import "@/styles/main.css";
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
    PokemonCard
  }
};
</script>

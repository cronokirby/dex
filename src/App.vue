<template>
  <div class="h-screen bg-green-lightest" id="app">
    <div class="text-center bg-green shadow-lg pt-6 pb-5" id="search">
      <input
        class="border rounded p-2 text-grey-darker text-lg"
        v-model="name"
        v-on:keyup.enter="fetch"
        placeholder="Search for a Pokémon"
      >
    </div>
    <pokemon-card v-bind:pokemon="pokemon"></pokemon-card>
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
      pokemon: {}
    };
  },

  methods: {
    async fetch() {
      this.pokemon = await Pokemon.fromApi(this.name.toLowerCase());
    }
  },

  components: {
    PokemonCard
  }
};
</script>

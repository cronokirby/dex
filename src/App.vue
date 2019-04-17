<template>
  <div class="h-screen bg-green-lightest" id="app">
    <div class="bg-green shadow-lg pt-6 pb-5" id="search">
      <input
        class="border rounded p-2 ml-8 text-grey-darker text-lg"
        v-model="name"
        placeholder="Search for a Pokémon"
      >
    </div>
    <div
      class="border rounded bg-white mx-auto mt-5 p-4 text-center shadow-lg max-w-sm"
      id="pokemon"
    >
      <h1 class="uppercase mb-4">{{ name }}</h1>
      <img v-bind:src="imageLink">
    </div>
  </div>
</template>

<script>
import "@/styles/main.css";
import * as pokemon from "./pokemon";

export default {
  data() {
    return {
      name: ""
    };
  },

  computed: {
    imageLink() {
      return pokemon.artUrl(this.name);
    }
  }
};
</script>

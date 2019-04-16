<template>
  <div id="app">
    <input v-model="name" placeholder="Search for a Pokémon">
    <p>{{ name }}</p>
    <img v-bind:src="imageLink">
  </div>
</template>

<script>
import * as pokemon from './pokemon';

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

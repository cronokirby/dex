<template>
  <div
    class="border rounded bg-white mx-auto mt-10 text-center shadow-lg max-w-sm px-10 py-8"
    id="pokemon"
  >
    <div class="flex" id="pokemon-name">
      <span class="text-3xl flex-auto font-bold uppercase">{{ pokemon.name }}</span>
      <span class="text-3xl flex-auto font-bold text-grey-darker">{{ numberText }}</span>
    </div>
    <img class="my-5" v-bind:src="pokemon.art">
    <div class="my-3" id="types">
      <span
        v-bind:class="`rounded shadow-md text-2xl text-grey-lightest font-bold uppercase mx-2 p-2 ${type}`"
        v-for="type in pokemon.types"
        :key="type"
      >{{type}}</span>
    </div>
    <div class="mt-8" id="flavor">
      <p class="text-base text-grey-darker text-justify leading-normal font-sans font-medium">{{pokemon.flavorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  computed: {
    numberText() {
      return "#" + `${this.pokemon.number}`.padStart(3, "0");
    }
  }
};
</script>

<style>
.normal {
  background-color: #a8a67a;
}

.fire {
  background-color: #f67d3c;
}

.fighting {
  background-color: #942525;
}

.water {
  background-color: #5a91ec;
}

.poison {
  background-color: #a0439c;
}

.electric {
  background-color: #d5a62c;
}

.ground {
  background-color: #e3bd6e;
}

.grass {
  background-color: #76c659;
}

.flying {
  background-color: #a390ec;
}

.ice {
  background-color: #91d7d7;
}

.bug {
  background-color: #aab637;
}

.psychic {
  background-color: #fe5686;
}

.rock {
  background-color: #ba9d44;
}

.dragon {
  background-color: #6442f3;
}

.ghost {
  background-color: #6e5a95;
}

.dark {
  background-color: #71584a;
}

.steel {
  background-color: #b5b7ce;
}

.fairy {
  background-color: #ffb6f8;
}
</style>

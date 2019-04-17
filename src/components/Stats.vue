<template>
  <div class="font-bold mt-5" id="stats">
    <div class="flex my-2 shadow-md" id="hp">
      <span class="flex-grow pl-2 text-left bg-red">HP:</span>
      <span class="bg-red pr-2">{{stats.hp}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-red-lighter" id="hp-bar">
        <span class="bg-red" :style="{width: hpWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="attack">
      <span class="flex-grow pl-2 text-left bg-orange">Attack:</span>
      <span class="bg-orange pr-2">{{stats.attack}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-orange-lighter" id="atk-bar">
        <span class="bg-orange" :style="{width: atkWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="defense">
      <span class="flex-grow pl-2 text-left bg-yellow">Def:</span>
      <span class="bg-yellow pr-2">{{stats.defense}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-yellow-lighter" id="def-bar">
        <span class="bg-yellow" :style="{width: defWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="sp-attack">
      <span class="flex-grow pl-2 text-left bg-blue">Sp. Atk:</span>
      <span class="bg-blue pr-2">{{stats.special_attack}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-blue-lighter" id="sp-atk-bar">
        <span class="bg-blue" :style="{width: spAtkWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="sp-defense">
      <span class="flex-grow pl-2 text-left bg-green">Sp. Def:</span>
      <span class="bg-green pr-2">{{stats.special_defense}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-green-lighter" id="sp-def-bar">
        <span class="bg-green" :style="{width: spDefWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="speed">
      <span class="flex-grow pl-2 text-left bg-pink">Speed:</span>
      <span class="bg-pink pr-2">{{stats.speed}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-pink-lighter" id="speed-bar">
        <span class="bg-pink" :style="{width: speedWidth}"></span>
      </div>
    </div>
    <div class="flex my-2 shadow-md" id="total">
      <span class="flex-grow pl-2 text-left bg-grey">Total:</span>
      <span class="bg-grey pr-2">{{total}}</span>
      <div class="flex text-left w-1/2 md:w-2/3 bg-grey-light" id="total-bar">
        <span class="bg-grey" :style="{width: totalWidth}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stats"],
  computed: {
    total() {
      return Object.values(this.stats).reduce((a, b) => a + b);
    },
    hpWidth() {
      return this.statWidth(this.stats.hp);
    },
    atkWidth() {
        return this.statWidth(this.stats.attack);
    },
    defWidth() {
        return this.statWidth(this.stats.defense);
    },
    spAtkWidth() {
        return this.statWidth(this.stats.special_attack);
    },
    spDefWidth() {
        return this.statWidth(this.stats.special_defense);
    },
    speedWidth() {
        return this.statWidth(this.stats.speed);
    },
    totalWidth() {
        return `${this.total / 6 / 255 * 100}%`;
    }
  },
  methods: {
    statWidth(stat) {
      return `${(stat / 255) * 100}%`;
    }
  }
};
</script>
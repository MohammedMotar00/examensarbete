<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        style="cursor: pointer"
        @click="pickChampion(name)"
      >
        <v-img :src="image" :style="{ border: border, backgroundColor: 'red' }">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out black darken-1 v-card--reveal display-2 white--text"
              style="height: 100%"
            >
              <p style="text-align: center">{{ name }}</p>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
    <!-- <p v-if="pickedChampion">{{ pickedChampion }}</p> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Champion_For_Items",
  props: ["name", "image", "pickedChampion"],

  data() {
    return {
      border: null,
      championName: null,
    };
  },

  mounted() {
    this.test();
  },

  methods: {
    ...mapActions("items", ["pickChampionName"]),

    pickChampion(ChampionName) {
      // console.log(ChampionName);
      this.championName = ChampionName;
      this.pickChampionName(ChampionName);
      // console.log(ChampionName);
    },

    test() {
      // if (this.name === this.pickedChampion) this.border = "10px dotted yellow";
      if (this.name === this.pickedChampion) console.log(this.pickedChampion);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
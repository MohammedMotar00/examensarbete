<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        style="cursor: pointer"
        @click="pickChampion(name)"
      >
        <v-img
          :src="image"
          :style="name === pickedChampion && border"
          style="background-color: black"
        >
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

      border: {
        border: "10px dotted yellow",
      },
    };
  },

  mounted() {
    this.pickChampionName(null);
  },

  methods: {
    ...mapActions("items", ["pickChampionName"]),

    pickChampion(name) {
      this.pickChampionName(name);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
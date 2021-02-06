<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto aaa"
        color="grey lighten-4"
        style="cursor: pointer"
        @click="pickChampion(name)"
      >
        <div class="hej">
          <v-img
            class="nej"
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
        </div>
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
    ...mapActions("items", ["pickChampionName", "saveChampionImage"]),

    pickChampion(name) {
      this.pickChampionName(name);

      if (name === "Shen")
        this.saveChampionImage(
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"
        );

      if (name === "Yasuo")
        this.saveChampionImage(
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
        );

      if (name === "Yone")
        this.saveChampionImage(
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.aaa {
  border: 1px solid blue;
  width: 80%;
}
.hej {
  border: 1px solid red;
  // height: 400px;
  // width: 80%;
}

.nej {
  object-fit: contain;
  // height: 80%;
  // width: 80%;
}
</style>
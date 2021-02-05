<template>
  <v-container fluid>
    <v-row class="d-flex flex-wrap">
      <v-col class="d-flex flex-wrap justify-center">
        <v-col class="">
          <v-card class="" color="grey lighten-4">
            <v-img :src="image"></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" class="text-center">
          <span class="champ-title">{{ championData.title }}</span>
          <br />
          <span class="champ-name">{{ championData.name }}</span>

          <v-card
            width="80%"
            class="mx-auto grey lighten-4"
            outlined
            elevation="23"
          >
            <p>{{ championData.lore }}</p>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ChampionInfo",

  props: ["image", "championData", "championName"],

  methods: {
    ...mapActions("items", ["fetchItemCollection"]),

    fetchItems() {
      console.log(this.championName.toLowerCase());
      this.championName &&
        this.fetchItemCollection(this.championName.toLowerCase());
    },
  },

  mounted() {
    this.fetchItems();
  },
};
</script>

<style lang="scss" scoped>
.champ-title {
  font-size: 30px;
}

.champ-name {
  font-size: 55px;
  font-weight: bold;
}
</style>
<template>
  <v-container fluid>
    <v-card class="light-blue lighten-4">
      <v-row class="justify-center flex-wrap justify-space-around">
        <v-col
          v-for="(champ, index) in champions"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          xl="2"
        >
          <ChampionForItems
            :name="champ.name"
            :image="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.name}_${champ.skins[0].num}.jpg`"
            :pickedChampion="pickedChampionName"
          />
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="justify-center">
        <v-col cols="6">
          <v-text-field
            class="text--darken-3 mt-3"
            label="Title for items"
            v-model="titleForItemCollection"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <AddItem
            title="Starting Items"
            :pickedChampion="pickedChampionName"
          />
        </v-col>
        <v-col cols="12">
          <AddItem title="Middle Items" :pickedChampion="pickedChampionName" />
        </v-col>
        <v-col cols="12">
          <AddItem title="Full Items" :pickedChampion="pickedChampionName" />
        </v-col>
      </v-row>
      <v-btn @click="saveItems" color="success">Save items</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ChampionForItems from "../components/ChampionForItems";
import AddItem from "../components/AddItem";
// import AddItems from "../components/AddItems";

export default {
  name: "AddItems",
  components: { ChampionForItems, AddItem },

  data() {
    return {
      titleForItemCollection: null,
    };
  },

  computed: {
    ...mapState("champions", ["champions"]),
    ...mapState("items", ["pickedChampionName"]),
  },

  methods: {
    ...mapActions("items", [
      "saveItemsToDB",
      "clearStartingItems",
      "clearMiddleItems",
      "clearFullItems",
    ]),

    saveItems() {
      if (this.titleForItemCollection !== null) {
        this.saveItemsToDB(this.titleForItemCollection);
      } else {
        return null;
      }
    },

    clearItems() {
      this.clearStartingItems();
      this.clearMiddleItems();
      this.clearFullItems();
    },
  },

  mounted() {
    this.clearItems();
  },
};
</script>

<style lang="scss" scoped>
</style>
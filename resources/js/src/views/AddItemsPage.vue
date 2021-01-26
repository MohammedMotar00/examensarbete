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
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ChampionForItems from "../components/ChampionForItems";
import AddItem from "../components/AddItem";
// import AddItems from "../components/AddItems";

export default {
  name: "AddItems",
  components: { ChampionForItems, AddItem },

  computed: {
    ...mapState("champions", ["champions"]),
    ...mapState("items", ["pickedChampionName"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
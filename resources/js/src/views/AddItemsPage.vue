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
            :pickedChampion="getPickedChampionName"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ChampionForItems from "../components/ChampionForItems";

export default {
  name: "AddItems",
  components: { ChampionForItems },

  mounted() {
    console.log(this.getPickedChampionName);
  },

  computed: {
    ...mapState("champions", ["champions"]),
    ...mapGetters("items", ["getPickedChampionName"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
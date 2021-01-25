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
          />
        </v-col>

        <v-col class="justify-center mt-10 text-center" cols="12">
          <p>Adda items för champions</p>
          <router-link to="/additems" style="text-decoration: none">
            <v-icon class="add-icon" x-large>mdi-plus-circle</v-icon>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ChampionForItems from "../components/ChampionForItems";

export default {
  name: "AddItems",
  components: { ChampionForItems },

  computed: {
    ...mapState("champions", ["champions"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
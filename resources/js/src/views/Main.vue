<template>
  <div>
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
            <Champion
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import Champion from "../components/Champion";

export default {
  name: "Main",
  components: { Champion },

  data() {
    return {};
  },

  computed: {
    ...mapState("champions", ["champions"]),
  },
};
</script>

<style lang="scss" scoped>
.add-icon {
  color: blue !important;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}
</style>
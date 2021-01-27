<template>
  <v-container fluid>
    <v-card class="light-blue lighten-4">
      <v-row class="d-flex flex-wrap">
        <v-col class="d-flex flex-wrap">
          <div v-if="championName === 'Shen'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"
              :championData="getShen"
            />
          </div>

          <div v-if="championName === 'Yasuo'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
              :championData="getYasuo"
            />
          </div>

          <div v-if="championName === 'Yone'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"
              :championData="getYone"
            />
          </div>

          <v-divider inset class="ma-5"></v-divider>

          <!-- Här alla suggested items som folk väljer! -->
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ChampionInfo from "../components/ChampionInfo";

export default {
  name: "ChampionPage",
  components: { ChampionInfo },

  data() {
    return {
      championName: this.$route.params.champion_name,
    };
  },

  computed: {
    ...mapGetters("champions", ["getShen", "getYasuo", "getYone"]),
  },
};
</script>

<style lang="scss" scoped>
.v-responsive__content {
  width: auto;
}
</style>
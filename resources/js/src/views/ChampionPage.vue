<template>
  <v-container fluid style="border: 1px solid green; max-width: 1920px">
    <v-card class="light-blue lighten-4">
      <v-row class="d-flex flex-wrap">
        <v-col class="d-flex flex-wrap">
          <div v-if="championName === 'Shen'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"
              :championData="getShen"
              :championName="championName"
            />
          </div>

          <div v-if="championName === 'Yasuo'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
              :championData="getYasuo"
              :championName="championName"
            />
          </div>

          <div v-if="championName === 'Yone'" style="width: 100%">
            <ChampionInfo
              image="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"
              :championData="getYone"
              :championName="championName"
            />
          </div>
        </v-col>
      </v-row>
      <v-divider inset class="ma-5"></v-divider>
      <v-row class="d-flex flex-wrap">
        <v-col class="d-flex flex-wrap justify-center">
          <div v-if="championName === 'Shen'">
            <ItemCollection
              :itemCollections="getShenItemsCollection"
              :championName="championName"
            />
          </div>

          <div v-if="championName === 'Yasuo'">
            <ItemCollection
              :itemCollections="getYasuoItemsCollection"
              :championName="championName"
            />
          </div>

          <div v-if="championName === 'Yone'">
            <ItemCollection
              :itemCollections="getYoneItemsCollection"
              :championName="championName"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ChampionInfo from "../components/ChampionInfo";
import ItemCollection from "../components/ItemCollection";

export default {
  name: "ChampionPage",
  components: { ChampionInfo, ItemCollection },

  data() {
    return {
      championName: this.$route.params.champion_name,
    };
  },

  computed: {
    ...mapGetters("champions", ["getShen", "getYasuo", "getYone"]),
    ...mapGetters("items", [
      "getShenItemsCollection",
      "getYasuoItemsCollection",
      "getYoneItemsCollection",
    ]),
  },

  methods: {
    ...mapActions("items", ["clearSingleChampionItemsCollection"]),

    clearItems() {
      this.clearSingleChampionItemsCollection();
    },
  },

  mounted() {
    this.clearItems();
  },
};
</script>

<style lang="scss" scoped>
.v-responsive__content {
  width: auto;
}
</style>
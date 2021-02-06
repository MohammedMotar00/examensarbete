<template>
  <v-container fluid>
    <v-card class="light-blue lighten-4">
      <v-row class="justify-center flex-wrap justify-space-around">
        <v-col cols="12" sm="6" md="3" xl="2">
          <v-card class="" color="grey lighten-4">
            <v-img :src="getSingleChampionImageCollection"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <ShowItems
            title="Starting Items"
            :items="getSingleChampionItemsCollection_Starting"
          />
        </v-col>
        <v-col cols="12">
          <ShowItems
            title="Middle Items"
            :items="getSingleChampionItemsCollection_Middle"
          />
        </v-col>
        <v-col cols="12">
          <ShowItems
            title="Full Items"
            :items="getSingleChampionItemsCollection_Full"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapActions, mapGetters } from "vuex";
import ShowItems from "../components/ShowItems";

export default {
  components: { ShowItems },

  data() {
    return {
      // item_collection_info: this.$route.params.item_collection_info[0],
      championName: this.$route.params.item_collection_title_name_id,
      queryId: this.$route.query.id,
    };
  },

  methods: {
    ...mapActions("items", ["fetchSingleChampionItemsCollection"]),

    fetchItems() {
      let id = this.queryId;
      const championName = this.championName.toLowerCase();
      this.fetchSingleChampionItemsCollection({ championName, id });
    },
  },

  mounted() {
    this.fetchItems();
  },

  computed: {
    ...mapGetters("items", [
      "getSingleChampionItemsCollection_Starting",
      "getSingleChampionItemsCollection_Middle",
      "getSingleChampionItemsCollection_Full",
      "getSingleChampionImageCollection",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
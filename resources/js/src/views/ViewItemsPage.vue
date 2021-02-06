<template>
  <v-container fluid>
    <v-card class="light-blue lighten-4">
      <v-row class="justify-center flex-wrap justify-space-around">
        <v-col cols="12" sm="6" md="3" xl="2">
          här ska jag ha bild för champion!
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <ShowItems title="Starting Items" />
        </v-col>
        <v-col cols="12">
          <ShowItems title="Middle Items" />
        </v-col>
        <v-col cols="12">
          <ShowItems title="Full Items" />
        </v-col>
      </v-row>

      <!-- <div
        v-for="(item, index) in getSingleChampionItemsCollection_Starting"
        :key="index"
      >
        <p>{{ item.name }}</p>
      </div> -->
    </v-card>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapActions } from "vuex";
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

  // computed: {
  //   ...mapGetters("items", [
  //     "getSingleChampionItemsCollection_Starting",
  //     "getSingleChampionItemsCollection_Middle",
  //     "getSingleChampionItemsCollection_Full",
  //   ]),
  // },
};
</script>

<style lang="scss" scoped>
</style>
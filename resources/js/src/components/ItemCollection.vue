<template>
  <div>
    <v-card class="mx-auto" width="600" tile>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, index) in itemCollections"
            @click="fetchItems(item.id)"
            :key="index"
          >
            <!-- <v-list-item-icon> -->
            <v-icon x-large class="mb-5">mdi-account-edit</v-icon>
            <!-- </v-list-item-icon> -->

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["itemCollections", "championName"],

  methods: {
    ...mapActions("items", ["fetchSingleChampionItemsCollection"]),

    fetchItems(id) {
      console.log("this is id: ", id);
      const championName = this.championName.toLowerCase();
      this.fetchSingleChampionItemsCollection({ championName, id });
      // this.$router.push({
      //   name: "ViewItemsPage",
      //   params: { item_collection_title_name_id: id },
      // });

      this.$router.replace({
        name: "ViewItemsPage",
        params: { item_collection_title_name_id: championName },
        query: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  border: 1px solid red;
  cursor: pointer;
  margin: 20px 0;
  text-align: center;
}
</style>
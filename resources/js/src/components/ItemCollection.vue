<template>
  <div>
    <v-card class="mx-auto" width="600" tile>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, index) in itemCollections"
            :key="index"
            :to="{
              name: 'ViewItemsPage',
              params: {
                item_collection_info: [{ item: item.id, title: item.title }],
              },
            }"
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
export default {
  props: ["itemCollections"],
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
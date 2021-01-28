<template>
  <v-col cols="12">
    <p>{{ title }}</p>
    <v-icon class="add-icon" x-large>mdi-plus-box</v-icon>

    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      style="position: relative"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">+</v-btn>
      </template>

      <template class="container-container">
        <v-card>
          <div class="container-modal">
            <v-toolbar
              class="toolbar-top"
              color="primary"
              dark
              style="height: 100px"
            >
              <div style="width: 100%">
                <v-text-field
                  :label="`Search for ${title} here...`"
                  hide-details="auto"
                  v-model="searchText"
                  @keyup="filterItems"
                ></v-text-field>
              </div>
            </v-toolbar>

            <!-- <div class="d-flex"> -->
            <v-row
              class="justify-center flex-wrap justify-space-around mt-2 ma-auto"
              style="width: 100%"
            >
              <v-col
                cols="6"
                sm="3"
                v-for="(item, index) in filterSearchItems"
                :key="index"
                style="border: 1px solid blue"
                class="text-center d-flex align-center justify-center"
              >
                <Item
                  :image="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image.full}`"
                  :name="item.name"
                />
                <!-- <v-img
                  height="50"
                  width="50"
                  :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image.full}`"
                  class="ma-auto"
                />
                <p>{{ item.name }}</p> -->
              </v-col>
            </v-row>

            <div class="toolbar-bottom">
              <v-toolbar color="primary" dark style="height: 100px"
                >render items here... render items here... render items here...
                render items here... render items here...
              </v-toolbar>
            </div>
          </div>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Item from "./Item";

export default {
  name: "AddItem",
  props: ["title", "pickedChampion"],
  components: { Item },

  data() {
    return {
      startingItems: [],
      middleItems: [],
      fullItems: [],

      allItems: [],
      searchText: "",

      itemsArr: [],
    };
  },

  computed: {
    ...mapGetters("items", ["getItems", "filterSearchItems"]),
  },

  methods: {
    ...mapActions("items", ["searchForItems"]),

    filterItems(event) {
      this.searchForItems(event?.target?.value);
    },
  },

  mounted() {
    this.filterItems();
    // console.log(this.searchText);
  },
};
</script>

<style lang="scss" scoped>
.container-modal {
  position: relative;
  border: 1px solid red;
  min-height: 200px;
  width: 100%;
  // overflow-x: hidden;
}

.toolbar-top {
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.toolbar-bottom {
  position: sticky;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
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
                <!-- <Item
                  :image="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image.full}`"
                  :itemInfo="item"
                  :title="title"
                /> -->
                <div
                  class="item"
                  @click="addItem(item.name, item.image.full, title)"
                >
                  <v-img
                    height="50"
                    width="50"
                    :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image.full}`"
                    class="ma-auto"
                  />
                  <p>{{ item.name }}</p>
                </div>
              </v-col>
            </v-row>

            <div class="toolbar-bottom">
              <v-toolbar color="primary" dark style="height: 100px">
                <!-- <AddedItems
                  :title="title"
                  :startingItems="startingItems"
                  :middleItems="middleItems"
                  :fullItems="fullItems"
                /> -->
                <div v-if="title === 'Starting Items'">
                  <div v-for="(item, index) in startingItems" :key="index">
                    <v-img
                      height="50"
                      width="50"
                      :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
                      class="ma-auto"
                    />
                    <p>{{ item.name }}</p>
                  </div>
                </div>
                <v-btn @click="saveItems(title)" color="success">save</v-btn>
              </v-toolbar>
            </div>
          </div>
        </v-card>
      </template>
    </v-dialog>
    <!-- {{ allItems }} -->
    <div v-for="(item, index) in allItems" :key="index">
      <!-- <v-img
        height="50"
        width="50"
        :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
        class="ma-auto"
      /> -->
      <p>{{ item }}</p>
    </div>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Item from "./Item";
import AddedItems from "./AddedItems";

export default {
  name: "AddItem",
  props: ["title", "pickedChampion"],
  components: { Item, AddedItems },

  data() {
    return {
      startingItems: [],
      middleItems: [],
      fullItems: [],

      allItems: [],
      searchText: "",

      itemsArr: [],

      itemArr: [],
    };
  },

  computed: {
    ...mapGetters("items", ["getItems", "filterSearchItems"]),
  },

  methods: {
    ...mapActions("items", [
      "searchForItems",
      "saveStartingItems",
      "saveMiddleItems",
      "saveFullItems",
    ]),

    filterItems(event) {
      this.searchForItems(event?.target?.value);
    },

    addItem(item, image, title) {
      // title === "Starting Items" && this.startingItems.push(item);
      if (title === "Starting Items") {
        if (this.startingItems.length <= 5) {
          this.startingItems.push({ item, image });
        }
      }

      if (title === "Middle Items") {
        if (this.middleItems.length <= 5) {
          this.middleItems.push({ item, image });
        }
      }

      if (title === "Full Items") {
        if (this.fullItems.length <= 5) {
          this.fullItems.push({ item, image });
        }
      }
    },

    saveItems(title) {
      if (title === "Starting Items") {
        // this.allItems = [];
        // this.allItems.push({ startingItems: this.startingItems });
        // for (let item of this.startingItems)
        //   this.allItems.push({ startingItems: item });
        // this.allItems.push(this.startingItems);
        this.saveStartingItems(null);
        let data = [];
        for (let item of this.startingItems) {
          data.push(item);
        }

        this.saveStartingItems(data);
        data = [];
      }

      if (title === "Middle Items") {
        // this.allItems = [];
        // for (let item of this.middleItems)
        //   this.allItems.push({ middleItems: item });
        this.saveMiddleItems(this.middleItems);
      }

      if (title === "Full Items") {
        // this.allItems = [];
        // for (let item of this.fullItems)
        //   this.allItems.push({ fullItems: item });
        this.saveFullItems(this.fullItems);
      }

      // this.saveAllItems(this.allItems);
    },

    itemsInModal(item) {},
  },

  mounted() {
    this.filterItems();
    console.log(this.allItems);
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

.item {
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
}
</style>
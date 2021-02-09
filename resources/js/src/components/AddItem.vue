<template>
  <v-col cols="12">
    <p>{{ title }}</p>

    <!-- items that has been added -->
    <v-row>
      <div class="d-flex flex-row" v-if="title === 'Starting Items'">
        <div
          class="d-flex flex-column align-center"
          v-for="(item, index) in startingItems"
          :key="index"
        >
          <Item
            :item="item"
            :title="title"
            :removeItem="removeItem"
            :index="index"
          />
        </div>
      </div>

      <div class="d-flex flex-row" v-if="title === 'Middle Items'">
        <div
          class="d-flex flex-column align-center"
          v-for="(item, index) in middleItems"
          :key="index"
        >
          <Item
            :item="item"
            :title="title"
            :removeItem="removeItem"
            :index="index"
          />
        </div>
      </div>

      <div class="d-flex flex-row" v-if="title === 'Full Items'">
        <div
          class="d-flex flex-column align-center"
          v-for="(item, index) in fullItems"
          :key="index"
        >
          <Item
            :item="item"
            :title="title"
            :removeItem="removeItem"
            :index="index"
          />
        </div>
      </div>

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
                  <div
                    class="item"
                    @click="
                      addItem(
                        item.name,
                        item.image.full,
                        item.description,
                        title
                      )
                    "
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

              <div class="toolbar-bottom" style="border: 1px solid red">
                <v-toolbar
                  color="primary"
                  dark
                  style="min-height: 110px; position: relative"
                  class="d-flex flex-column justify-center overflow-y-hidden overflow-x-auto"
                >
                  <div class="d-flex" v-if="title === 'Starting Items'">
                    <v-col
                      class="d-flex flex-column align-center"
                      v-for="(item, index) in startingItems"
                      :key="index"
                    >
                      <Item
                        :item="item"
                        :title="title"
                        :removeItem="removeItem"
                        :index="index"
                      />
                    </v-col>
                  </div>

                  <div class="d-flex flex-row" v-if="title === 'Middle Items'">
                    <div
                      class="d-flex flex-column align-center"
                      v-for="(item, index) in middleItems"
                      :key="index"
                    >
                      <Item
                        :item="item"
                        :title="title"
                        :removeItem="removeItem"
                        :index="index"
                      />
                    </div>
                  </div>

                  <div class="d-flex flex-row" v-if="title === 'Full Items'">
                    <div
                      class="d-flex flex-column align-center"
                      v-for="(item, index) in fullItems"
                      :key="index"
                    >
                      <Item
                        :item="item"
                        :title="title"
                        :removeItem="removeItem"
                        :index="index"
                      />
                    </div>
                  </div>
                  <!-- <v-btn @click="saveItems(title)" color="success">save</v-btn> -->
                </v-toolbar>
              </div>
            </div>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
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
    ...mapGetters("items", [
      "getItems",
      "filterSearchItems",
      "getStartingItems",
      "getMiddleItems",
      "getFullItems",
    ]),
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

    addItem(name, image, description, itemTitle) {
      const key = Math.floor(Math.random() * 120);
      let id = null;

      if (key !== Math.floor(Math.random() * 120)) id = key;

      if (itemTitle === "Starting Items") {
        if (this.startingItems.length <= 5) {
          this.startingItems.push({ name, image, description, id });
          this.saveStartingItems(this.startingItems);
        }
      }

      if (itemTitle === "Middle Items") {
        if (this.middleItems.length <= 5) {
          this.middleItems.push({ name, image, description, id });
        }
      }

      if (itemTitle === "Full Items") {
        if (this.fullItems.length <= 5) {
          this.fullItems.push({ name, image, description, id });
        }
      }
    },

    // saveItems(title) {
    //   if (title === "Starting Items") {
    //     this.saveStartingItems(this.startingItems);
    //   }

    //   if (title === "Middle Items") {
    //     this.saveMiddleItems(this.middleItems);
    //   }

    //   if (title === "Full Items") {
    //     this.saveFullItems(this.fullItems);
    //   }
    // },

    removeItem(itemTitle, index) {
      console.log(itemTitle);
      console.log(index);

      itemTitle === "Starting Items" && this.$delete(this.startingItems, index);
      itemTitle === "Middle Items" && this.$delete(this.middleItems, index);
      itemTitle === "Full Items" && this.$delete(this.fullItems, index);
    },
  },

  mounted() {
    this.filterItems();
  },
};
</script>

<style lang="scss" scoped>
.container-modal {
  position: relative;
  min-height: 200px;
  width: 100%;
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
  min-height: 100px;
  // flex-wrap: wrap;
}

.item {
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
}

.v-toolbar__content {
  min-height: 100% !important;
}
</style>
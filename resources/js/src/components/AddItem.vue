<template>
  <v-col cols="12">
    <p>{{ title }}</p>
    <v-icon class="add-icon" x-large>mdi-plus-box</v-icon>

    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      height="50"
      style="position: relative"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">+</v-btn>
      </template>

      <template class="container-container">
        <v-card>
          <div class="container-modal">
            <v-toolbar class="toolbar-top" color="primary" dark>
              <div style="width: 100%">
                <v-text-field
                  :label="`Search for ${title} here...`"
                  hide-details="auto"
                  v-model="search"
                ></v-text-field>
              </div>
            </v-toolbar>
            <div v-for="(item, index) in getItems" :key="index">
              <v-col style="border: 1px solid blue; width: 100">
                <!-- <div class="text-h2 pa-12">Hello world!</div> -->
                <p>{{ item.name }}</p>
                <v-img
                  height="50"
                  width="50"
                  :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image.full}`"
                />
              </v-col>
            </div>

            <div class="toolbar-bottom">
              <v-toolbar color="primary" dark
                >render items here... render items here... render items here...
                render items here... render items here...

                <br />

                <!-- <template v-slot:activator="{ off }"> -->
                <!-- <v-btn color="primary" v-on="off">save</v-btn> -->
                <!-- </template> -->
              </v-toolbar>
            </div>
          </div>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddItem",
  props: ["title", "pickedChampion"],

  data() {
    return {
      startingItems: [],
      middleItems: [],
      fullItems: [],

      allItems: [],
      search: "",

      itemsArr: [],
    };
  },

  mounted() {
    this.fetchItems();
  },

  computed: {
    ...mapGetters("items", ["getItems"]),
    filteredData() {
      return this.getItems.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    // filterItems() {
    //   return this.getItems.filter((item) => {
    //     return item.name.match(this.search);
    //   });
    // },
  },

  methods: {
    // ...mapGetters("items", ["getItems"]),
    fetchItems() {
      // this.itemsArr.push(this.getItems);
      this.itemsArr = this.getItems;
    },
  },
};
</script>

<style lang="scss" scoped>
// .container-container {
//   position: relative;
// }

.container-modal {
  position: relative;
  border: 1px solid red;
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
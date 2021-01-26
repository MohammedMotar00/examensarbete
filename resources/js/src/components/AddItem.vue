<template>
  <v-col cols="12">
    <p>{{ title }}</p>
    <v-icon class="add-icon" x-large>mdi-plus-box</v-icon>

    <v-dialog transition="dialog-top-transition" max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">+</v-btn>
      </template>

      <template>
        <v-card>
          <v-toolbar color="primary" dark>Search {{ title }} here</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
          </v-card-text>

          <v-toolbar color="primary" dark>render items here...</v-toolbar>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: "AddItem",
  props: ["title", "pickedChampion"],

  data() {
    return {
      startingItems: [],
      middleItems: [],
      fullItems: [],

      allItems: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  right: 0;
}
</style>
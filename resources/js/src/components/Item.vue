<template>
  <!-- <div class="remove-item" @click="removeItem(title, index)">
      <v-img
        height="50"
        width="50"
        :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
        class="ma-auto"
      />
      <p>{{ item.name }}</p>
    </div> -->

  <div class="mr-3">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> Bottom </v-btn> -->
        <div
          class="remove-item d-flex flex-column align-center justify-center text-center"
          @click="removeItem(title, index)"
          v-bind="attrs"
          v-on="on"
          style="border: 1px solid blue; min-width: 120px"
        >
          <v-img
            height="50"
            width="50"
            :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
            class="ma-auto"
          />
          <p style="margin: 0">{{ item.name }}</p>
        </div>
      </template>
      <div>
        <p>Item name: boots</p>

        <p>description: asdaösldkaöslkdasödl</p>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["removeItem", "item", "title", "index"],

  data() {
    return {
      items: [],
      itemObj: {},
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
.remove-item {
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }
}
</style>
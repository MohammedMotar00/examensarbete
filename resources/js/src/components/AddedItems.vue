<template>
  <div>
    <div v-if="title === 'Starting Items'" class="d-flex px-2">
      <div v-for="(item, index) in getStartingItems" :key="index">
        <v-img
          height="50"
          width="50"
          :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
          class="ma-auto"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>

    <div v-if="title === 'Middle Items'" class="d-flex">
      <div style="height: 40px; width: 40px; border: 1px solid blue"></div>
      <div style="height: 40px; width: 40px; border: 1px solid blue"></div>
      <div style="height: 40px; width: 40px; border: 1px solid blue"></div>
      <div style="height: 40px; width: 40px; border: 1px solid blue"></div>
    </div>

    <div v-if="title === 'Full Items'" class="d-flex">
      <div style="height: 40px; width: 40px; border: 1px solid green"></div>
      <div style="height: 40px; width: 40px; border: 1px solid green"></div>
      <div style="height: 40px; width: 40px; border: 1px solid green"></div>
      <div style="height: 40px; width: 40px; border: 1px solid green"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["title"],

  data() {
    return {};
  },

  computed: {
    ...mapGetters("items", [
      "getStartingItems",
      "getMiddleItems",
      "getFullItems",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
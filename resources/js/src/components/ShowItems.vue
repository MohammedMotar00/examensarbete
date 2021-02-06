<template>
  <div class="d-flex px-2">
    <h2>{{ title }}</h2>
    <div v-if="title === 'Starting Items'">
      <div
        v-for="(item, index) in getSingleChampionItemsCollection_Starting"
        :key="index"
      >
        <v-img
          height="50"
          width="50"
          :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
          class="ma-auto"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["title"],

  computed: {
    ...mapGetters("items", [
      "getSingleChampionItemsCollection_Starting",
      "getSingleChampionItemsCollection_Middle",
      "getSingleChampionItemsCollection_Full",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>
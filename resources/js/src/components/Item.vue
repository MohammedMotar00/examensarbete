<template>
  <div class="remove-item" @click="removeItem(title, index)">
    <v-img
      height="50"
      width="50"
      :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
      class="ma-auto"
    />
    <p>{{ item.name }}</p>
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
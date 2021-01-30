<template>
  <div class="item" @click="addItem(itemInfo.name)">
    <v-img height="50" width="50" :src="image" class="ma-auto" />
    <p>{{ itemInfo.name }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["image", "itemInfo", "title"],

  data() {
    return {
      items: [],
      itemObj: {},
    };
  },

  methods: {
    addItem(item) {
      // if (this.items.length)
      // let arr = [];
      let obj = {};
      obj.name = item;
      this.items.push(obj);
      // arr.push(item);
      console.log(obj);
      // this.items.push(item);
      this.itemObj = item;

      // this.itemCheck();
    },

    itemCheck() {
      console.log(this.items);
      console.log(this.items.length);
    },
  },

  mounted() {
    // this.itemCheck();
  },
};
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
}
</style>
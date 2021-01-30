<template>
  <div>
    <div v-if="title === 'Starting Items'">
      <div v-for="(item, index) in startingItems" :key="index">
        {{ item }}
      </div>
    </div>

    <div v-if="title === 'Middle Items'"></div>

    <div v-if="title === 'Full Items'"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "startingItems", "middleItems", "fullItems"],

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
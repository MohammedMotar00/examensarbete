<template>
  <div class="d-flex px-2">
    <h2>{{ title }}</h2>
    <div v-for="(item, index) in items" :key="index">
      <v-img
        height="50"
        width="50"
        :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
        class="ma-auto"
      />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],
};
</script>

<style lang="scss" scoped>
</style>
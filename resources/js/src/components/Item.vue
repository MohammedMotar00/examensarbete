<template>
  <div>
    <v-img height="50" width="50" :src="image" class="ma-auto" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "image"],
};
</script>

<style lang="scss" scoped>
</style>
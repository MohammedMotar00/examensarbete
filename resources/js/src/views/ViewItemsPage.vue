<template>
  <div>hellozzz</div>
</template>

<script>
export default {
  data() {
    return {
      item_collection_info: this.$route.params.item_collection_info,
    };
  },

  mounted() {
    console.log(this.item_collection_info[0].title);
  },
};
</script>

<style lang="scss" scoped>
</style>
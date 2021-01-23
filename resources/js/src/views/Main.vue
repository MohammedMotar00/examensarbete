<template>
  <div>main</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Main",

  mounted() {
    this.fetchChampions();
  },

  methods: {
    ...mapActions("champions", ["fetchChampions"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      style="cursor: pointer"
      @click="pickChampion"
      :style="{ border: border }"
    >
      <v-img :src="image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-1 v-card--reveal display-2 white--text"
            style="height: 100%"
          >
            <p style="text-align: center">{{ name }}</p>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Champion_For_Items",
  props: ["name", "image"],

  data() {
    return {
      border: "1px dotted yellow",
    };
  },

  methods: {
    pickChampion() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
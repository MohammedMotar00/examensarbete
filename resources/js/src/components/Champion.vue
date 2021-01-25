<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      style="cursor: pointer"
      :to="{ name: 'ChampionPage', params: { champion_name: name } }"
    >
      <v-img :src="image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-1 v-card--reveal display-2 white--text"
            style="height: 100%"
          >
            <p style="text-align: center">View <br />{{ name }}</p>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Champion",
  props: ["name", "image"],

  data() {
    return {
      Champion_Name: this.$route.params.champion_name,
    };
  },

  mounted() {
    console.log(this.Champion_Name);
  },
};
</script>

<style lang="scss" scoped>
</style>
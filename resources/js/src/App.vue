<template>
  <v-app>
    <Header />
    <v-main class="mx-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },

  mounted() {
    this.usernameLoggedIn();
    this.fetchChampions();
  },

  methods: {
    ...mapActions(["usernameLoggedIn"]),
    ...mapActions("champions", ["fetchChampions"]),
  },
};
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
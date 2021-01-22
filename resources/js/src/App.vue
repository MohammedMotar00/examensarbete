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
  },

  methods: {
    ...mapActions(["usernameLoggedIn"]),
  },
};
</script>

<style lang="scss">
</style>
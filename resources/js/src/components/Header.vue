<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark fluid>
      <v-spacer></v-spacer>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="username">
        <p>{{ username }}</p>
        <v-btn @click="logout">
          Logout
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",

  data: () => ({}),

  computed: {
    ...mapGetters(["username"]),
  },

  methods: {
    logout() {
      localStorage.removeItem("username");
      this.login(null);
    },
    ...mapActions(["login"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="login">
    <input type="text" placeholder="login" v-model="username" />
    <v-btn @click="login()" color="success">Login</v-btn>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", this.username);
      window.localStorage.setItem("username", this.username);
      this.username = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
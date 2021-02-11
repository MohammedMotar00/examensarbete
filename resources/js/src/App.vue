<template>
  <v-app>
    <Header />
    <v-main class="mb-4 mx-auto" style="width: 100%">
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
    this.fetchItems();
  },

  methods: {
    ...mapActions(["usernameLoggedIn"]),
    ...mapActions("champions", ["fetchChampions"]),
    ...mapActions("items", ["fetchItems"]),
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

.add-icon {
  color: blue !important;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}

.item-info {
  max-width: 700px;
  background-color: rgb(26, 25, 25);
  padding: 10px;
}

@media (max-width: 500px) {
  .item-info {
    max-width: 300px;
  }
}
</style>
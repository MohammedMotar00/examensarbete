<template>
  <v-container fluid>
    <v-card class="light-blue lighten-4">
      <v-row class="d-flex flex-wrap">
        <v-col cols="12" class="d-flex flex-wrap">
          <Shen />

          <v-divider inset class="ma-5"></v-divider>

          <!-- Här alla suggested items som folk väljer! -->
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Shen from "../components/Shen";

export default {
  name: "ChampionPage",
  components: { Shen },
};
</script>

<style lang="scss" scoped>
</style>
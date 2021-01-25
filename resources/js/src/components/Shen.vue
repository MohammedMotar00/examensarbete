<template>
  <v-container fluid>
    <v-row class="d-flex flex-wrap">
      <v-col cols="12" class="d-flex flex-wrap">
        <v-col cols="12">
          <v-card class="mx-auto" color="grey lighten-4">
            <v-img
              src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"
            ></v-img>
          </v-card>
        </v-col>

        <v-col cols="12" class="text-center">
          <span class="champ-title">{{ getShen.title }}</span>
          <br />
          <span class="champ-name">{{ getShen.name }}</span>

          <v-card
            width="80%"
            class="mx-auto grey lighten-4"
            outlined
            elevation="23"
          >
            <p>{{ getShen.lore }}</p>
          </v-card>
        </v-col>

        <!-- <v-divider inset class="ma-5"></v-divider> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Shen",

  computed: {
    ...mapGetters("champions", ["getShen"]),
  },
};
</script>

<style lang="scss" scoped>
.champ-title {
  font-size: 30px;
}

.champ-name {
  font-size: 55px;
  font-weight: bold;
}
</style>
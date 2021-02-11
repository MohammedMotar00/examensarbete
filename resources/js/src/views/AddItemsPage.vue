<template>
  <v-container fluid class="mx-auto" style="max-width: 1920px">
    <v-card class="light-blue lighten-4">
      <v-row class="justify-center flex-wrap justify-space-around">
        <v-col
          v-for="(champ, index) in champions"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          xl="2"
        >
          <ChampionForItems
            :name="champ.name"
            :image="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.name}_${champ.skins[0].num}.jpg`"
            :pickedChampion="pickedChampionName"
          />
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="justify-center">
        <v-col cols="6">
          <v-text-field
            class="text--darken-3 mt-3"
            label="Title for items"
            v-model="titleForItemCollection"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <AddItem
            title="Starting Items"
            :pickedChampion="pickedChampionName"
          />
        </v-col>
        <v-col cols="12">
          <AddItem title="Middle Items" :pickedChampion="pickedChampionName" />
        </v-col>
        <v-col cols="12">
          <AddItem title="Full Items" :pickedChampion="pickedChampionName" />
        </v-col>
      </v-row>
      <v-btn
        :disabled="!hasWrittenTitleForItems(titleForItemCollection)"
        @click="saveItems"
        color="success"
        >Save items</v-btn
      >
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import ChampionForItems from "../components/ChampionForItems";
import AddItem from "../components/AddItem";

export default {
  name: "AddItems",
  components: { ChampionForItems, AddItem },

  data() {
    return {
      titleForItemCollection: null,
    };
  },

  computed: {
    ...mapState("champions", ["champions"]),
    ...mapState("items", ["pickedChampionName"]),
    ...mapGetters("items", ["getResponse"]),
  },

  methods: {
    ...mapActions("items", [
      "saveItemsToDB",
      "clearStartingItems",
      "clearMiddleItems",
      "clearFullItems",
      "clearPostResponse",
    ]),

    saveItems() {
      if (this.titleForItemCollection !== null) {
        this.saveItemsToDB(this.titleForItemCollection);
      } else {
        return null;
      }
    },

    hasWrittenTitleForItems() {
      return (
        this.titleForItemCollection !== "" &&
        this.titleForItemCollection !== null
      );
    },

    clearItems() {
      this.clearStartingItems();
      this.clearMiddleItems();
      this.clearFullItems();
    },
  },

  mounted() {
    this.clearItems();

    this.unwatch = this.$watch("getResponse", (newVal, oldVal) => {
      if (newVal === "success") {
        this.$swal({
          icon: "success",
          title: "Well done!",
          text: "Your items have been added successfully",
          confirmButtonText: "Continue",
        }).then(() => {
          this.clearPostResponse();
          this.$router.push("/");
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops!",
          text: "Could not add your items, please try again later",
          type: "warning",
          confirmButtonText: "Try again",
          showCloseButton: true,
        });
      }
    });
  },

  beforeDestroy() {
    this.unwatch();
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="2"
        v-for="(item, index) in items"
        :key="index"
        style="border: 1px solid blue"
        class="text-center d-flex align-center justify-center"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-img
                height="50"
                width="50"
                :src="`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/${item.image}`"
                class="ma-auto"
              />
              <p>{{ item.name }}</p>
            </div>
          </template>
          <ItemInfo :item="item" />
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemInfo from "./ItemInfo";

export default {
  props: ["title", "items"],

  components: { ItemInfo },
};
</script>

<style lang="scss" scoped>
</style>
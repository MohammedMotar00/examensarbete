<template>
  <div class="d-flex flex-column text-center black" style="max-width: 600px">
    <h2>{{ item.name }}</h2>
    <br />

    <p>
      <strong
        >Total price: {{ item.gold.total }} | Sell price
        {{ item.gold.sell }}</strong
      >
    </p>

    <div>
      <strong>Stats:</strong>
      <div v-for="(stats, name) in item.stats" :key="name">
        <span>
          <strong>
            {{
              name
                .split(/(?=[A-Z])/)
                .map((s) => s)
                .slice(1, -1)
                .join(" ")
            }}:
            {{ Math.floor(stats) !== 0 ? stats : stats * 100 + "%" }}
          </strong>
        </span>
      </div>
    </div>
    <br />

    <p v-if="item.plaintext" class="d-flex flex-column text-center">
      <strong>Info:</strong>
      {{ item.plaintext }}
    </p>

    <p v-if="item.description" class="d-flex flex-column text-center">
      <strong>Description:</strong>
      {{ item.description.replace(/ *\<[^>]*\>*/g, "") }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item", "total", "sell"],
};
</script>

<style lang="scss" scoped>
</style>
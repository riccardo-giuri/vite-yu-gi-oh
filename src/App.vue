<script>
  import TheHeader from "./components/TheHeader.vue";
  import CardsList from "./components/CardsList.vue";


  export default {
    components: {
      TheHeader,
      CardsList
    }
  }
</script>

<template>
  <TheHeader></TheHeader>

  <main>
    <CardsList></CardsList>
  </main>
</template>

<style lang="scss">
  @use "./sass/partials/variables" as *;

  main {
    background-color: $main_bg_color;
    min-height: calc(100vh - $header_min_height);
    padding: 3.5rem 0rem;
  }
</style>

<template>
  <div class="my-3">
    <div v-for="client in clients" :key="client.id">
      <Client :client="client" />
    </div>
  </div>
</template>

<script>
  import Client from "./Client";
  export default {
    name: "Clients",
    props: ["clients"],
    components: {
      Client
    }
  };
</script>

<style>
</style>
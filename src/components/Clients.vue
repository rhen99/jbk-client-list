<template>
  <div class="my-5">
    <div v-for="client  in clients" :key="client.id">
      <Client :client="client" @del-client="$emit('del-client', client.id)" />
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
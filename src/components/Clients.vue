<template>
  <div class="my-5">
    <div v-for="client  in clients" :key="client.id">
      <Client :client="client" @del-client="deleteClient" />
    </div>
  </div>
</template>

<script>
  import Client from "./Client";
  export default {
    name: "Clients",
    props: ["clients"],
    components: {
      Client,
    },
    methods: {
      deleteClient(deletedClient) {
        this.$emit("del-client", deletedClient);
      },
    },
  };
</script>

<style>
</style>
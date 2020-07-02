<template>
  <div class="my-3">
    <b-button variant="success" @click="modalShow = !modalShow">Add Client</b-button>
    <b-modal ref="addForm" v-model="modalShow" hide-footer></b-modal>
  </div>
</template>

<script>
  export default {
    name: "AddForm",
    data() {
      return {
        modalShow: false
      };
    }
  };
</script>

<style>
</style>
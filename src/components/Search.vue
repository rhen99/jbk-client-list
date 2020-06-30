<template>
  <b-form>
    <h4 class="my-2">Search Clients</h4>
    <b-form-group>
      <b-form-select :options="options" v-model="selected"></b-form-select>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="Write Here..." />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      selected: "name",
      options: [
        {
          text: "Search By Name",
          value: "name",
        },
        {
          text: "Search By Address",
          value: "address",
        },
        {
          text: "Search By Date",
          value: "date",
        },
      ],
    };
  },
};
</script>

<style></style>

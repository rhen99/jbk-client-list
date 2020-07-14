<template>
  <b-form>
    <h4 class="my-2">Filter Clients</h4>
    <b-form-group>
      <b-form-select :options="options" v-model="selected"></b-form-select>
    </b-form-group>
    <div>
      <b-form-group v-if="selected === 'date'">
        <b-form-datepicker @input="filterClients" v-model="search" id="date"></b-form-datepicker>
      </b-form-group>
      <b-form-group v-else-if="selected === 'place'">
        <b-form-input v-model="search" @update="filterClients" placeholder="Write Place..." />
      </b-form-group>
      <b-form-group v-else>
        <b-form-input v-model="search" @update="filterClients" placeholder="Write Name..." />
      </b-form-group>
    </div>
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
            text: "Filter By Name",
            value: "name"
          },
          {
            text: "Filter By Place",
            value: "place"
          },
          {
            text: "Filter By Date",
            value: "date"
          }
        ],
        search: null
      };
    },
    created() {},
    methods: {
      filterClients() {
        const filterOptions = {
          text: this.search,
          selected: this.selected
        };
        this.$emit("filter-clients", filterOptions);
      }
    }
  };
</script>

<style></style>

<template>
  <b-form>
    <h4 class="my-2">Search Clients</h4>
    <b-form-group>
      <b-form-select :options="options" v-model="selected"></b-form-select>
    </b-form-group>
    <div>
      <b-form-group v-if="selected === 'date'">
        <b-form-datepicker v-model="search" id="date"></b-form-datepicker>
      </b-form-group>
      <b-form-group v-else-if="selected === 'place'">
        <b-form-input v-model="search" placeholder="Write Place..." />
      </b-form-group>
      <b-form-group v-else>
        <b-form-input v-model="search" placeholder="Write Name..." />
      </b-form-group>
    </div>

    <b-button type="submit" variant="primary" block>Search</b-button>
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
            value: "name"
          },
          {
            text: "Search By Place",
            value: "place"
          },
          {
            text: "Search By Date",
            value: "date"
          }
        ],
        search: null
      };
    }
  };
</script>

<style></style>

<template>
  <div id="app">
    <Navbar />
    <b-container class="mt-3">
      <Search />
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Search from "./components/Search";
export default {
  name: "App",
  components: {
    Navbar,
    Search,
  },
};
</script>

<style></style>

<template>
  <div id="app">
    <Navbar />
    <b-container class="mt-3">
      <AddForm />
      <Search />
    </b-container>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Search from "./components/Search";
  import AddForm from "./components/AddForm";
  export default {
    name: "App",
    components: {
      Navbar,
      Search,
      AddForm
    }
  };
</script>

<style></style>

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
  import Clients from "./components/Clients";
  import db from "./components/firebaseInit";

  export default {
    name: "App",
    components: {
      Navbar,
      Search,
      AddForm,
      Clients
    },
    data(){
      return {
        clients: []
      }
    }
    created(){
      db.collection()
    }
  };
</script>

<style></style>

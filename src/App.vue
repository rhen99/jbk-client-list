<template>
  <div id="app">
    <Navbar />
    <b-container class="mt-3">
      <AddForm />
      <Search />
      <Clients :clients="clients" @del-client="deleteClient" />
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
    methods: {
      deleteClient(id) {
        db.collection("clients")
          .doc(id)
          .delete()
          .then(() => {
            this.clients.filter(client => {});
          })
          .catch(err => console.log(err));
      }
    },
    data() {
      return {
        clients: []
      };
    },
    created() {
      db.collection("clients")
        .get()
        .then(qss => {
          qss.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              place: doc.data().place,
              payment: doc.data().payment,
              date: doc.data().date,
              facebook: doc.data().facebook,
              gamot: doc.data().gamot,
              gamot_qtty: doc.data().gamot_qtty,
              quickheal: doc.data().quickheal,
              quickheal_qtty: doc.data().quickheal_qtty
            };
            this.clients.push(data);
          });
        });
    }
  };
</script>

<style></style>

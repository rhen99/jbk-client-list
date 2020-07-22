<template>
  <b-container class="mt-3">
    <AddForm @add-client="addClient" />
    <Search @filter-clients="filterClients" />
    <Clients :clients="clients" @del-client="deleteClient" />
  </b-container>
</template>

<script>
  import Search from "./Search";
  import AddForm from "./AddForm";
  import Clients from "./Clients";
  import db from "./firebaseInit";

  export default {
    name: "ClientList",
    components: {
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
            this.clients = this.clients.filter(client => client.id !== id);
          })
          .catch(err => console.log(err));
      },
      fetchClients() {
        db.collection("clients")
          .get()
          .then(qss => {
            qss.forEach(doc => {
              const data = {
                id: doc.id,
                name: doc.data().name,
                place: doc.data().place,
                payment: doc.data().payment,
                heads: doc.data().heads,
                date: doc.data().date,
                facebook: doc.data().facebook,
                gamot: doc.data().gamot,
                gamot_qtty: doc.data().gamot_qtty,
                quickheal: doc.data().quickheal,
                quickheal_qtty: doc.data().quickheal_qtty,
                images: doc.data().images
              };
              this.clients.push(data);
            });
          });
      },
      addClient(newTodo) {
        db.collection("clients")
          .add({
            name: newTodo.name,
            place: newTodo.place,
            payment: newTodo.payment,
            date: newTodo.date,
            gamot: newTodo.gamot,
            gamot_qtty: newTodo.gamot_qtty,
            quickheal: newTodo.quickheal,
            quickheal_qtty: newTodo.quickheal_qtty,
            facebook: newTodo.facebook,
            heads: newTodo.heads,
            images: newTodo.images
          })
          .then(() => {
            this.clients = [];
            this.fetchClients();
          });
      },
      filterClients(obj) {
        if (obj.text === "") {
          this.clients = [];
          this.fetchClients();
        } else {
          this.clients = this.clients.filter(client => {
            const q = new RegExp(obj.text, "gi");
            return client[obj.selected].match(q);
          });
        }
      }
    },
    data() {
      return {
        clients: []
      };
    },
    created() {
      this.fetchClients();
    }
  };
</script>

<style></style>

<template>
  <div class="card my-2">
    {{client.images}}
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">{{client.name}}</h6>
      <div class="card-text my-2">
        <span class="font-weight-bold">{{client.place}}</span>
        <span class="text-secondary font-weight-bold mx-1">{{client.date}}</span>
        <span class="text-primary font-weight-bold mx-1">{{client.heads}}</span>

        <span class="font-weight-bold mx-1">head(s)</span>

        <span class="text-success font-weight-bold mx-1">PHP {{client.payment}}</span>
        <span class="font-weight-bold mx-1">Gamot?</span>
        <span
          class="text-primary font-weight-bold mx-1"
        >{{client.gamot}} {{client.gamot === 'yes' ? client.gamot_qtty+ ' pc.': null}}</span>
        <span class="font-weight-bold mx-1">QuickHeal?</span>
        <span
          class="text-primary font-weight-bold mx-1"
        >{{client.quickheal}} {{client.quickheal === 'yes' ? client.quickheal_qtty+ ' pc.': null}}</span>
      </div>
      <b-button class="mr-1" :href="client.facebook" variant="primary">Open Profile</b-button>
      <b-button @click="modalShow = !modalShow" class="mr-1" variant="success">View Iamges</b-button>
      <b-button variant="danger" @click="$emit('del-client', client.id)">
        <b-icon-trash-fill></b-icon-trash-fill>
      </b-button>
    </div>
    <b-modal v-model="modalShow" hide-footer></b-modal>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/storage";
  export default {
    name: "Client",
    props: ["client"],

    data() {
      return {
        modalShow: false,
        imageLinks: []
      };
    },
    created() {
      this.client.images.forEach(image => {
        firebase
          .storage()
          .ref()
          .child(`images/${image}`)
          .getDownloadURL()
          .then(url => {
            this.imageLinks.push(url);
          });
      });
      console.log(this.imageLinks);
    }
  };
</script>

<style>
</style>
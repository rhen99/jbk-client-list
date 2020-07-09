<template>
  <b-card :sub-title="client.name" :img-src="imagePath" img-left img-width="28%">
    <b-card-text>
      <span class="font-weight-bold">{{client.place}}</span>
      <span class="text-success font-weight-bold mx-1">PHP {{client.payment}}</span>
      <span class="text-secondary font-weight-bold mx-1">{{client.date}}</span>
      <span class="font-weight-bold mx-1">Gamot?</span>
      <span
        class="text-primary font-weight-bold mx-1"
      >{{client.gamot}} {{client.gamot === 'yes' ? client.gamot_qtty+ ' pc.': null}}</span>
      <span class="font-weight-bold mx-1">QuickHeal?</span>
      <span
        class="text-primary font-weight-bold mx-1"
      >{{client.quickheal}} {{client.quickheal === 'yes' ? client.quickheal_qtty+ ' pc.': null}}</span>
    </b-card-text>
    <b-button variant="danger">
      <b-icon-trash-fill></b-icon-trash-fill>
    </b-button>
  </b-card>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/storage";
  export default {
    name: "Client",
    props: ["client"],
    data() {
      return {
        imagePath: null
      };
    },
    created() {
      firebase
        .storage()
        .ref()
        .child(`images/${this.client.image}`)
        .getDownloadURL()
        .then(url => {
          this.imagePath = url;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
</script>

<style>
</style>
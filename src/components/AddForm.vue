<template>
  <div class="my-3">
    <b-button variant="success" @click="modalShow = !modalShow">Add Client</b-button>
    <b-modal ref="addForm" v-model="modalShow" hide-footer>
      <div class="d-block">
        <b-form @submit.prevent="saveClient">
          <b-form-group label="Client Name" label-for="name">
            <b-form-input id="name" v-model="name"></b-form-input>
          </b-form-group>

          <b-form-group label="Place" label-for="place">
            <b-form-input id="place" v-model="place"></b-form-input>
          </b-form-group>

          <b-form-group label="Bayad" label-for="payment">
            <b-form-spinbutton v-model="payment" id="payment" step="1" min="2500" max="10000"></b-form-spinbutton>
          </b-form-group>

          <b-form-group label="Date" label-for="date">
            <b-form-datepicker v-model="date" id="date"></b-form-datepicker>
          </b-form-group>

          <b-form-group label="Image">
            <b-form-file
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              v-model="image"
            ></b-form-file>
          </b-form-group>

          <b-form-group>
            <b-form-checkbox unchecked-value="no" value="yes" v-model="gamot">Kumuha ng Co-Amox?</b-form-checkbox>
          </b-form-group>

          <b-form-group label="Ilang Co-Amox">
            <b-form-spinbutton
              step="1"
              min="1"
              max="30"
              :disabled="gamot === 'yes' ? false : true"
              vertical
              v-model="gamot_qtty"
            ></b-form-spinbutton>
          </b-form-group>

          <b-form-group>
            <b-form-checkbox
              unchecked-value="no"
              value="yes"
              v-model="quickheal"
            >Kumuha ng Quick Heal?</b-form-checkbox>
          </b-form-group>

          <b-form-group label="Ilang QuickHeal">
            <b-form-spinbutton
              step="1"
              min="1"
              max="30"
              :disabled="quickheal === 'yes' ? false : true"
              vertical
              v-model="quickheal_qtty"
            ></b-form-spinbutton>
          </b-form-group>
          <b-button type="submit" block variant="success">Save Client</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import storage from "firebase/app";
  import "firebase/storage";
  import db from "./firebaseInit";
  export default {
    name: "AddForm",
    data() {
      return {
        modalShow: false,
        payment: 0,
        name: "",
        place: "",
        gamot: "no",
        quickheal: "no",
        gamot_qtty: 0,
        quickheal_qtty: 0,
        date: "",
        image: null
      };
    },
    methods: {
      saveClient() {
        this.gamot_qtty = this.gamot === "no" ? null : this.gamot_qtty;
        this.quickheal_qtty =
          this.quickheal === "no" ? null : this.quickheal_qtty;

        const storageRef = storage.storage().ref(`images/${this.image.name}`);

        storageRef.put(this.image);

        db.collection("client")
          .add({
            name: this.name,
            place: this.place,
            payment: this.payment,
            date: this.date,
            gamot: this.gamot,
            gamot_qtty: this.gamot_qtty,
            quickheal: this.quickheal,
            quickheal_qtty: this.quickheal_qtty,
            image: this.image.name
          })
          .then(() => {
            this.payment = 0;
            this.name = "";
            this.place = "";
            this.gamot = "no";
            this.quickheal = "no";
            this.gamot_qtty = 0;
            this.quickheal_qtty = 0;
            this.date = "";
            this.image = null;
          });
      }
    }
  };
</script>

<style></style>

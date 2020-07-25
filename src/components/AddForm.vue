<template>
  <div class="my-3">
    <b-button variant="success" @click="modalShow = !modalShow">Add Client</b-button>
    <b-modal ref="addForm" v-model="modalShow" hide-footer>
      <div class="d-block">
        <b-form @submit.prevent="saveClient">
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <p>Added Successfully</p>
          </b-alert>
          <b-form-group label="Client Name" label-for="name">
            <b-form-input id="name" v-model="name"></b-form-input>
          </b-form-group>

          <b-form-group label="Place" label-for="place">
            <b-form-input id="place" v-model="place"></b-form-input>
          </b-form-group>

          <b-form-group label="Bayad" label-for="payment">
            <b-form-spinbutton v-model="payment" id="payment" step="1" min="2500" max="10000"></b-form-spinbutton>
          </b-form-group>

          <b-form-group label="Ilang aso" label-for="heads">
            <b-form-spinbutton v-model="heads" id="heads" step="1" min="1" max="20"></b-form-spinbutton>
          </b-form-group>

          <b-form-group label="Date" label-for="date">
            <b-form-datepicker v-model="date" id="date"></b-form-datepicker>
          </b-form-group>

          <b-form-group label="Facebook Link" label-for="facebook">
            <b-form-input id="facebook
            " v-model="facebook"></b-form-input>
          </b-form-group>

          <b-form-group label="Crop Images" label-for="images">
            <b-form-file multiple style="overflow: hidden" id="images" v-model="images"></b-form-file>
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
          <b-button type="submit" block variant="success">Add Client</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/storage";
  import { v4 as uuidv4 } from "uuid";
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
        dismissSecs: 10,
        dismissCountDown: 0,
        facebook: "",
        heads: 1,
        images: [],
      };
    },
    methods: {
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      saveClient(e) {
        e.preventDefault();
        this.gamot_qtty = this.gamot === "no" ? null : this.gamot_qtty;

        this.quickheal_qtty =
          this.quickheal === "no" ? null : this.quickheal_qtty;

        this.images = this.images.map((image) => {
          const originalName = image.name.split(".");
          const newName = `${originalName[0]}${Date.now()}${uuidv4()}.${
            originalName[1]
          }`;
          firebase.storage().ref().child(`images/${newName}`).put(image);
          return newName;
        });
        const newTodo = {
          name: this.name,
          place: this.place,
          payment: this.payment,
          date: this.date,
          gamot: this.gamot,
          gamot_qtty: this.gamot_qtty,
          quickheal: this.quickheal,
          quickheal_qtty: this.quickheal_qtty,
          facebook: this.facebook,
          heads: this.heads,
          images: this.images,
        };
        this.$emit("add-client", newTodo);
        this.payment = 0;
        this.name = "";
        this.place = "";
        this.gamot = "no";
        this.quickheal = "no";
        this.gamot_qtty = 1;
        this.quickheal_qtty = 1;
        this.date = "";
        this.facebook = "";
        this.heads = 1;
        this.images = [];
        this.showAlert();
      },
    },
  };
</script>

<style></style>

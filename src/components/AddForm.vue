<template>
  <div class="my-3">
    <b-button variant="success" @click="modalShow = !modalShow">Add Client</b-button>
    <b-modal ref="addForm" v-model="modalShow" hide-footer>
      <div class="d-block">
        <b-form>
          <b-form-group label="Client Name" label-for="name">
            <b-form-input id="name"></b-form-input>
          </b-form-group>

          <b-form-group label="Place" label-for="place">
            <b-form-input id="place"></b-form-input>
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
  export default {
    name: "AddForm",
    data() {
      return {
        modalShow: false,
        payment: 0,
        name: "",
        gamot: "no",
        quickheal: "no",
        gamot_qtty: 0,
        quickheal_qtty: 0,
        date: ""
      };
    }
  };
</script>

<style>
</style>
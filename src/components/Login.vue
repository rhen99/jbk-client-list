<template>
  <b-container class="mt-5" @submit.prevent="login">
    <b-form>
      <b-form-group label="Enter Password" label-for="password">
        <b-form-input type="password" id="password" v-model="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" block variant="primary">Sign in</b-button>
    </b-form>
  </b-container>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  export default {
    name: "Login",
    data() {
      return {
        email: "frendly_shot@gmail.com",
        password: null
      };
    },
    methods: {
      login() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            () => {
              alert("You are logged in");
              this.$router.go({ path: this.$router.path });
            },
            err => {
              alert(err.message);
            }
          );
      }
    }
  };
</script>

<style></style>

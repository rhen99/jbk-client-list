<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand>Client List</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="logout">
          <b-icon-caret-left-fill></b-icon-caret-left-fill>Log Out
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  export default {
    name: "Navbar",
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      };
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push("/login");
          });
      }
    }
  };
</script>

<style scoped></style>

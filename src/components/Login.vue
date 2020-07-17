<template>
  <b-container class="mt-5">
    <b-form>
      <b-form-group label="Password" label-for="password">
        <b-form-input type="password" id="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" block variant="primary">Sign in</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null
      };
    }
  };
</script>

<style></style>

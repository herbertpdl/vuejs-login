<template>
  <b-container fluid>
    <b-row>
      <b-col sm="8" md="4" offset-md="4" offset-sm="2">
        <h1>Sign In</h1>
        <div class="login-container">
          <b-form @submit.prevent="login">
            <b-form-group>
              <b-form-input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="email" 
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
          <p class="sign-up">Don't have any account? <router-link to="/register">Sign-up</router-link></p>
        </div>
      </b-col> 
    </b-row>
  </b-container>
</template>

<script>

export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      let email = this.email 
      let password = this.password
      this.$store.dispatch('login', { email, password })
      .then(() => this.$router.push('/users'))
    }
  }
}
</script>

<style lang="scss">
  .login-container{
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 5px;
    padding: 30px;
    button {
      width: 100%;
    }
  }
  .sign-up{
    color: #495057;
    margin: 20px 0 0 0;
  }
</style>

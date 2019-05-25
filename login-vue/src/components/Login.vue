<template>
  <b-container fluid>
    <b-row>
      <b-col sm="8" md="4" offset-md="4" offset-sm="2">
        <h1>Sign In</h1>
        <div class="login-container">
          <b-form @submit="onSubmit">
            <b-form-group>
              <b-form-input
                id="username"
                v-model="form.username"
                type="text"
                required
                placeholder="Username" 
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                id="password"
                v-model="form.password"
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
      form: {
        username: '',
        password: ''
      }
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

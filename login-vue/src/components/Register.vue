<template>
  <b-container fluid>
    <b-row>
      <b-col sm="8" md="4" offset-md="4" offset-sm="2">
        <h1>Register</h1>
        <div class="register-container">
          <b-form @submit.prevent="register">
            <b-form-group label="Name" label-for="name">
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                required
                :state="name? nameValidation : ''"
                placeholder="Name"
              ></b-form-input>
              <b-form-invalid-feedback :state="name? nameValidation : ''">
                This field must be at least 3 characters long.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Username" label-for="username">
              <b-form-input
                id="username"
                v-model="username"
                type="text"
                required
                :state="username? usernameValidation : ''"
                placeholder="Username" 
              ></b-form-input>
              <b-form-invalid-feedback :state="username? usernameValidation : ''">
                This field must be at least 3 characters long.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="email"
                type="email"
                required
                :state="email? emailValidation : ''"
                placeholder="E-mail" 
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="Password" 
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Register</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  data(){
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    nameValidation() {
      return this.name.length >= 3
    },
    usernameValidation() {
      return this.username.length >= 3
    },
    emailValidation() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', data)
      .then(() => this.$router.push('/users'))
    }
  }
}
</script>
 
<style lang="scss">
  .register-container{
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 5px;
    color: #495057;
    padding: 30px;
  }
  label{
    text-align: left;
  }
  button{
    width: 100%;
  }
</style>

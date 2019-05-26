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
                placeholder="Name"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Username" label-for="username">
              <b-form-input
                id="username"
                v-model="username"
                type="text"
                required
                placeholder="Username" 
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="email"
                type="text"
                required
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
    validation() {
      return this.form.name.length > 4 && this.form.name.length < 13
    }
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

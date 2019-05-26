<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="menu">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Login</router-link>
                <router-link to="/users">Users</router-link>
                <router-link to="/register">Register</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
                <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
          </b-navbar-nav>
          
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function ( ) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('logout')
          }
          throw err;
        });
      });
    }
  }
</script>

<style lang="scss">
  #app {
    background: linear-gradient(180deg, rgba(44,62,80,1) 0%, rgba(65,184,131,1) 100%);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    padding-bottom: 50px;
    height: 100vh;
    overflow: scroll;
  }
  .menu{
    margin-bottom: 50px;
    a{
      color: #ffffff;
      cursor: pointer;
      margin: 0 10px;
      padding: 0;
      transition: .5s all;
      &:hover{
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
      }
    }
    @media only screen and(max-width: 767px){
      text-align: left; 
      button{
        margin: 10px 0;
        width: 60px;
      }
    }
  }
  .loader {
    display: inline-block;
    position: absolute;
    right: 10px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin .5s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

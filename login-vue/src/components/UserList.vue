<template>
  <b-container fluid>
    <b-row>
      <b-col sm="8" md="8" offset-md="2" offset-sm="2">
        <h1>Users list</h1>
        <div class="table-container">
          <!-- {{ info }} -->
          <b-table striped hover :items="info? info.users : info" :fields="fields"></b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      fields: [
        {key: 'name', sortable: true}, 'email'],
      info: null,
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3000/users')
      .then((response) => {
        this.info = response.data
      })
  },
}
</script>

<style lang="scss">
  .table-container{
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 5px;
    color: #495057;
    padding: 30px;
    text-align: left;
  }
</style>

<template>
  <Header />
  <h1>Welcome back, {{ name }}</h1>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
      <td>Delete</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/' + item.id">Update</router-link></td>
      <button class="del" v-on:click="deleteRecord(item.id)">Delete</button>
    </tr>
  </table>
</template>

<script>
import Header from "./HeaderView.vue";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRecord(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      console.log(result);
      if (result.status == 200) {
        this.loadData() // After deleting from the API, reloads the data in the table
      }
    },
    async loadData() {
      // If user info is not in local storage, user will not be
      //   able to go to this page & redirect to sign up
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      this.name = JSON.parse(user).name; // Displays user's name on home page
      
      // Grabs the restaurant list from API and writes it to the
      //  local variable "Restaurant". Above, the template uses
      //  this variable to display the table dynamically
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data;
    },
  },
  async mounted() {
      this.loadData() // Loads API data on page nav (lifecycle)
  },
};
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>

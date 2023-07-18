<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: lightslategray;
  overflow: hidden;
}
.nav a {
  float: left;
  color: whitesmoke;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 10px;
}
.nav a:hover {
  background-color: #ddd;
  color: #333;
}
</style>

<template>
  <Header />
  <h1>Update a Restaurant</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="this.restaurant.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter Address"
      v-model="this.restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact"
      v-model="this.restaurant.contact"
    />
    <button type="button" v-on:click="updateRestaurant">Update</button>
  </form>
</template>

<script>
import Header from "./HeaderView.vue";
import axios from "axios";

export default {
  name: "UpdateView",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    // If user info is not in local storage, user will not be
    //   able to go to this page & redirect to sign up
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    // Builds URL w/ params from home page "update" button from
    //  API w/ respective ID
    const res = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );

    // Using v-model in the template, this pre-fills the form data
    //  for the update feature
    this.restaurant = res.data;
  },
};
</script>

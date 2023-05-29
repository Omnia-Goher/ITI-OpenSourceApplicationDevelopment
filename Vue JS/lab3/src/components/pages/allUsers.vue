<template>
  <div class="w-75 mx-auto">
      <h2 class="mt-5">ALL Users</h2>
    <table class="table table-striped mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td class="text-center">
              <button class="btn btn-sm btn-primary me-2 text-center"> <router-link :to="`/users/${user.id}`" class="text-decoration-none text-center text-white px-5">More</router-link></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
name: "allUsers",
setup() {
  const users = ref([]);

  const getallusers = function() {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data);
        users.value = res.data; // Update the value of the reactive reference
      })
      .catch((err) => console.log(err));
  };
  getallusers(); // Call the function to fetch users
  return {
    users,
  };
},
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

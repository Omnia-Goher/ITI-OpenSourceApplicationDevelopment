<template>
    <div class="w-75 mx-auto">
        <h2 class="mt-5">All Users</h2>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.gender }}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-info me-2 text-center"> <router-link :to="`/users/${user.id}`" class="text-decoration-none text-center text-white">View</router-link></button>
                <button class="btn btn-sm btn-danger me-2 text-center" @click="deleteUser(user.id)">Delete</button>
                <button class="btn btn-sm btn-primary me-2 text-center"> <router-link :to="`/users/update/${user.id}`" class="text-decoration-none text-center text-white">Update</router-link></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "allUsers",
    data() {
      return {
        users: [] 
      };
    },
    created() {
      this.getallusers();
    },
    methods: {
        
      getallusers() {
        axios
          .get("http://localhost:3000/users")
          .then((res) => {
            this.users = res.data; 
          })
          .catch((err) => console.log(err));
      },
    
    deleteUser(id){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    }
    },
  };
  </script>
  
  <style scoped>

  </style>
  
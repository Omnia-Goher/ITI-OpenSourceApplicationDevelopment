<template>
    <div class="login-box">
        <form @submit.prevent="updateUser" >
            <div class="user-box">
                <input required="" v-model="first_name" name="Firstname" type="text" autoComplete="off" />
                <label>First Name</label>
            </div>
            <div class="user-box">
                <input v-model="last_name" name="lastName" required="" type="text" autoComplete="off" />
                <label>Last Name</label>
            </div>
            <div class="user-box">
                <input v-model="gender" name="gender" required="" type="text" autoComplete="off" />
                <label>Gender</label>
            </div>
            <center>
                <button type="submit">
                    Update
                    <span></span>
                </button>
            </center>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "userUpdateApp",
    data() {
        return {
            id: "",
            first_name: "",
            last_name: "",
            gender: "",
        };
    },
    created() {
        this.getuserById();
    },
    methods: {
        getuserById() {
            this.id = this.$route.params.id;
            console.log(this.id);
            axios
                .get(` http://localhost:3000/users/${this.id}`)
                .then((res) => {
                    this.id = res.data.id;
                    this.first_name = res.data.first_name;
                    this.last_name = res.data.last_name;
                    this.gender = res.data.gender;
                })
                .catch((err) => console.log(err));
        },
        updateUser() {
            const user = {
                id: this.id,
                first_name: this.first_name,
                last_name: this.last_name,
                gender: this.gender
            };

            axios.put(`http://localhost:3000/users/${this.id}`, user)
                .then(response => {
                    console.log('User:', response.data);
                    this.$router.push('/');

                })
                .catch(error => {
                    console.error('Update failed:', error);

                });
        }
    },
};
</script>

<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #f8f9fa;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
  top: -20px;
  left: 0;
  color: black;
  font-size: 12px;
}

.login-box form button {
  all: unset;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: black;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box button:hover {
  background: #000000;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #000000,
    0 0 25px #000000,
    0 0 50px #000000,
    0 0 100px #000000;
}

.login-box button span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000000);
  animation: btn-anim1 2s linear infinite;
}
</style>
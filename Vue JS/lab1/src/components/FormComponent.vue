<template>
    <div>
        <div class="text-center mt-5">
            <div class="radio-input justify-content-center">
                <input type="radio" id="value-1" name="value-radio" value="value-1" :class="HeaderBtn"
                    @click="checkValue('Form')">
                <label for="value-1">Form</label>
                <input type="radio" id="value-2" name="value-radio" value="value-2" :class="HeaderBtn"
                    @click="checkValue('Admins')">
                <label for="value-2">Admin</label>
                <input type="radio" id="value-3" name="value-radio" value="value-3" :class="HeaderBtn"
                    @click="checkValue('Users')">
                <label for="value-3">User</label>
            </div>
        </div>
        <div v-if="btn === 'Admins'">
            <AdminsComponent :filterAdmins="filterAdmins" @deletingAdmin="DeleteAdmin" />
        </div>
        <div v-else-if="btn === 'Users'">
            <UsersComponent :filterUsers="filterUsers" @deletingUser="DeleteUser" />
        </div>
        <div v-else class="d-flex justify-content-center" style="margin-top: 100px;">
            <!-- Form Structure -->
            <form class="form card" @submit.prevent="AddNew">
                <div class="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor"
                            d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z">
                        </path>
                    </svg>
                    <h1 class="form_heading">Registration</h1>
                </div>
                <div class="field">
                    <label for="name">Name</label>
                    <input class="input" name="name" type="text" placeholder="Enter Name" id="name" v-model.trim.lazy="formValues.name">
                </div>
                <div class="field">
                    <label for="age">Age</label>
                    <input class="input" name="age" type="number" placeholder="Enter Age" id="age" v-model.number.lazy="formValues.age">
                </div>
                <div class="field">
                    <label for="role">Role</label>
                    <select v-model.lazy="formValues.role" placeholder="Choose Role" class="input" name="role" >
                        <option disabled selected value="">Choose Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <div class="field">
                    <button class="button" id="add" type="submit">ADD</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import AdminsComponent from './AdminsComponent.vue';
import UsersComponent from './UsersComponent.vue';

export default (await import('vue')).defineComponent({
    name: "FormComponent",
    components: {
        AdminsComponent,
        UsersComponent
    },
    data() {
        return {
            btn: 'Form',
            formDataArray: [],
            formValues: {
                name: '',
                age: '',
                role: ''
            }
        }
    },
    methods: {
        AddNew() {
            this.formDataArray.push(this.formValues);
            this.formValues = {
                name: '',
                age: '',
                role: ''
            }
        },
        checkValue(val) {
            if (val === 'Form') this.btn = 'Form';
            else if (val === 'Admins') this.btn = 'Admins';
            else if (val === 'Users') this.btn = 'Users';
            else this.btn = 'Form';
        },
        DeleteAdmin(index) {
            this.filterAdmins.splice(index, 1);
        },
        DeleteUser(index) {
            this.filterUsers.splice(index, 1);
        }
    },
    computed: {
        filterAdmins() {
            return this.formDataArray.filter((d) => d.role === 'Admin')
        },
        filterUsers() {
            return this.formDataArray.filter((d) => d.role === 'User')
        }
    }

});
</script>

<style scoped>
.radio-input {
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 600;
}

.radio-input input[type="radio"] {
    display: none;
}

.radio-input label {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(106, 96, 166);
    background-color: #fff;
    border-radius: 5px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.radio-input label:hover {
    background-color: rgba(106, 96, 166, 0.149);
    ;
}

.radio-input label:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #ccc;
    transition: all 0.3s ease-in-out;
}

.radio-input input[type="radio"]:checked+label:before {
    background-color: #fff;
    top: 0;
}

.radio-input input[type="radio"]:checked+label {
    background-color: rgb(106, 96, 166);
    ;
    color: #fff;
    border-color: rgb(237, 237, 240);
    animation: radio-translate 0.5s ease-in-out;
}

@keyframes radio-translate {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateX(0);
    }
}

.card {
  width: 25%;
  height: auto;
  background: #F4F6FB;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
}

.form {
  padding: 25px;
}

.card_header {
  display: flex;
  align-items: center;
}

.card svg {
  color: #7878bd;
  margin-bottom: 20px;
  margin-right: 5px;
}

.form_heading {
  padding-bottom: 20px;
  font-size: 21px;
  color: #7878bd;
}

.field {
  padding-bottom: 10px;
}

.input {
  border-radius: 5px;
  background-color: #e9e9f7;
  padding: 5px;
  width: 100%;
  color: #7a7ab3;
  border: 1px solid #dadaf7
}

.input:focus-visible {
  outline: 1px solid #aeaed6;
}

.input::placeholder {
  color: #bcbcdf;
}

label {
  color: #B2BAC8;
  font-size: 14px;
  display: block;
  padding-bottom: 4px;
}

button {
  background-color: #7878bd;
  margin-top: 10px;
  font-size: 14px;
  padding: 7px 30px;
  height: auto;
  font-weight: 500;
  color: white;
  border: none;
}

button:hover {
  background-color: #5f5f9c;
}
</style>
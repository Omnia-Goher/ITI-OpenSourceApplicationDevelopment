<template>
    <div class="container d-flex text-center mt-5  justify-content-center align-self-center align-items-center">
        <div class="card w-25" style="height:auto; margin-top: 100px;">
        <img class="card-img" style="background-repeat: no-repeat; background-size: cover;" src="../../assets/images/personal.jpg" alt="img" />
        <div class="card-info">
            <p class="text-title">{{ first_name }} {{ last_name }}</p>
            <p class="text-body">{{ gender }}</p>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "userdetailsApp",
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
                    console.log(res.data);
                    this.id = res.data.id;
                    this.first_name = res.data.first_name;
                    this.last_name = res.data.last_name;
                    this.gender = res.data.gender;
                })
                .catch((err) => console.log(err));
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
 width: 190px;
 height: 254px;
 padding: .8em;
 background: #f5f5f5;
 position: relative;
 overflow: visible;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-img {
 background-color: #ffcaa6;
 height: 40%;
 width: 100%;
 height: 230px;
 border-radius: .5rem;
 transition: .3s ease;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-info {
 padding-top: 10%;
}

svg {
 width: 20px;
 height: 20px;
}

/*Text*/
.text-title {
 font-weight: 900;
 font-size: 1.2em;
 line-height: 1.5;
}

.text-body {
 font-size: .9em;
 padding-bottom: 10px;
}

/*Hover*/
.card-img:hover {
 transform: translateY(-25%);
 box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 47px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

</style>

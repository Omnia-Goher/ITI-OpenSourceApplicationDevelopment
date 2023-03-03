const patterns = {
    username: /^[a-zA-z0-9]{4,12}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    address: /^[a-zA-z]{4,20}$/i,
    phone: /^\d{11}$/
}
var form = document.querySelector("form");
var inputs = document.querySelectorAll(".form-control")
var array = Object.values(inputs);

form.addEventListener("submit", (e) => {
    if (!array.every(submitValidation)) {
        e.preventDefault();
    }
})

inputs.forEach(input => {
    input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.getAttribute("name")])
    })
});

function validate(field,regex){
    if(field.getAttribute("name") == "username"){
        if(regex.test(field.value)){
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            document.getElementById("fial-username").classList.add("d-none");
        }else{
            field.classList.add("is-invalid")
            field.classList.remove("is-valid")
            document.getElementById("fial-username").classList.remove("d-none");
        }
    }else if(field.getAttribute("name") == "email"){
        if(regex.test(field.value)){
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            document.getElementById("fial-email").classList.add("d-none");
        }else{
            field.classList.add("is-invalid")
            field.classList.remove("is-valid")
            document.getElementById("fial-email").classList.remove("d-none");
        }
    }else if(field.getAttribute("name") == "password"){
        if(regex.test(field.value)){
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            document.getElementById("fial-password").classList.add("d-none");
        }else{
            field.classList.add("is-invalid")
            field.classList.remove("is-valid")
            document.getElementById("fial-password").classList.remove("d-none");
        }
    }else if(field.getAttribute("name") == "address"){
        if(regex.test(field.value)){
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            document.getElementById("fial-address").classList.add("d-none");
        }else{
            field.classList.add("is-invalid")
            field.classList.remove("is-valid")
            document.getElementById("fial-address").classList.remove("d-none");
        }
    }else if(field.getAttribute("name") == "phone"){
        if(regex.test(field.value)){
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            document.getElementById("fial-phone").classList.add("d-none");
        }else{
            field.classList.add("is-invalid")
            field.classList.remove("is-valid")
            document.getElementById("fial-phone").classList.remove("d-none");
        }
    }
}

function submitValidation(input) {
    if(input.classList.contains("is-valid")){
        return true
    }else{
        return false
    }
}
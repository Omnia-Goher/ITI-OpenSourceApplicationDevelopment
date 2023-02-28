var username = document.getElementById("name")
var email = document.getElementById("email")
function storeData(){
    localStorage.setItem("name",username.value)
    localStorage.setItem("email",email.value)
}
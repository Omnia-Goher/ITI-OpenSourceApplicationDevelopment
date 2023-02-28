let username = prompt("Enter username : ")

let password = prompt("Enter password : ")

if(username !== "admin" &&  password == "421$$" ){
    alert("Please Enter Correct Username!!")
}
else if(password !== "421$$" && username == "admin"){
    alert("Please Enter Correct Password!!")
}
else if(username !== "admin" && password !== "421$$"){
    alert("Please Enter Correct Username and Password!!")
}else{
    alert("Welcome Login Sucess.")
}
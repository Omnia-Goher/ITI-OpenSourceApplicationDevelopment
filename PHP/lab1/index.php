<?php 
require_once("config.php");
require_once("functions.php");

if(!empty($_POST)){
    if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"]) ){
        if(empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])){
            $error_msg = "Please Enter Name!!";
        }
        elseif(empty($_POST["email"]) && !empty($_POST["name"]) && !empty($_POST["message"])){
            $error_msg = "Please Enter Email!!";
        }
        elseif(empty($_POST["message"]) && !empty($_POST["email"]) && !empty($_POST["name"])){
            $error_msg = "Please Enter Nessage!!";
        }else{
            $error_msg = "Please Enter all fields!!";
        }
    }
    elseif(strlen($_POST["name"]) > MAX_NAME){
        $error_msg = "Name should be less than 100 charchters";
    }
    elseif(!filter_var($_POST["email"],FILTER_VALIDATE_EMAIL)){
        $error_msg = "Email is not valid (example@gmail.com)";
    }
    elseif(strlen($_POST["message"]) > MAX_MESSAGE){
        $error_msg = "Message should be less than 255 charchters";
    }
    else{
        $error_msg = "<h3>". WELCOME_MESSAGE ."</h3> </br></br>
                  <strong>Name: </strong>" .$_POST["name"] ."</br>".
                  "<strong>Email: </strong>" .$_POST["email"] ."</br>".
                  "<strong>Message: </strong>" .$_POST["message"];
        die($error_msg);
    }
}
require_once("view/form.php");
?>
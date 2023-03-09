<?php
  function validate($input){
    if(isset($_POST[$input]) && !empty($_POST[$input])){
      return $_POST[$input];
    }
  }

  function error(){
    if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["message"]) ){
      if(empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])){
          return "Please Enter Name!!";
      }
      elseif(empty($_POST["email"]) && !empty($_POST["name"]) && !empty($_POST["message"])){
          return "Please Enter Email!!";
      }
      elseif(empty($_POST["message"]) && !empty($_POST["email"]) && !empty($_POST["name"])){
        return "Please Enter Nessage!!";
      }else{
        return "Please Enter all fields!!";
      }
    }
    elseif(strlen($_POST["name"]) > MAX_NAME){
      return "Name should be less than 100 charchters";
    }
    elseif(!filter_var($_POST["email"],FILTER_VALIDATE_EMAIL)){
      return "Email is not valid (example@gmail.com)";
    }
    elseif(strlen($_POST["message"]) > MAX_MESSAGE){
      return "Message should be less than 255 charchters";
    }
    else{
      return "";
    }
  }
  
  function save_to_file(){
    $fb=fopen(__Saving_File_,"a+");
    $date = date("F j Y g:i a");
    $ip = $_SERVER['REMOTE_ADDR'];
    $email = $_POST["email"];
    $name = $_POST["name"];
    $user = "$date,$ip,$email,$name";
    fwrite($fb, $user . PHP_EOL);
    fclose($fb);
  }

  function convert_file_to_array() {
    return file(__Saving_File_);
}
  
  function welcome_message()
  {
      return  
      "<h3>". WELCOME_MESSAGE ."</h3> </br></br>
      <strong>Name: </strong>" .$_POST["name"] ."</br>".
      "<strong>Email: </strong>" .$_POST["email"] ."</br>".
      "<strong>Message: </strong>" .$_POST["message"];
  }
?>
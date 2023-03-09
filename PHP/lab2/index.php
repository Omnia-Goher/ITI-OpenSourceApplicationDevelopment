<?php 
require_once("config.php");
require_once("functions.php");

$error_msg="";

if(!empty($_POST)){
    $error_msg = error();
    if(empty($error_msg)){
        save_to_file();
        die(welcome_message());
    }
}

$parameter = isset($_GET["page"]) ? $_GET["page"] : "";
  if ($parameter === "form")
      require_once("./view/form.php");
  elseif($parameter === "allusers")
      require_once("./view/users.php");
?>
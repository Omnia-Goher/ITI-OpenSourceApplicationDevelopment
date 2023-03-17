<?php
require_once("./vendor/autoload.php");
session_start();

$db = new MySQLHandler("items");

if(isset($_GET["id"]) && is_numeric($_GET["id"])){
    require_once("./views/singleItem.php");
}else{
    require_once("./views/allData.php");
} 

?>
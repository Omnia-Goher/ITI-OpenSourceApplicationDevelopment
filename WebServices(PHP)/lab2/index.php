<?php
require_once("./config.php");
require_once("./MySQLHandler.php");
require_once("./functions.php");

$mySql = new MySQLHandler("products");
$connect = $mySql->connect();

if ($connect) {
    $product_id=Check_URL_and_Get_ID();
    Handle_request($mySql,$product_id);
} else {
    Return_Response(500,["error" => "database not connected"]);
}
?>

<?php

require_once("../config.php");
require_once("../functions.php");



$egy_cities = get_cities();
if (isset($_POST["city"])) {
    $data_arr = get_weather($_POST['city']);
    echo '<h2>' . $data_arr["name"] . ' weather status' . '</h2>';
    get_current_time();
    echo "<strong>". $data_arr["weather"][0]["description"] ."</strong>" . '<br>';
    echo "<strong>Temp : </strong>".  $data_arr["main"]["temp"]  . "<br>";
    echo "<strong>Humidity : </strong>". $data_arr["main"]["humidity"]  . "<br>";
    echo "<strong>Speed : </strong>". $data_arr["wind"]["speed"] . "Km/h <br>";
}
?>



<html>

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php
    echo '<form action="#" method="POST">';
    echo "<select name='city' style='margin-top:20px;'>";
    foreach ($egy_cities as $key => $value) {
        foreach ($value as $k => $val) {
            if ($k === "id") {
                $cityid = $val;
            }
            if ($k === "name") {
                echo "<option value='$cityid' >$val</option>";
            }
        }
    }
    echo "</select>";
    echo '<button type="submit" style="margin-left:10px">find weather</button>';
    echo "</form>";
    ?>

</body>

</html>
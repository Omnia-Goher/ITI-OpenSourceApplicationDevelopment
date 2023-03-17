<?php

 function get_cities()
    {
        $cities = file_get_contents(__CITIES_FILE);
        $cities_array = json_decode($cities, true);
        $egy_cities = array();

        foreach ($cities_array as $key => $value) {
            foreach ($value as $ke => $val) {
                if ($ke === "country" && $val === "EG") {
                    array_push($egy_cities, $cities_array[$key]);
                }
            }
        }
        return $egy_cities;
    }
    function get_weather_guzzle($cityid)
    {
      try {
        $client = new GuzzleHttp\Client();
        $response = $client->request('GET', "https://api.openweathermap.org/data/2.5/weather?id=$cityid&appid=7564fe50b8f254e686c13ea65ff3e54b");
        return json_decode($response->getBody(), true);
      } catch
      (Exception $exception) {
        return json_encode([
          'status' => 501,
          'message' => "Gateway Error"
        ]);
      }
    }

     function get_weather($cityid)
    {
        $api = "https://api.openweathermap.org/data/2.5/weather?id=" . $cityid . "&appid=7564fe50b8f254e686c13ea65ff3e54b";
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $api);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            $data = curl_exec($ch);
            curl_close($ch);
            $data_arr = json_decode($data, true);
            return $data_arr;
        } catch (Exception $e) {
            echo "message : " . $e->getMessage();
        }
    }

     function get_current_time()
    {
        echo date("l") . " " . date("h") . " " . date("a") . "<br>";
        echo  date("d") . "th" . " " . date("F") . " " . date("Y") . "<br>";
    }

?>
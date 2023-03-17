<?php
    $current_index = isset($_GET["current"]) && is_numeric($_GET["current"]) ? intval($_GET["current"]) : 0;
    $next_index = ($current_index + __RECORDS_PER_PAGE__ > 15) ? 0 : $current_index + __RECORDS_PER_PAGE__;
    $prev_index = ($current_index - __RECORDS_PER_PAGE__ > 0) ? $current_index - __RECORDS_PER_PAGE__ : 0;
    $items = $db->get_data(array(),$current_index);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <style>
        h1 {
            color: #718470
        }
        .view:hover{
            text-decoration: underline !important;
        }
        .pag-button:hover{
            background-color: #7184709e !important;
            
        }
    </style>
    <title>All Data</title>
</head>

<body>
    <section>
        <div class="container w-50 mt-5 p-5 border shadow-lg rounded-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col col-lg-12 text-center">
                    <h1 class="mb-5">Table of Products </h1>
                    <table class="table table-bordered" id="users">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">-----</th>
                            </tr>
                            <tbody>
                            <?php
                                foreach ($items as $item) {
                                    echo "<tr><td>".$item["id"]."</td>";
                                    echo "<td>".$item["product_name"]."</td>";
                                    echo "<td>".$item["list_price"]."</td>";
                                    echo "<td><a style='color:#718470;' class='view text-decoration-none' href='".$_SERVER["PHP_SELF"]."?id=".$item["id"]."'>View Item</a></td></tr>";
                                }
                            ?>
                            </tbody>
                        </thead>
                    </table>
                    <div class="style="background-color: #718470;">
                        <a id="prev" class="btn btn-sm details text-white d-inline px-5 me-5 pag-button" style="background-color: #718470;" current=<?php echo $prev_index; ?> type="button" href=<?php echo $_SERVER["PHP_SELF"]."?current=".$prev_index;?>>prev</a>
                        <a id="next" class="btn btn-sm details text-white d-inline px-5 pag-button" style="background-color: #718470;" current=<?php echo $next_index; ?> type="button" href=<?php echo $_SERVER["PHP_SELF"]."?current=".$next_index;?>>next</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        var next = document.getElementById("next")
        var prev = document.getElementById("prev")
        if(next.getAttribute("current") == 4){
            prev.style.pointerEvents = "none";
            prev.style.backgroundColor = "#7184709e";
        }else{
            prev.style.pointerEvents = "auto";
            prev.style.backgroundColor = "#718470";
        }
        if(next.getAttribute("current") == 0){
            next.style.pointerEvents = "none";
            next.style.backgroundColor = "#7184709e";
        }else{
            next.style.pointerEvents = "auto";
            next.style.backgroundColor = "#718470";
        }
        
    </script>
</body>

</html>
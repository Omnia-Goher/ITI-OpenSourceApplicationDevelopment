<?php
$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;
$item = $db->get_record_by_id($id)[0];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <style>
        .ratings i {
            font-size: 16px;
            color: red
        }

        .product-image {
            width: 100%
        }

        .spec-1 {
            color: #938787;
            font-size: 15px
        }

        .title {
            font-weight: bold
        }

        .para {
            font-size: 16px
        }

        .details,
        .add-cart:hover {
            background-color: #013d29;
            color: white;
        }

        .add-cart:hover {
            background-color: #013d2984;
            color: white;
        }

        .details:hover,
        .add-cart {
            background-color: white;
            color: #013d29;
            border: #013d29 1px solid;
        }
    </style>
    <title>All Data</title>
</head>

<body>
    <section>
        <div class="container w-50 mt-5 p-5 border shadow-lg rounded-5">
            <div class="row p-3">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" style="height: 168px;" src=<?php echo"DB/images/".$item["photo"];?>></div>
                <div class="col-md-6 mt-3">
                    <h5 class="title"><?php echo $item["product_name"];?></h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2"><i class="fa fa-star me-2"></i><span><?php echo $item["rating"];?>/5</span></div>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>category : <?php echo $item["category"];?></span></div>
                    <div class="mt-1 mb-1 spec-1"><span>country : <?php echo $item["country"];?></span></div>
                    <div class="mt-1 mb-1 spec-1"><span>units in stock :<?php echo $item["units_in_stock"];?></span></div>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <h4 class="mb-4 mt-2">Total Price</h4>
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">$<?php echo $item["list_price"];?></h4>
                    </div>
                    <h6 class="text-danger text-decoration-line-through">discont: $<?php echo $item["discontinued"];?></h6>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
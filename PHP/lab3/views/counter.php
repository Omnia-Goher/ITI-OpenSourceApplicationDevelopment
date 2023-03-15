<?php
$counter = new counter();
$counter-> increment_and_update();
$count = $counter->get_count();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>visitor counter</title>
</head>
<body class="container d-flex align-items-center">
    <section class="container mx-auto" style="margin-top: 250px;">
            <div class="card mx-auto shadow" style="width:500px;">
                <div class="card-body text-center">
                    <h2 class="mb-5">Visitor Counter</h2>
                    <p class="card-text w-50 mx-auto rounded-5 text-white mb-4 p-2" style="background-color:black"><?php echo $count; ?></p>
                </div>
            </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML Controller</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>
    <div class="container shadow-lg rounded-5 w-50 py-5 border mx-auto" style="margin-top:100px;">
        <form method="post" action="index.php" class="w-75 mx-auto">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" value="<?php echo $name ?>">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" value="<?php echo $email ?>">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" name="phone" id="phone" value="<?php echo $phone ?>">
            </div>
            <div class="mb-3 text-center mt-5">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Prev">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Next">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Add">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Update">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Delete">
                <input type="submit" class="btn btn-dark me-1 rounded-1" name="action" value="Clear">
            </div>
        </form>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</body>

</html>
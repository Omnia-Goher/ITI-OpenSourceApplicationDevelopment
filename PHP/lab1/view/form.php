<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #contact_form{
            width: 50%;
            margin: 100px auto 0 auto
        }
        h1{
            font-weight:bold;
        }
        #name,#email, textarea {
            width: 100%;
            padding: 12px;
            margin-top: 6px;
            margin-bottom: 16px;
            border: 1px solid #0102018c;
            border-radius: 4px;
        }
        #clear, #submit {
            background-color: black;
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
        }     
        #submit:hover,
        #clear:hover{
            background-color: #0102018c;
            border: none;
        }
        #error{
            width: 50%;
            margin: 50px auto ;
            color: red;
            font-size: 18px;
        }

        </style>
    <title>Contact Form</title>
</head>
<body>
        <form id="contact_form" action="index.php" method="POST" enctype="multipart/form-data">
            <h1> Contact Form </h1>
            <div class="row">
                <label  for="name" class="required">Name:</label><br />
                <input value="<?php echo validate("name")?>" id="name" class="input" name="name" type="text" size="30" />
                <br/>
            </div>
            <div class="row">
                <label class="required" for="email">Email:</label><br />
                <input value="<?php echo validate("email")?>" id="email" class="input" name="email" type="text" size="30" />
                <br/>
            </div>
            <div class="row">
                <label for="message" class="required">Message:</label><br />
                <textarea id="message" class="input" name="message" rows="7" cols="30"><?php echo validate("message")?></textarea>
                <br/>
            </div>
            <button id="submit" name="submit" type="submit" value="Send email" >Submit</button>
            <button id="clear" name="clear" type="reset" value="clear form" >Clear form</button>
        </form>

        <div id="error">
            <?php echo $error_msg ?? NULL ?>
        </div>
</body>
</html>

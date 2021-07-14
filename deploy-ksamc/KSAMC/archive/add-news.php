<?php

   include('./config/db_connect.php'); 
   
   if(isset($_POST['submit'])){
    
    //store the file name in $file

    
    $fileName=  $_FILES['news-img']['name'];
    $timestamp= date('m-d-Y_H:i:s').'-'; 
    $fileName=  $timestamp.$fileName;  

    $title= $_POST['title'];
    $text= $_POST['body-text'];

    $query= "INSERT INTO news(title, body_text, image) VALUES('$title', '$text', '$fileName')"; 

    $result= mysqli_query($conn,$query);
    if($result){
        move_uploaded_file($_FILES['news-img']['tmp_name'], "news-img/$fileName");
    }
   }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./style/add-news.css" rel="stylesheet" type="text/css" />
    <title>Add news</title>
</head>
<body>
    <div class="container">
        <form action="add-news.php" method="POST" enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Enter title:</label>
                <input type="text" name="title" id="title">
            </div>

        
            <div class="form-group">
                <label for="body-text">Enter news body:</label>
                <textarea name="body-text" id="body-text" cols="30" rows="10"></textarea>
            </div>
                
            <div class="form-group">
                <label for="news-img">Upload an image:</label>
                <input type="file" name="news-img" id="news-img">
            </div>
                
            <div class="form-group">
                <input type="submit" name="submit" value="SUBMIT">
            </div>
        </form>
    </div>
</body>
</html>
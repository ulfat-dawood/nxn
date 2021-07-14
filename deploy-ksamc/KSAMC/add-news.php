<!-- add news  -->
<?php
   include('./template/auth.php');
   include('./config/db_connect.php'); 
   
   if(isset($_POST['submit'])){
    
    //store the file name in $file
    $fileName=  $_FILES['news-img']['name'];
    if($fileName!=''){
        //if file name exist
        $timestamp= date('m-d-Y_H:i:s').'-'; 
        $fileName=  $timestamp.$fileName; 
    }else{
        $ranNum=rand(1,3);
        $fileName='news-default-img-'.$ranNum.'.png'; 
    }
    
 

    $title= $_POST['title'];
    $text= $_POST['body-text'];

    $query= "INSERT INTO news(title, body_text, image) VALUES('$title', '$text', '$fileName')"; 

    $result= mysqli_query($conn,$query);
    if($result){
        move_uploaded_file($_FILES['news-img']['tmp_name'], "news-img/$fileName");
        header('Location: admin.php'); 
    }
   }

?>

<!DOCTYPE html>
<html lang="en" dir=rtl>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./style/add-news.css" rel="stylesheet" type="text/css" />
    <title>إضافة خبر</title>
</head>
<body>
<!-- HEADER  -->
<?php include('template/admin-nav.php') ?>
<div class="container">
        <section class="add-news">
            <h1 class="section-title">إضافة خبر جديد</h1>
            <div class="box">
            <form action="add-news.php" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="title">العنوان:*</label>
                    <input type="text" name="title" id="title" required>
                </div>

            
                <div class="form-group">
                    <label for="body-text">الخبر:*</label>
                    <textarea name="body-text" id="body-text" cols="30" rows="5" required></textarea>
                </div>
                    
                <div class="form-group">
                    <!-- <label for="news-img">إضافة صورة:*</label> -->
                    <input type="file" name="news-img" id="news-img">
                </div>
                    
                <div class="form-group">
                    <input type="submit" name="submit" value="إضافة الخبر">
                </div>
            </form>
            </div>
        </section>
    </div>
</body>
</html>
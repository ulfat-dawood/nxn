<!-- view news  -->
<?php
    include('./template/auth.php');
    include('./config/db_connect.php'); 

    $query= "SELECT * FROM news ORDER BY `id` DESC;";
    $result= mysqli_query($conn, $query); 
    $newsArr= mysqli_fetch_all($result, MYSQLI_ASSOC);  


    // print_r($newsArr); 


?>

<!-- add news  -->
<?php

//    include('./config/db_connect.php'); 
   
//    if(isset($_POST['submit'])){
    
//     //store the file name in $file
//     $fileName=  $_FILES['news-img']['name'];
//     $timestamp= date('m-d-Y_H:i:s').'-'; 
//     $fileName=  $timestamp.$fileName;  

//     $title= $_POST['title'];
//     $text= $_POST['body-text'];

//     $query= "INSERT INTO news(title, body_text, image) VALUES('$title', '$text', '$fileName')"; 

//     $result= mysqli_query($conn,$query);
//     if($result){
//         move_uploaded_file($_FILES['news-img']['tmp_name'], "news-img/$fileName");
//         header('Location: admin.php'); 
//     }
//    }

?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/admin.css">
    <title>التحكم</title>
</head>
<body>
<!-- HEADER  -->
<?php include('template/admin-nav.php') ?>
<div class="container">


        <section class="new-list">
        <h1 class="section-title">قائمة الأخبار</h1>
        <?php foreach($newsArr as $news): ?>
            <div class="box news-item">
                <h4 class="title"><?php echo $news['title'] ?></h4>
                <button class="details"><a href="news-details.php?id=<?php echo $news['id'] ?>">التـفاصيل</a></button>
            </div>
        <?php endforeach;  ?>
        </section>
    </div>
</body>
</html>




<!-- <section class="add-news">
            <h1 class="section-title">إضافة خبر جديد</h1>
            <div class="box">
            <form action="admin.php" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="title">العنوان:*</label>
                    <input type="text" name="title" id="title">
                </div>

            
                <div class="form-group">
                    <label for="body-text">الخبر:*</label>
                    <textarea name="body-text" id="body-text" cols="30" rows="5"></textarea>
                </div>
                    
                <div class="form-group">
                    <label for="news-img">إضافة صورة:*</label>
                    <input type="file" name="news-img" id="news-img">
                </div>
                    
                <div class="form-group">
                    <input type="submit" name="submit" value="إضافة الخبر">
                </div>
            </form>
            </div>
        </section> -->
<?php
    include('./template/auth.php');
    include('./config/db_connect.php'); 
    
    
    if(isset($_POST['delete'])){
        
        include('./config/db_connect.php'); 
        $id_to_delete= $_POST['id_to_delete'];
        $query= "DELETE FROM news WHERE id=$id_to_delete";

        $result= mysqli_query($conn, $query);
        if($result){

                // // Delete the image from the server: 
                // $imgName=$_POST['img_to_delete']; 
                // $imgPath= "./news-img/$imgName"; 
                // //Delete the image from the server: 
                // unlink($imgPath);

                //Redirect to the view news page: 
                header('location: admin.php') ;

        }else{
            echo 'Delete failed'. mysqli_error($conn); 
        }


        
        
    }

    if(isset($_GET['id'])){
        $id= mysqli_real_escape_string($conn, $_GET['id']);

        $query= "SELECT * FROM news WHERE id=$id"; 
        $result= mysqli_query($conn, $query); 
        //fetch the first record only, as an associative arr:
        $news_data= mysqli_fetch_assoc($result);
        mysqli_free_result($result);
        mysqli_close($conn); 
        }

?>

<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/news-details.css">
    <title>تفاصيل الخبر</title>
</head>
<body>
    <!-- HEADER  -->
    <?php include('template/admin-nav.php') ?>    
    <div class="container">
        <?php if($news_data): ?>

            <div class="box top-box">
                <h3 class="title"><?php echo $news_data['title'] ?></h3>
                <!-- Delete news form: -->
                <form action="news-details.php" method="POST">
                    <input type="hidden" name="id_to_delete" value=<?php echo $news_data['id'] ?>>
                    <input type="hidden" name="img_to_delete" value=<?php echo $news_data['image'] ?>>
                    <input type="submit" name="delete" value="حذف الخبر">
                </form>
            </div>
            
            <div class="box bottom-box">
                <img src="./news-img/<?php echo $news_data['image'] ?>" height="200">
                <p class="body-text"><?php echo $news_data['body_text'] ?></p>
            </div>


        <?php else: ?>

            <h2>ERROR: No such news!</h2>

        <?php endif; ?>
    </div>
</body>
</html>
<?php

    include('./config/db_connect.php'); 

    $query= "SELECT * FROM news;";
    $result= mysqli_query($conn, $query); 
    $newsArr= mysqli_fetch_all($result, MYSQLI_ASSOC); 
    // print_r($newsArr); 


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./style/view-news.css" rel="stylesheet" type="text/css" />
    <title>NEWS LIST</title>
</head>
<body>
    <div class="container">
        <?php foreach($newsArr as $news): ?>
            <h1><?php echo $news['title'] ?></h1>
            <button><a href="news-details.php?id=<?php echo $news['id'] ?>">VIEW DETAILS</a></button>
        <?php endforeach;  ?>
    </div>


</body>
</html>
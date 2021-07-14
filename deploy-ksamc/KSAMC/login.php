<?php
        // admin_main@ksamc 
        // admin_2@ksamc


        // session_name('username');
        session_start(); 

        //if user is already logged in: 
        if(isset($_SESSION['username'])){
            header('Location: admin.php'); 
        }
        //if user if not logged in:
        $username= $pw= "";
        $error=''; 
        if(isset($_POST['submit'])){
            $salt = '#nn^0';
            include('./config/db_connect.php');
            $username= $_POST['username'];
            $pw= $_POST['password'];
            $hpw = md5($salt.$pw);

            $query= "SELECT * FROM `users` WHERE username= '$username';"; 
            $result= mysqli_query($conn,$query);
            $userData= mysqli_fetch_assoc($result);
            
            //check if user exists:
            if($userData){
                
                //check if password matches:
                $userPw= $userData['password']; 
                if($userPw==$hpw){

                    //if password matched: 
                    $_SESSION['username']= $username; 
                    header('location: admin.php');

                }else{
                    //if password NOT matched: 
                    $error= "اسم المستخدم أو كلمة المرور خاطئ";
                }

            }else{
                $error= "اسم المستخدم أو كلمة المرور خاطئ";
            }
            


        }

?>


<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./style/login.css" rel="stylesheet" type="text/css" />
    <title>تسجيل الدخول</title>
</head>
<body>
    <div id="login-container">
        <h1>تسجيل الدخول</h1>
        <form action="login.php" method="POST" class="login-form">
            <h5 style="color:#f64f59"><?php echo $error; ?></h5>
            <div class="field">
                <label for="username">اسم المستخدم</label>
                <input type="text" name="username" id="username" value=<?php echo $username ?>>
            </div>

            <div class="field">
                <label for="password">كلمة المرور</label>
                <input type="password" name="password" id="password" value=<?php echo $pw ?>>
            </div>

            <div class="field">
                <input type="submit" name="submit" value="تسجيل الدخول" id="submit-btn">
            </div>

        
        </form>
    </div>
</body>
</html>
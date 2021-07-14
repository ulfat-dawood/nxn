<?php

include('./config/db_connect.php'); 

$query= "SELECT * FROM news ORDER BY `id` DESC;";
$result= mysqli_query($conn, $query); 
$newsArr= mysqli_fetch_all($result, MYSQLI_ASSOC); 

?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="./style/index.css" rel="stylesheet" type="text/css" />
    <!-- TAJWAL FONT  -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
    <!-- GLIDE CSS  -->
    <link rel="stylesheet" href="glide.core.min.css">
    <link rel="stylesheet" href="glide.theme.min.css">

    <title>KSAMC</title>
</head>

<body>
    <div class="app-wrapper">
        <div id="top-btn" class="hide">
            <img src="./img/icons-set/up-arrow.svg" alt="">
        </div>
        <aside id="sidebar">
            <div class="img-wrapper">
                <img src="./img/logo.png">
            </div>
            <nav>
                <ul class="nav-list">
                    <li class="nav-item active"><a href="#news-section">
                            <div class="icon-wrapper">
                                <img src="./img/icons-set/news.svg" class="icon">
                            </div>
                            <div class="tab-title">أخبار المدينة</div>
                        </a></li>

                    <li class="nav-item"><a href="#today-section">
                            <div class="icon-wrapper">
                                <img src="./img/icons-set/calender.svg" class="icon">
                            </div>
                            <div class="tab-title">الموجز اليومي</div>
                        </a></li>

                        
                    <li class="nav-item"><a href="#info-section">
                        <div class="icon-wrapper">
                            <img src="./img/icons-set/info.svg" class="icon">
                        </div>
                        <div class="tab-title">عن المدينة</div>
                    </a></li>

                    <li class="nav-item"><a href="#links-section">
                            <div class="icon-wrapper">
                                <img src="./img/icons-set/links.svg" class="icon">
                            </div>
                            <div class="tab-title">روابط مهمة</div>
                        </a></li>


                    <li class="nav-item"><a href="">
                            <div class="icon-wrapper">
                                <img src="./img/icons-set/dashboard.png" class="icon">
                            </div>
                            <div class="tab-title"> لوحة التحكم </div>
                        </a></li>

                </ul>
            </nav>
        </aside>

        <div id="main-container">
            <header id="header">
                <div class="button-group">
                    <button><a href="./login.php">التحكم</a></button>
                    <button>English</button>
                </div>
                <div class="logo">
                    <h3 class="arabic">مدينة الملك سلمان بن عبدالعزيز الطبية</h3>
                    <h3 class="english">King Salman bin Abdulaziz Medical City</h3>
                </div>
            </header>

            <main id="main-section">
                <section id="news-section">
                    <h5 class="section-title">قسم الأخبار</h5>


                    <div class="shadow-mask">
                        
                        <div class="news-cards">
                        <?php foreach($newsArr as $news): ?>

                            <div class="news-card " style="background-image:url(./news-img/<?php echo $news['image'] ?>)">
                            <div class="overlay">
                                <div class="news-title">
                                    <span>
                                        <?php echo $news['title'] ?>
                                    </span>
                                </div>
                                <button class="read-more" data-open-modal='#modal-<?php echo $news['id'] ?>'> <span>&#10140;</span> اقرا المزيد </button>
                                <div class="modal-box" id='modal-<?php echo $news['id'] ?>'>
                                <header>
                                    <h4><?php echo $news['title'] ?></h4>
                                    <div class='close-modal' data-close-modal='#modal-<?php echo $news['id'] ?>'>&times;</div>
                                </header>
                                <main>
                                    <div class="img-holder">
                                        <img src="./news-img/<?php echo $news['image'] ?>" />
                                    </div>
                                    <h3 class="news-title"><?php echo $news['title'] ?></h3>
                                    <p class="news-body"><?php echo $news['body_text'] ?></p>
                                </main>
                                <div class="cta" data-close-modal='#modal-<?php echo $news['id'] ?>'>إغلاق</div>
                            </div>
                            <div class="modal-overlay" data-close-modal='#modal-<?php echo $news['id'] ?>'></div>
                            </div>
                            </div>

                        <?php endforeach;  ?>

                        </div>
                    


                </div>


                    <!-- <div class="shadow-mask">
                        
                            <div class="news-cards">
                                <div class="news-card" style="--img-url:url(../img/cards/card-bg-1.webp);">
                                    <div class="overlay">
                                        <div class="news-title">
                                            <span>
                                                هنا عنوان الخبر، العنوان قد يكون طويل
                                            </span>
                                        </div>
                                        <button class="read-more" data-open-modal='#modal-1'> <span>&#10140;</span> اقرا المزيد </button>
                                        <div class="modal-box" id='modal-1'>
                                            <header>
                                                <h4>Modal Title</h4>
                                                <div class='close-modal' data-close-modal='#modal-1'>&times;</div>
                                            </header>
                                            <main>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores illum dolorem necessitatibus perferendis dicta similique perspiciatis corporis quae ab?
                                                </p>
                                                <div class="cta" data-close-modal='#modal-1'>CTA</div>
                                            </main>
                                        </div>
                                        <div class="modal-overlay" data-close-modal='#modal-1'></div>

                                    </div>
                                </div>



                                <div class="news-card" style="--img-url:url(../img/cards/card-bg-2.jpeg);">
                                    <div class="overlay">
                                        <div class="news-title">
                                            <span>
                                                عنوان آخر قد يكون أطول من العناوين الأخرى
                                            </span>
                                        </div>
                                        <button class="read-more"> <span>&#10140;</span> اقرا المزيد </button>
                                    </div>
                                </div>


                                <div class="news-card" style="--img-url:url(../img/cards/card-bg-1.jpeg);">
                                    <div class="overlay">
                                        <div class="news-title">
                                            <span>
                                                هذا العنوان قصير
                                            </span>
                                        </div>
                                        <button class="read-more"> <span>&#10140;</span> اقرا المزيد </button>
                                        
                                    </div>
                                </div>
                            </div>
                        


                    </div> -->

                </section>

                <section id="today-section">
                    <h5 class="section-title">موجز اليوم</h5>
                    <div class="today">
                        <div class="text" id="day-holder">السبت</div>
                        <div class="line" ></div>
                        <div class="text" id="date-holder">22 Mar, 2021</div>
                        <div class="line"></div>
                        <div class="text" id="time-holder">10 : 26 p.m.</div>
                    </div>
                </section>


                <section id="info-section">
                    <h5 class="section-title">كلمة المدير</h5>
                    <div class="info-wrapper">
                        <div class="msg-wrapper">
                            <div class="title">
                                كلمة المدير العام التنفيذي لمدينة الملك سلمان بن عبدالعزيز الطبية:
                            </div>
                            <div class="body">
                                مدينة الملك سلمان بن عيدالعزيز هي مدينة طبية تقع في المدينة المنورة بسعةاستيعابية ١٢٥٠ سرير 
                                <br>
                                تسعى المدينة الطبية لأن تكون الخيار الأمثل لكل مريض في مجال تقديم الرعاية الصحية في المنطقة وذلك بتوفير مراكز متخصصة منها مركز العلوم العصبية والأورام والسكر والقلب والأبحاث والتدريب والمحاكاة والعيادات ومركز للتأهيل الطبي.
                                <br>
                                وتستهدف رؤيتها محاكاة التقدم ورؤية ٢٠٣٠ وذلك لتوفير خدمة متكاملة والنهوض بمجتمع صحي. 
                            </div>
                        </div>
                        <div class="img-wrapper">
                            <img src="./img/dr-yaser.jpeg" alt="">
                        </div>
                    </div>

                </section>

                <section id="links-section">
                    <!-- <h5 class="section-title">
                        روابط مهمة
                    </h5> -->
                    <h5 class="section-title">
                            الوصول السريع للخدمات الصحية
                    </h5>
                    <div class="link-cards">






                    </div>
                </section>

            </main>
        </div>
    </div>

    <script src="./app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
    <!-- MODAL  -->
    <script>
    
            ////////// MODAL /////////
        const openModal= document.querySelectorAll('#news-section [data-open-modal]');
        const closeModal= document.querySelectorAll('#news-section [data-close-modal]');
        const modalOverlay= document.querySelector('.modal-overlay');


        openModal.forEach((btn)=>{
            btn.addEventListener('click',()=>{

                const modal= document.querySelector(btn.dataset.openModal);
                const modalOverlay= document.querySelector(`.modal-overlay[data-close-modal='${btn.dataset.openModal}']`);

                modal.classList.add('active')
                modalOverlay.classList.add('active')
            })
        })

        closeModal.forEach((btn)=>{
            btn.addEventListener('click',()=>{
                const modal= document.querySelector(btn.dataset.closeModal);
                const modalOverlay= document.querySelector(`.modal-overlay[data-close-modal='${btn.dataset.closeModal}']`);

                modal.classList.remove('active')
                modalOverlay.classList.remove('active')
            })
        })
    </script>

</body>

</html>
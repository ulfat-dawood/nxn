<nav id="admin-nav">
<div class="nav-buttons">
    <button><a href="./add-news.php">إضافة خبر</a></button>
    <button><a href="./admin.php">قائمة الأخبار</a></button>
</div>
<button class="logout"><a href="./logout.php">تسجيل الخروج</a></button>
</nav>





















<style>
#admin-nav{
    padding:2rem 5rem;
    background: #fff; 
    display:flex;
    justify-content:space-between; 
    position: sticky; 
    top:0px; 
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);

}

#admin-nav button{
    height: fit-content;
    font-family: 'Tajawal', sans-serif;	
    font-weight: 400;
    font-size: 18px;
    padding:.5em; 
    border:none; 
    border-radius: 10px;

}
#admin-nav .nav-buttons{
    /* flex-grow:1; 
    display:flex;
    justify-content:center;  */
}
#admin-nav .nav-buttons> button{
    margin-left: 2rem; 
    border-radius: 10px 10px 0 0 ;
    border-bottom: 3px solid var(--secondary);
    padding: .5em 1em;

}

</style>
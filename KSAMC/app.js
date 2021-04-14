const linksContainer= document.querySelector('#links-section .link-cards');
const linkCards=[
    {
        linkUrl:'anat.sa/login',
        imgUrl:'anah.png', 
        name:'أناة'
    },
    {
        linkUrl:'sahel.moh.gov.sa',
        imgUrl:'sahel.png', 
        name:'برنامج سهل'
    },
    {
        linkUrl:'10.62.74.36/sup/index.aspx',
        imgUrl:'/main.png', 
        name:'نظام بلاغات الصيانة'
    },
    {
        linkUrl:'46.235.95.46/BillSoft/Login.aspx',
        imgUrl:'bill.jpg', 
        name:'برنامج الخدمة بمقابل'
    },
    {
        linkUrl:'w4prdelrn.moh.gov.sa/elibrary/index.html',
        imgUrl:'alerteln.png', 
        name:'Alert eLIBRARY'
    },
    {
        linkUrl:'erp.moh.gov.sa',
        imgUrl:'mawared.png', 
        name:'برنامج موارد'
    },
    {
        linkUrl:'webmail.moh.gov.sa',
        imgUrl:'outlook.png', 
        name:'Outlook برنامج'
    },
    {
        linkUrl:'tsa.mh.gov.sa/LoginPage.aspx',
        imgUrl:'acadmic.png', 
        name:'إدارة الشؤون الاكاديمية'
    },
    {
        linkUrl:'systems.moh.gov.sa',
        imgUrl:'stat.png', 
        name:'Statics'
    },
    {
        linkUrl:'seha.sa',
        imgUrl:'sehalogo.png', 
        name:'منصة الخدمات الصحية'
    },
    {
        linkUrl:'hsp.moh.gov.sa',
        imgUrl:'MOHH.png', 
        name:'وزارة الصحة دخول'
    },
    {
        linkUrl:'www.efada.com.sa/EMC.UI/login.aspx',
        imgUrl:'efad.jpg', 
        name:'منصة إفادة'
    },
    {
        linkUrl:'empupdate.moh.gov.sa/ResetPassword.aspx',
        imgUrl:'forg.png', 
        name:'تحديث بيانات الموظفين'
    },
    {
        linkUrl:'w4prdhis.moh.gov.sa',
        imgUrl:'alert.png', 
        name:'Alert برنامج'
    },
    {
        linkUrl:'10.62.66.115/moh_pacs/',
        imgUrl:'pacs.jpg', 
        name:'PACS'
    },
    {
        linkUrl:'nheoc.moh.gov.sa/eoc/default.aspx',
        imgUrl:'eoc.png', 
        name:'ECO'
    },
    {
        linkUrl:'systems.moh.gov.sa/Birth/Login.aspx',
        imgUrl:'birth.png', 
        name:'Login'
    },
    {
        linkUrl:'hesn.moh.gov.sa/webportal/',
        imgUrl:'hesn.jpg', 
        name:'حصن'
    },
    {
        linkUrl:'mawidstf.moh.gov.sa/',
        imgUrl:'maw.png', 
        name:'موعد'
    },
    {
        linkUrl:'his.elm.sa/login.html#/pages/auth/login',
        imgUrl:'elm.png', 
        name:'علم'
    },
    {
        linkUrl:'84.235.61.161/ehd/login',
        imgUrl:'ccc_logo.png', 
        name:'مركز القيادة والتحكم'
    },
    {
        linkUrl:'hmp.moh.gov.sa/Login.aspx?ReturnUrl=/default.aspx',
        imgUrl:'marg.png', 
        name:'برنامج الزواج الصحي'
    },
    {
        linkUrl:'docs.google.com/forms/d/e/1FAIpQLSdOC274yJsDJ1qlUIZmjsvDbfAttk9MqQEt7_pspWjQ8kMnCw/viewform',
        imgUrl:'vte.png', 
        name:'VTE'
    },
    {
        linkUrl:'pp.wasfaty.sa/login?t=1604571632253',
        imgUrl:'wasfati-new-logo.png', 
        name:'وصفتي'
    }

]; 


linkCards.forEach(card=>{
    const cardComponent= `
    <a href="https://${card.linkUrl}" target="_blank">
    <div class="link-card">
        <div class="link-img">
        <img src="./img/links/${card.imgUrl}">
        </div>
        <div class="link-title">

            <div class="name">${card.name}</div>
        </div>

    </div>
    </a>
    `
    const ele = document.createElement('div');
    ele.innerHTML = cardComponent;
    linksContainer.appendChild(ele)
})

 ////////////// TOP BUTTON //////////////
 const topButton= document.querySelector('#top-btn');
 const scrollTop= ()=>{
    console.log('top')
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
 topButton.addEventListener('click',scrollTop)

 ////////////// CONTROL SCROLL //////////////
const header= document.querySelector('#header'); 
window.addEventListener('scroll', ()=>{
    //HIDE TOP BUTTON:
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if(topButton.classList.contains('hide'))
        topButton.classList.remove('hide')
    } else {
        topButton.classList.add('hide')
    }

    //change to scrolling header:
    // if(window.pageYOffset > 100){
    //     header.classList.add('header-scroll'); 
    // }else{
    //     if(header.classList.contains('header-scroll'))
    //         header.classList.remove('header-scroll')
        
    // }
})

 ////////////// PRINT DAYS IN ARABIC //////////////
 const dayOfWeekHolder= document.querySelector('#day-holder');
 const dateHolder= document.querySelector('#date-holder');
 const timeHolder= document.querySelector('#time-holder');
 var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
 "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

var days =["اﻷحد","اﻷثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];

var date = new Date();
const day = date.getDay();
const year = date.getFullYear()
const month= months[date.getMonth()];
const dayOfWeek= days[date.getDay()];
const dateFormat= ` ${day} ${month}، ${year} `;
dayOfWeekHolder.innerHTML= dayOfWeek;
dateHolder.innerHTML= dateFormat; 
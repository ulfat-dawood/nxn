const newsContainer= document.querySelector('#news-section .news-cards')
const newsList= [

    {
        title:"معايدة المدير العام التنفيذي منسوبي المدينة الطبية",
        imgUrl:"eid-visit.jpeg",
        bodyText:"قام المدير العام التنفيذي لـمدينة الملك سلمان بن عبدالعزيز الطبية بالمدينة المنورة بجولة لمعايدة منسوبي المدينة الطبية بمُناسبة حلول  عيد الفطر يرافقه عدد من المدراءالتنفيذين كما اطلع على آلية سير العمل بالمدينة الطبية",
    },
    {
        title:"حصول  ذوي الاحتياجات الخاصة على لقاح كوفيد 19",
        imgUrl:"vaccine.jpeg",
        bodyText:"بالتعاون مع جمعية طيبة للإعاقة الحركية و إدارة الطوارى والكوراث والازمات تم نقل ذوي الاحتياجات الخاصة مرضى الطب المنزلي إلى مركز لقاح كورونا بمدينة الملك سلمان بن عبد العزيز الطبية بالمدينة المنورة للحصول على الجرعة الأولى من لقاح كوفيد 19",
    },
    {
        title:"هنا عنوان الخبر، العنوان قد يكون طويل",
        imgUrl:"card-bg-1.jpeg",
        bodyText:"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايت كياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجناي دولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيوم ايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيد كيواي نون نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنام"
    },
    {
        title:"هذا العنوان قصير",
        imgUrl:"card-bg-2.jpeg",
        bodyText:"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايت كياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجناي دولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيوم ايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيد كيواي نون نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنام"
    },
]
let newsCards= '';
newsList.forEach((news,i)=>{
     newsCards+= `
    <div class="news-card " style="--img-url:url(../img/cards/${news.imgUrl});">
    <div class="overlay">
        <div class="news-title">
            <span>
                ${news.title}
            </span>
        </div>
        <button class="read-more" data-open-modal='#modal-${i}'> <span>&#10140;</span> اقرا المزيد </button>
        <div class="modal-box" id='modal-${i}'>
        <header>
            <h4>${news.title}</h4>
            <div class='close-modal' data-close-modal='#modal-${i}'>&times;</div>
        </header>
        <main>
            <div class="img-holder">
                <img src="./img/cards/${news.imgUrl}" />
            </div>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-body">${news.bodyText}</p>
        </main>
        <div class="cta" data-close-modal='#modal-${i}'>إغلاق</div>
    </div>
    <div class="modal-overlay" data-close-modal='#modal-${i}'></div>
    </div>
    </div>
    `
})
newsContainer.innerHTML= newsCards;


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
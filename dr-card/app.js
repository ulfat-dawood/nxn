const cardsContainer= document.querySelector('#dr-cards-container');

const docList= [
    {name:'عبدالمنعم الغامدي', avatarURL:'./img/dr-male.svg', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
    {name:'سهى السابعي', avatarURL:'./img/dr-female.svg', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'فيصل العال', avatarURL:'./img/faisal.jpeg', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
    {name:'سهى السابعي', avatarURL:'./img/dr-female.svg', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'مها احمد', avatarURL:'./img/maha.jpeg', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'عبدالمنعم الغامدي', avatarURL:'./img/dr-male.svg', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
]
var docCards= ''
docList.map((card)=>{
    docCards+=
    `
    <div class="card">
    <div class="img-container">
        <figure>

            <img src="${card.avatarURL}" class="avatar">
        </figure>
    </div>
    <div class="card-details">
        <div class="top">
            <div class="dr-info">
                <div class="dr-name">
                    <img src="./img/stethoscope.svg" width="15">
                    <div class="name">د. ${card.name}</div>
                </div>
                <div class="dr-specialty">
                    <img src="./img/specilalities/${card.specialtyURL}.png" width="15">
                    <div class="specialty">${card.specialty}</div>
                </div>
            </div>
            <button class="book">حجز موعد</button>
        </div>

        <div class="bottom">
                <div class="fee">
                    <img src="./img/money.svg" height="15" class="icon">
                    <div class="fee-amount">${card.fee} SAR</div>
                </div>
            <div class="hospital">
                <img src="./img/location-pin.svg" width="15" class="icon">
                <div class="hospital-name">${card.hospital}</div>
            </div>

        </div>

    </div>
</div>
    `
})
console.log(docCards)

cardsContainer.innerHTML=docCards; 
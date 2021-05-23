const myData= {
    statCards:[343, 124, 434 ,566], 
    lineChart: { 
        mothsArr:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        dataset1:[90,40,80,30,30,30,50,25,35,30,55,47],
        dataset2:[20,50,30,50,30,40,80,54,95,50,40,80]
    }
}

////////// STAT CARDS //////////
myData.statCards.map( (stat,i ) =>{
    const cardEle= document.querySelector(`.stat-card #card-${i+1}`)
    cardEle.innerHTML= stat; 
})


////////// LINE CHART //////////
const appointments= document.querySelector('#appointments-pie').getContext('2d');
gradient = appointments.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0.3, 'rgba(220, 176, 255,0.9)');
gradient.addColorStop(.7, 'rgba(220, 176, 255,0)');

//Global Options:
Chart.defaults.global.defaultFontFamily='Roboto'; 

let chart= new Chart(appointments , {
    type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
        //we can have multiple data sets
        datasets:[
        {
            label:'Cost',
            data:[90,40,80,30,30,30,50,25,35,30,55,47],
            pointBackgroundColor:'transparent',
            borderColor:'transparent',
            backgroundColor: '#F15F7933',

        },
        {
            label:'Revenue',
            data:[20,50,30,50,30,40,80,54,95,50,40,80],
            pointBackgroundColor:'#845EC2',
            pointBorderColor:'#fff',
            pointBorderWidth:1,
            pointRadius:4,
            borderWidth:4,
            borderColor:'#845EC2',
            backgroundColor: gradient,
        }]
    }, 
    options: {
        title:{display:false},
        legend:{display:true},
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
               ticks: {stepSize: 20},
               gridLines: {display: false},
            }],
            xAxes: [{
               gridLines: {display: false},
            }]
        }
    }
})
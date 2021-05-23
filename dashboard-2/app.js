////////// APPOINTMENTS //////////
const appointments = document
  .querySelector("#appointments-pie")
  .getContext("2d");
let AppointmentChart = new Chart(appointments, {
  type: "pie", //horizontalBar , pie , line , doughnut , radar , polarArea
  data: {
    labels: [
      "المواعيد الملغية",
      "المواعيد السابقة (المنتهية)",
      "المواعيد  القادمة"
    ],
    //we can have multiple data sets
    datasets: [
      {
        label: "dataset1",
        data: [90, 40, 20],
        pointBackgroundColor: "transparent",
        borderColor: "transparent",
        backgroundColor: ["#18647E", "#B8C8D2", "#dbdbdb"]
      }
    ]
  },
  options: {
    title: { display: false },
    legend: {
      display: true,
      position: "right"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

////////// FOLLOW UP //////////
const followup = document.querySelector("#followup-pie").getContext("2d");
let followupChart = new Chart(followup, {
  type: "pie", //horizontalBar , pie , line , doughnut , radar , polarArea
  data: {
    labels: ["مرارجعين التأمين", "مراجعين الكاش)"],
    //we can have multiple data sets
    datasets: [
      {
        label: "dataset1",
        data: [60, 40],
        pointBackgroundColor: "transparent",
        borderColor: "transparent",
        backgroundColor: ["#5E6EA4", "#C8CEDD"]
      }
    ]
  },
  options: {
    title: { display: false },
    legend: {
      display: true,
      position: "right"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

////////// REPORTS //////////
const reports = document.querySelector("#reports-pie").getContext("2d");
let reportsChart = new Chart(reports, {
  type: "pie", //horizontalBar , pie , line , doughnut , radar , polarArea
  data: {
    labels: ["مقروء", "غير مقروء"],
    //we can have multiple data sets
    datasets: [
      {
        label: "dataset1",
        data: [70, 30],
        pointBackgroundColor: "transparent",
        borderColor: "transparent",
        backgroundColor: ["#004A81", "#CAD5E0"]
      }
    ]
  },
  options: {
    title: { display: false },
    legend: {
      display: true,
      position: "right"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

////////// FOLLOWUP DONUT //////////

const followupDonut = document.querySelector("#quarter-followup-donut");
let followupDonutChart = new Chart(followupDonut, {
  type: "doughnut",
  data: {
    labels: ["مراجع متعدد الزيارات", "مراجع جديد"],
    datasets: [
      {
        label: "Dataset 1",
        data: [3, 5],
        backgroundColor: ["#5E6EA4", "#C8CEDD"]
      }
    ]
  }
});

////////// FOLLOWUP DONUT //////////

const followupBar = document.querySelector("#quarter-followup-bar");
let followupBarChart = new Chart(followupBar, {
  type: "bar",
  data: (data = {
    labels: ["مارس", "فبراير", "يناير"],
    datasets: [
      {
        label: "متعدد الزيارات",
        data: [34, 34, 23],
        // borderColor: 'red',
        backgroundColor: "#CAD5E0",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "مراجع جديد",
        data: [23, 36, 32],
        // borderColor: 'blue',
        backgroundColor: "#004A81",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      }
    ]
  }),
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      }
    },
    scales: {
      yAxes: [
        {
        //   ticks: { stepSize: 20 },
        //   gridLines: { display: false }
        }
      ],
      xAxes: [
        {
          gridLines: { display: false }
        }
      ]
    }
  }
});

// ////////// LINE CHART //////////
// const appointments= document.querySelector('#appointments-pie').getContext('2d');
// gradient = appointments.createLinearGradient(0, 0, 0, 450);
// gradient.addColorStop(0.3, 'rgba(220, 176, 255,0.9)');
// gradient.addColorStop(.7, 'rgba(220, 176, 255,0)');

// //Global Options:
// Chart.defaults.global.defaultFontFamily='Roboto';

// let chart= new Chart(appointments , {
//     type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
//     data: {
//         labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         //we can have multiple data sets
//         datasets:[
//         {
//             label:'Cost',
//             data:[90,40,80,30,30,30,50,25,35,30,55,47],
//             pointBackgroundColor:'transparent',
//             borderColor:'transparent',
//             backgroundColor: '#F15F7933',

//         },
//         {
//             label:'Revenue',
//             data:[20,50,30,50,30,40,80,54,95,50,40,80],
//             pointBackgroundColor:'#845EC2',
//             pointBorderColor:'#fff',
//             pointBorderWidth:1,
//             pointRadius:4,
//             borderWidth:4,
//             borderColor:'#845EC2',
//             backgroundColor: gradient,
//         }]
//     },
//     options: {
//         title:{display:false},
//         legend:{display:true},
//         responsive:true,
//         maintainAspectRatio: false,
//         scales: {
//             yAxes: [{
//                ticks: {stepSize: 20},
//                gridLines: {display: false},
//             }],
//             xAxes: [{
//                gridLines: {display: false},
//             }]
//         }
//     }
// })

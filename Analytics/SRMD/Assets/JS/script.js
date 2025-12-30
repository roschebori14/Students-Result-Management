//----------------------------------------------
// 1. PERFORMANCE TREND GRAPH
//--------------------------------------------------

const trendCtx=
document.getElementById('trendGraph').getContext('2d');

const trendLabel=['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'];
const trendScores=['64', '73', '60', '77', '83', '94'];

const trendGraph=new Chart(trendCtx, {
    type: 'line',
    data:{
        labels:trendLabel,

        datasets:[{
            label:'Performance (%)',
            data: trendScores,
            borderColor: 'blue',
            borderWidth: 3,
            backgroundColor: 'lightblue',
            fill: true,
        }]
    },
    options: {
        scales:{
             x:{
              title:{
                display: true,
                text: 'Months'
              }
              },
            y:{
                beginAtZero: false,
                max: 100,
                min: 50,
                title:{
                    display: true,
                    text: 'Score'
                }
            }
           
            }
        }
    }
    
);

//----------------------------------------------
// Score Distribution
//----------------------------------------------
const scoreCtx=
   document.getElementById('ScoreDistribution').getContext('2d');

   const scoreLabels=['0-19','20-40', '41-60', '61-80', '81-100'];
   const scoreData=[10, 30, 25, 17, 0];

   const ScoreDistribution=new Chart(scoreCtx, {
    type: 'line',
    data:{
        labels: scoreLabels,
        datasets:[{
            label: 'Count',
            data: scoreData,
            borderColor: 'orange',
            backgroundColor:'yellow',
            fill: true,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    },
    options:{
        scales:{
            y:{
                 beginAtZero: true,
                max: 50
            }
        }
    }
   });
  
    const scores=[76, 84, 96, 73, 88, 78, 98, 89, 91, 82];
    const classAverage=scores.reduce((a,b)=> a+b, 0)/scores.length;
    const ctx=
       document.getElementById('class-average').innerText='Class Average: ${classAverage.toFixed(2)}%';

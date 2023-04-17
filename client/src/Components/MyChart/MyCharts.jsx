import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const MyCharts = ({ maxHours, presentHours, absentHours}) => {
  const data = {
    labels: ['Present Hours', 'Absent Hours'],
    datasets: [
      {
        data: [presentHours, absentHours],
        backgroundColor: ['#880ED4', '#FF6384'],
        hoverBackgroundColor: ['#880ED4', '#FF6384'],
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: `Max Hours: ${maxHours}`,
      fontSize: 14,
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'black',
        fontSize: 8,
      },
    },
  };
  
  return <Doughnut data={data} options={options} />;
};

export default MyCharts;
















// import React from 'react'
// import { Doughnut } from 'react-chartjs-2';

// const MyCharts = () => {
//     const data = {
//         // labels: ['Red', 'Green', 'Yellow'],
//         datasets: [
//           {
//             label: 'My First Dataset',
//             data: [1],
//             backgroundColor: ['#A020F0'],
//             hoverBackgroundColor: ['#A020F0'],
//           },
//         ],
//       };

//       const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//       };
    
//     return (
//         <>
//             <div>Chart</div>
//             <Doughnut data={data} options={options}/>
//         </>
//     )
// }

// export default MyCharts;
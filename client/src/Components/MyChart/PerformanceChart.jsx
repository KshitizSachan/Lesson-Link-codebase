import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const MyCharts = ({obtainedMarks,totalMarks}) => {
  const data = {
    labels: ['Obtained Marks',"Lost Marks" ],
    datasets: [
      {
        data: [obtainedMarks,(totalMarks - obtainedMarks)],
        backgroundColor: ['#32CD32', '#000'],
        hoverBackgroundColor: ['#32CD32', '#000'],
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: `Total Marks: ${totalMarks}`,
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

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

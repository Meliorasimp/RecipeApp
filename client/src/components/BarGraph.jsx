import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data, labels }) => {
  const chartData = {
    labels: labels, 
    datasets: [
      {
        label: 'Total User Score',
        data: data,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        color: 'black',
        text: 'Recipes Created Each Month',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.5)',
        }
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.5)',
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarGraph;

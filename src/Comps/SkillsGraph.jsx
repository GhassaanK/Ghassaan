import React from 'react';
import { Bar } from 'react-chartjs-2';

const SkillsGraph = () => {
  const data = {
    labels: ['JavaScript', 'React', 'Python', 'HTML', 'CSS'],
    datasets: [
      {
        label: 'Skills Proficiency',
        data: [90, 80, 75, 95, 85],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'logarithmic',
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="skills-graph">
      <h2>Skills Proficiency</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsGraph;

import {useState} from 'react';
import {Bar} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChartItem = () => {
  const [clicks, setClicks] = useState(0);

  const data = {
    labels: ['Clicks'],
    datasets: [
      {
        label: 'Number of Clicks',
        data: [clicks],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="btn btn-primary bg-blue-500 text-white p-2 rounded mb-4
         hover:bg-blue-700"
        onClick={() => setClicks(clicks + 1)}
      >
        Click Me
      </button>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartItem;

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 'November', 'December'];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() => Math.floor(Math.random() * 100000)),
        backgroundColor: "#c2233b",
      },
      {
        label: "Subscriptions",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "#3182ce",
      }
    ],
  };

  return (
    <div className="w-10/12 ml-8 mt-44 rounded-lg">
      <Bar data={data} />
    </div>
  );
};

export default Chart;

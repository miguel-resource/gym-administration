import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const Chart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 'November', 'December'];
  const data = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: labels.map(() => Math.floor(Math.random() * 100000)),
        backgroundColor: "#c2233b",
        borderColor: "#c2233b",
    
      },
      {
        label: "Suscripciones",
        data: labels.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "#3182ce",
        borderColor: "#3182ce",
      }
    ],
  };

  return (
    <div className="w-10/12 ml-8 mt-44 rounded-lg">
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Chart;

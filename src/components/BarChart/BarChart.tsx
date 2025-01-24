import { useQuery } from "@tanstack/react-query";
import { Bar } from "react-chartjs-2";
import { fetchAssets } from "../../api/cryptoApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const selectedCryptos = useSelector(
    (state: RootState) => state.crypto.fetchedCryptoCurrencies
  );

  const { data } = useQuery({
    queryKey: ["assets"],
    queryFn: () => fetchAssets(null, selectedCryptos.join(",")),
    refetchInterval: 5000,
  });

  const changePercent24Hr = data?.map((assets) => assets.changePercent24Hr);

  const chartData = {
    labels: selectedCryptos,
    datasets: [
      {
        label: "24h Percentage Change",
        data: changePercent24Hr,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  if (data) return <Bar data={chartData} options={options} />;
};

export default BarChart;

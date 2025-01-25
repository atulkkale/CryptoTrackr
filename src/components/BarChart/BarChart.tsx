import "./BarChart.css";

import { useQuery } from "@tanstack/react-query";
import { Bar } from "react-chartjs-2";
import { fetchAssets } from "../../api/cryptoApi";
import { useDispatch, useSelector } from "react-redux";
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
import { updateLastFetchTime } from "../../store/cryptoSlice";
import { getCurrentTime } from "@utils/util";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const barBorderColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const BarChart: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCryptos = useSelector(
    (state: RootState) => state.crypto.fetchedCryptoCurrencies
  );

  const { data, fetchStatus } = useQuery({
    queryKey: ["assets"],
    queryFn: () => fetchAssets(null, selectedCryptos.join(",")),
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (fetchStatus === "fetching") {
      dispatch(updateLastFetchTime(getCurrentTime()));
    }
  }, [fetchStatus]);

  const changePercent24Hr = data?.map((assets) => assets.changePercent24Hr);

  const chartData = {
    labels: selectedCryptos,
    datasets: [
      {
        label: "24h Percentage Change",
        data: changePercent24Hr,
        backgroundColor: barColors.slice(0, selectedCryptos.length),
        borderColor: barBorderColors.slice(0, selectedCryptos.length),
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

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

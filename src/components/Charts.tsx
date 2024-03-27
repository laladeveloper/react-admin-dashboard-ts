import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  LineElement,
  PieController,PointElement, Filler
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PieController,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

const months = ["January", "February", "March", "April", "May", "June", "July"];
interface BarChartProps {
  horizental?: boolean;
  data1: number[];
  data2: number[];
  title1: string;
  title2: string;
  bgcolor1: string;
  bgcolor2: string;
  labels?: string[];
}
export const BarChart = ({
  horizental = false,
  data1 = [],
  data2 = [],
  title1,
  title2,
  bgcolor1,
  bgcolor2,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizental ? "y" : "x",
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgcolor1,
        barPercentage: 1,
        barThickness: "flex",
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgcolor2,
        barPercentage: 1,
        barThickness: "flex",
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar width={horizental? "200%" : ""} options={options} data={data} />;
};

//  doughnut chart
interface DoughnutChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

// PieChart


interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  offset?: number[];
}
export const PieChart = ({
  labels,
  data,
  backgroundColor,
  offset,
}: PieChartProps) => {
  const pieChartData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  const pieChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={pieChartData} options={pieChartOptions} />;
};

interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels = months,
}: LineChartProps) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartFile() {
  // Access Redux state
  const taskData = useSelector((state) => state.todos.todos);

  // Filter tasks into completed and incomplete categories
  const completed = taskData.filter((item) => item.taskCompleted === true).length;
  const incomplete = taskData.filter((item) => item.taskCompleted === false).length;

  // Prepare chart data dynamically
  const chartData = {
    datasets: [
      {
        data: [completed, incomplete],
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
    labels: ["Completed", "Incomplete"],
  };

  return <Doughnut data={chartData}></Doughnut>;
}

export default ChartFile;

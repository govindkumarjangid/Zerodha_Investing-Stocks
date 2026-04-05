import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnoutChart = ({data}) => {
  return (
      <div className="mb-30">
        <Doughnut data={data} />
      </div>
  )
}

export default DoughnoutChart;
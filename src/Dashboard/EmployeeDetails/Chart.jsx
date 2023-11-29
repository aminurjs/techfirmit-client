import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
import PropTypes from "prop-types";

const Chart = ({ data, w, h, s }) => {
  return (
    <BarChart
      width={w}
      height={h}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 5,
      }}
      barSize={s}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Bar dataKey="amount" fill="#8884d8" label={{ position: "top" }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};
Chart.propTypes = {
  data: PropTypes.array,
  w: PropTypes.number,
  h: PropTypes.number,
  s: PropTypes.number,
};
export default Chart;

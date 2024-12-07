//Task3:Implement Specific Chart Components
import ChartComponent from 'ChartComponent'
const BarChart = ({ data }) => {
  const barChartData = {
    labels: financial_data.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: financial_data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};
export default BarChart
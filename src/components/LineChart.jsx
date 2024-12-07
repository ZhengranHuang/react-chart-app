//Task3:Implement Specific Chart Components
import ChartComponent from 'ChartComponent'
const LineChart = ({ data }) => {
    const LineChartData = {
      labels: financial_data.profits,
      datasets: [
        {
          label: 'Monthly profits',
          data: financial_data.profits,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const LineChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    return <ChartComponent type="line" data={LineChartData} options={LineChartOptions} />;
  };
  export default LineChart
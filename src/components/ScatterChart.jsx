//Task3:Implement Specific Chart Components
import ChartComponent from 'ChartComponent'
const ScatterChart = ({ data }) => {
    const ScatterChartData = {
      labels: financial_data.profits, data,expenses,
      datasets: [
        {
          label: 'expenses',
          data: financial_data.expenses,
          label: 'profits',
          data: financial_data.profits,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const ScatterChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    return <ChartComponent type="scatter" data={ScatterChartData} options={ScatterChartOptions} />;
  };
  export default ScatterChart
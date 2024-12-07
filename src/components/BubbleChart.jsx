//Task3:Implement Specific Chart Components
import ChartComponent from 'ChartComponent'
const BubbleChart = ({ data }) => {
    const BubbleChartData = {
      labels: financial_data.profits, financial_data,expenses,
      datasets: [
        {
          label: 'expenses',
          data: financial_data.expenses,
          label: 'profits',
          data: financial_data.profits,
          label: 'sales',
          data: financial_data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const BubbleChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    return <ChartComponent type="bubble" data={BubbleChartData} options={BubbleChartOptions} />;
  };
  export default BubbleChart
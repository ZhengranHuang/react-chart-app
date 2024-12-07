//Task3:Implement Specific Chart Components
const BubbleChart = ({ data }) => {
    const BubbleChartData = {
      labels: data.profits, data,expenses,
      datasets: [
        {
          label: 'expenses',
          data: data.expenses,
          label: 'profits',
          data: data.profits,
          label: 'sales',
          data: data.sales,
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
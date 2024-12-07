//Task3:Implement Specific Chart Components
const LineChart = ({ data }) => {
    const ScatterChartData = {
      labels: data.profits, data,expenses,
      datasets: [
        {
          label: 'expenses',
          data: data.expenses,
          label: 'profits',
          data: data.profits,
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
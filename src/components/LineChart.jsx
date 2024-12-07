//Task3:Implement Specific Chart Components
const LineChart = ({ data }) => {
    const LineChartData = {
      labels: data.profits,
      datasets: [
        {
          label: 'Monthly profits',
          data: data.profits,
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
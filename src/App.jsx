//Task4:Fetch Data for Charts&Task5:Render Charts in the App
import { useState } from 'react'
import './App.css'
//Import and render the chart components with fetched data.
import BarChart from 'BarChart'
import BubbleChart from 'BubbleChart'
import ScatterChart from 'ScatterChart'
import BarChart from 'BarChart'
const [chartData, setChartData] = useState(null);
useEffect(() => {
  fetch('/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
}, []);
if (!chartData) {
//Display a loading message while data is being fetched
  return <div>Loading...</div>;
}
return (
  <div style={{ textAlign: 'center' }}>
    <h1>Dynamic Charts with React and Chart.js</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
);

export default App

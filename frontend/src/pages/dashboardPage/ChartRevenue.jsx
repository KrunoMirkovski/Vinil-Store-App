import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components for use
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartRevenue = () => {
  // Sample revenue data for each month
  const revenueData = [500, 700, 800, 600, 750, 900, 650, 850, 1100, 800, 1050, 840];;
// Data object for the chart, including labels (months) and datasets (revenue values)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue (USD)',
        data: revenueData, // Data for the revenue (linked to months)
        backgroundColor: 'rgba(34, 197, 94, 0.7)', 
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };
 // Configuration options for the chart (responsive, scales, plugins)
  const options = { // Make chart responsive to screen size changes
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Set the y-axis to start from zero for better readability
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Monthly Revenue</h2>  {/* Title of the chart */}
      <div className='hidden md:block'>
      <Bar data={data} options={options} className='' /> {/* Rendering the Bar chart with the data and options */}
      </div>
    </div>
  );
};

export default ChartRevenue
import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler);

const BalanceHistory = () => {
    const chartRef = useRef(null);

    // Sample data for the balance history
    const data = {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], // Months
        datasets: [
            {
                label: 'Balance Trend',
                data: [100, 380, 220, 500, 410, 780, 210, 590, 220], // Sample balance data
                fill: true, // Enable filling
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return null;
                    }
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(1, 'rgba(45, 96, 255, 0.5)'); // Start color
                    gradient.addColorStop(0, 'rgba(45, 96, 255, 0)'); // End color
                    return gradient;    
                },
                borderColor: 'rgba(24, 20, 243, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0, // Minimum value
                max: 800, // Maximum value
                ticks: {
                    stepSize: 200, // Set step size for ticks
                    color: 'rgba(113, 142, 191, 1)', // Color for y-axis ticks
                },
            },
            x: {
                title: {
                    display: false,
                },
                ticks: {
                    color: 'rgba(113, 142, 191, 1)', // Color for x-axis ticks
                },
            },
        },
    };

    return (
        <>
         <h2 className="text-xl font-bold mb-4 bluetext">Balance History</h2>
        <div className="bg-white shadow-md rounded-4xl p-4 lg:h-72">
            <Line ref={chartRef} data={data} options={options} />
        </div>
        </>
    );
};

export default BalanceHistory; 
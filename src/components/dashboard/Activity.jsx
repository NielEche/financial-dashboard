import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Activity = () => {
    // Mock data for the weekly activity
    const data = {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // Days of the week
        datasets: [
            {
                label: 'Withdrawals',
                data: [500, 350, 300, 480, 120, 400, 400], // Sample withdrawal data
                backgroundColor: 'rgba(35, 35, 35, 1)', // Color for withdrawals
            },   {
                label: 'Deposits',
                data: [200, 150, 260, 380, 220, 250, 320], // Sample deposit data
                backgroundColor: 'rgba(57, 106, 255, 1)', // Color for deposits
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Activity Chart',
            },
        },
    };

    return (
        <>
        <h2 className="text-xl font-bold mb-4 bluetext">Weekly Activity </h2>
        <div className="bg-white shadow-md p-4 rounded-4xl">
              {/* weekly activity bar */}
            <Bar data={data} options={{ 
                ...options, 
                plugins: { 
                    ...options.plugins, 
                    legend: {
                        align: 'end',
                        labels: {
                            usePointStyle: true, 
                            pointStyle: 'circle',
                        },
                    },
                    title: { display: false } 
                },
                elements: {
                    bar: {
                        borderRadius: 50,
                    }
                }
            }} />
        </div>
        </>
    );
};

export default Activity;

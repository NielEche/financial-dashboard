import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
    // Mock data for expense categories
    const data = {
        labels: ['Entertainment', 'Bill Expenses', 'Investments', 'Others'], // Categories
        datasets: [
            {
                label: 'Expense Breakdown',
                data: [30, 15, 20, 35], // Sample expense data
                backgroundColor: [
                    'rgba(52, 60, 106, 1)', // Entertainment
                    'rgba(252, 121, 0, 1)', // Bill Expenses
                    'rgba(57, 106, 255, 1)', // Investments
                    'rgba(35, 35, 35, 1)', // Others
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
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
                text: 'Expense Statistics',
            },
        },
    };

    return (
        <>
            <h2 className="text-xl font-bold mb-4 bluetext">Expense Statistics</h2>
            <div className="bg-white shadow-md rounded-4xl p-6 ">
                <Pie data={data} options={{ 
                    ...options, 
                    plugins: { 
                        ...options.plugins, 
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true, 
                                pointStyle: 'circle',
                            },
                        },
                        title: { display: false } 
                    } 
                }} />
            </div>
        </>
    );
};

export default ExpenseStatistics;

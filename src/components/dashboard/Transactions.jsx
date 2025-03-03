import React, { useEffect, useState } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Mocking API call to fetch transaction details
        const fetchTransactions = async () => {
            // Simulating an API response
            const response = [
                { id: 1, date: '2021-28-01', description: 'Deposit from my Card', amount: '-$850', type: 'card' },
                { id: 2, date: '2021-25-01', description: 'Deposit Paypal', amount: '+$2,500', type: 'paypal' },
                { id: 3, date: '2021-21-01', description: 'Jemi Wilson ', amount: '+$5,400', type: 'transfer' },
                { id: 4, date: '2021-17-01', description: 'Deposit Paypal', amount: '+$1,500', type: 'paypal' },
                { id: 5, date: '2021-11-01', description: 'Hair Cut ', amount: '-$200', type: 'transfer' },
            ];
            setTransactions(response);
        };

        fetchTransactions();
    }, []);

    return (
        <>
            <h2 className="text-xl font-bold mb-4 bluetext">Recent Transactions</h2>
            <div className='bg-white shadow-md rounded-4xl p-6 overflow-hidden'>
                <div className='overflow-auto h-52'>
                     {/* all transactions */}
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="flex justify-between py-2  transition-transform transform hover:scale-95 hover:drop-shadow-md ">
                            <div className="flex items-center">
                                {transaction.type === 'card' && <img src="/card.svg" alt="Card" className="mr-2" width={55} height={55} />}
                                {transaction.type === 'paypal' && <img src="/paypal.svg" alt="Paypal" className="mr-2" width={55} height={55} />}
                                {transaction.type === 'transfer' && <img src="/transfer.svg" alt="Transfer" className="mr-2" width={55} height={55} />}
                                <div className='px-1'>
                                    <p className="font-semibold text-base">{transaction.description}</p>
                                    <p className="text-gray-400 py-1 text-sm ">{new Date(transaction.date.split('-').reverse().join('-')).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                            <p className={transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                                {transaction.amount}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Transactions;
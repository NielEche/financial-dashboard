import '../style/dashboard.css'
import Cards from '../components/dashboard/Cards';
import Transactions from '../components/dashboard/Transactions';
import Activity from '../components/dashboard/Activity';
import ExpenseStatistics from '../components/dashboard/ExpenseStatistics';
import QuickTransfer from '../components/dashboard/QuickTransfer'; 
import BalanceHistory from '../components/dashboard/BalanceHistory'; 

const Dashboard = () => {
    return (
        <div className='lg:bg-gray-100'>
             <div className='lg:flex lg:px-8 '>
                <div className="lg:w-2/3 pt-6 px-4">
                    <Cards />
                </div>

                <div className='px-4 lg:w-1/3  pt-6'>
                    <Transactions />
                </div>
            </div>   

            <div className='lg:flex lg:px-8 '>
                <div className="lg:w-2/3 pt-6 px-4">
                    <Activity />
                </div>
                <div className='px-4 lg:w-1/3  pt-6'>
                    <ExpenseStatistics />
                </div>  
            </div>  

            <div className='lg:flex lg:px-8 pb-10'>
                <div className="lg:w-2/5 pt-6 px-4">
                    <QuickTransfer />
                </div>
                <div className="lg:w-3/5 pt-6 px-4">
                    <BalanceHistory />
                </div>
            </div>  

        </div>
    );
};

export default Dashboard;
  
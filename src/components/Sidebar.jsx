import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();

  return (
    <>
  
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-10
        w-64 bg-white text-gray-400 border-r border-gray-200 h-screen py-4
        transition-transform duration-300 ease-in-out z-100
        lg:translate-x-0 lg:static
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="pb-10 pt-2">
          <img 
            src="/Logo.png"
            alt="Logo" 
            className="mx-auto"
            width={167}
            height={35}
          />
        </div>
        <ul className="">
          <li className={`flex items-center gap-3 mb-4 text-sm py-1 hover:text-black  p-10 ${window.location.pathname === '/' ? 'text-black w-full p-10' : ''}`}>
          {window.location.pathname === '/' && (
              <span className="border-l-6 border-black h-12 rounded-r-3xl absolute left-0"></span>
            )}
            <a href="/" className="flex items-center gap-3">
            <img src="/dashboard-icon.png" alt="Dashboard" className={`w-5 h-5 ${window.location.pathname === '/' ? ' brightness-0 ' : ''}`}  />
            Dashboard
            </a>
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/transactions-icon.png" alt="Transactions" className="w-5 h-5" />
            Transactions
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/accounts-icon.png" alt="Accounts" className="w-5 h-5" />
            Accounts
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/investments-icon.png" alt="Investments" className="w-5 h-5" />
            Investments
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/credit-cards-icon.png" alt="Credit Cards" className="w-5 h-5" />
            Credit Cards
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/loans-icon.png" alt="Loans" className="w-5 h-5" />
            Loans
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/services-icon.png" alt="Services" className="w-5 h-5" />
            Services
          </li>
          <li className="flex items-center gap-3 mb-4 text-sm py-1 hover:text-black p-10">
            <img src="/privileges-icon.png" alt="My Privileges" className="w-5 h-5" />
            My Priviledges
          </li>
          <li className={`flex items-center gap-3 mb-4 text-sm py-1 hover:text-black  p-10 ${window.location.pathname === '/settings' ? 'text-black w-full p-10' : ''}`}>
            {window.location.pathname === '/settings' && (
              <span className="border-l-6 border-black h-12 rounded-r-3xl absolute left-0"></span>
            )}
            <a href="/settings" className="flex items-center gap-3">
              <img src="/settings-icon.png" alt="Settings" className={`w-5 h-5 ${window.location.pathname === '/settings' ? ' brightness-0 ' : ''}`} />
              Settings
            </a>
          </li>
        </ul>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0  bg-opacity-10 lg:hidden z-0"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

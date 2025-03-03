import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { toggleSidebar } = useAppContext();
    return (
      <>
     
      <div className="flex justify-between bg-white border-b border-gray-200">
        <nav className="bluetext p-4 hidden lg:flex">
          <h1 className="text-2xl font-bold py-2 px-4">{window.location.pathname === '/settings' ? 'Settings' : 'Overview'}</h1>
        </nav>

        <div className="hidden lg:flex items-center gap-4 py-2 px-8">
          <div className="flex items-center bg-gray-100 rounded-3xl p-2">
            <img src="/search-icon.svg" alt="Search" className="w-5 h-5 ml-4" />
            <input 
              type="text" 
              placeholder="Search for something" 
              className="border-0 rounded-md p-2 text-xs focus:outline-none focus:ring-0"
            />
          </div>
          <a href="/settings">
            <img src="/Group4.svg" className="w-10 h-10" alt="settings" />
          </a>
          <a href="#">
            <img src="/Group3.svg" className="w-10 h-10" alt="settings" />
          </a>
          <a href="/settings">
            <img src="/profile.png" className="w-10 h-10" alt="Profile" />
          </a>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center bg-white  lg:hidden px-6 py-4">
          <button 
              className="lg:hidden top-4 left-4 z-20 p-2 rounded-md"
              onClick={toggleSidebar}>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
          </button>
          <h1 className="bluetext text-2xl font-bold py-2 px-4 flex-grow text-center">{window.location.pathname === '/settings' ? 'Settings' : 'Overview'}</h1>
          <a href="/settings">
            <img src="/profile.png" className="w-10 h-10" alt="Profile" />
          </a>
        </div>
          <div className="flex items-center bg-gray-100 rounded-3xl p-2 mx-6 lg:hidden">
            <img src="/search-icon.svg" alt="Search" className="w-5 h-5 ml-4" />
            <input 
              type="text" 
              placeholder="Search for something" 
              className="border-0 rounded-md p-2 text-xs focus:outline-none focus:ring-0"
            />
          </div>
      </div>
     
      </>
    );
  };
  
  export default Navbar;
  
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <aside className={`w-64 bg-gray-800 text-white h-screen p-4 transition-all ${isSidebarOpen ? "block" : "hidden"}`}>
      <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarToggle from "@/components/Sidebar/SidebarToggle";
import { SidebarProvider } from "@/components/Sidebar/SidebarContext";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 sm:ml-64">
          <SidebarToggle />
          <div className="p-4 border-2 border-dashed rounded-lg border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Cards */}
              <div className="bg-gray-50 dark:bg-gray-800 h-24 rounded flex items-center justify-center">
                Card 1
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 h-24 rounded flex items-center justify-center">
                Card 2
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 h-24 rounded flex items-center justify-center">
                Card 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

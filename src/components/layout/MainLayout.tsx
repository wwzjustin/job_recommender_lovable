
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to get appropriate page title based on current route
  const getPageTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/profile":
        return "Profile";
      case "/applications":
        return "Applications";
      case "/jobs":
        return "Job Openings";
      case "/company":
        return "Company";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {getPageTitle(location.pathname)}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {location.pathname === "/" && "Welcome to your job application dashboard"}
                {location.pathname === "/profile" && "Manage your professional profile"}
                {location.pathname === "/applications" && "Track your job applications"}
                {location.pathname === "/jobs" && "Discover new job opportunities"}
                {location.pathname === "/company" && "Recruitment and candidate management"}
              </p>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in">
              {location.pathname === "/" && (
                <span className="status-pill bg-info-light text-info">Dashboard</span>
              )}
              {location.pathname === "/profile" && (
                <span className="status-pill bg-success-light text-success">Profile</span>
              )}
              {location.pathname === "/applications" && (
                <span className="status-pill bg-warning-light text-warning">Applications</span>
              )}
              {location.pathname === "/jobs" && (
                <span className="status-pill bg-info-light text-info">Jobs</span>
              )}
              {location.pathname === "/company" && (
                <span className="status-pill bg-success-light text-success">Company</span>
              )}
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};


import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
      default:
        return "Dashboard";
    }
  };

  const navigationItems = [
    { path: "/", label: "Dashboard", color: "bg-info-light text-info" },
    { path: "/profile", label: "Profile", color: "bg-success-light text-success" },
    { path: "/applications", label: "Applications", color: "bg-warning-light text-warning" },
    { path: "/jobs", label: "Jobs", color: "bg-info-light text-info" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

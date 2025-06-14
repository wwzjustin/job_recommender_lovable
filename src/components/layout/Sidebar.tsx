import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  User, 
  Briefcase, 
  Search, 
  FileText, 
  Settings
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: <FileText className="h-5 w-5" /> },
    { name: "My Profile", href: "/profile", icon: <User className="h-5 w-5" /> },
    { name: "Jobs Applied", href: "/applications", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Job Openings", href: "/jobs", icon: <Search className="h-5 w-5" /> },
    { name: "Settings", href: "/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div
      className={cn(
        "sidebar bg-sidebar text-sidebar-foreground border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-20",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8" />
            <span className="text-xl font-bold">JobFlow</span>
          </Link>
        )}
        {!isOpen && <Briefcase className="h-8 w-8 mx-auto" />}
      </div>

      <nav className="flex-1 pt-6">
        <ul className="space-y-1 px-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "flex items-center text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-md px-3 py-2 transition-colors",
                  location.pathname === link.href && "bg-sidebar-accent text-sidebar-foreground font-medium",
                  !isOpen && "justify-center"
                )}
              >
                {link.icon}
                {isOpen && <span className="ml-3">{link.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <div className={cn(
          "flex items-center",
          isOpen ? "justify-between" : "justify-center"
        )}>
          {isOpen && (
            <div className="flex items-center space-x-3">
              <div className="bg-sidebar-accent rounded-full h-8 w-8 flex items-center justify-center">
                <span className="text-sidebar-foreground font-medium">JD</span>
              </div>
              <span className="text-sm font-medium">John Doe</span>
            </div>
          )}
          {!isOpen && (
            <div className="bg-sidebar-accent rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-sidebar-foreground font-medium">JD</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

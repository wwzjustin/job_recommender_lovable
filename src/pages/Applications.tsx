
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Building2, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, XCircle, Briefcase } from "lucide-react";

export const Applications = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const applications = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Google",
      location: "Mountain View, CA",
      logo: "G",
      logoColor: "bg-blue-500",
      appliedDate: "Apr 25, 2025",
      status: "interviewing",
      statusText: "Technical Interview",
      nextStep: "Interview scheduled for May 2, 10:00 AM",
    },
    {
      id: 2,
      position: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      logo: "A",
      logoColor: "bg-gray-700",
      appliedDate: "Apr 20, 2025",
      status: "review",
      statusText: "Application Under Review",
      nextStep: "Waiting for recruiter response",
    },
    {
      id: 3,
      position: "Product Manager",
      company: "Microsoft",
      location: "Remote",
      logo: "M",
      logoColor: "bg-green-600",
      appliedDate: "Apr 18, 2025",
      status: "offer",
      statusText: "Offer Received",
      nextStep: "Respond to offer by May 5",
    },
    {
      id: 4,
      position: "Frontend Developer",
      company: "Netflix",
      location: "Los Gatos, CA",
      logo: "N",
      logoColor: "bg-red-600",
      appliedDate: "Apr 15, 2025",
      status: "rejected",
      statusText: "Not Selected",
      nextStep: "Position has been filled",
    },
    {
      id: 5,
      position: "UI Designer",
      company: "Spotify",
      location: "Remote",
      logo: "S",
      logoColor: "bg-green-500",
      appliedDate: "Apr 10, 2025",
      status: "saved",
      statusText: "Draft Application",
      nextStep: "Complete application form",
    },
  ];

  const filteredApplications = filterStatus === "all" 
    ? applications 
    : applications.filter((app) => app.status === filterStatus);

  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center pt-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <Button>
          <Briefcase className="mr-2 h-4 w-4" />
          Track New Application
        </Button>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search applications..." 
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select defaultValue="all" onValueChange={setFilterStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="saved">Saved</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
                <SelectItem value="interviewing">Interviewing</SelectItem>
                <SelectItem value="offer">Offer</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="company">Company Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <div className="flex-1">Position</div>
            <div className="flex-1 hidden md:block">Company</div>
            <div className="w-28 hidden md:block">Applied Date</div>
            <div className="w-28 hidden lg:block">Location</div>
            <div className="w-32">Status</div>
            <div className="w-6"></div>
          </div>

          <div className="space-y-2">
            {filteredApplications.map((application) => (
              <ApplicationRow key={application.id} application={application} />
            ))}
          </div>
          
          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No applications found matching your filters.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-muted rounded-lg border p-4">
        <div className="flex items-center mb-4">
          <FileText className="text-primary mr-2 h-5 w-5" />
          <h2 className="font-semibold">Application Tips</h2>
        </div>
        <div className="text-sm space-y-4">
          <p>Here are some tips to improve your job applications:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tailor your resume for each application by highlighting relevant skills</li>
            <li>Follow up after 1-2 weeks if you haven't heard back</li>
            <li>Prepare for interviews by researching the company</li>
            <li>Send a thank-you note after interviews</li>
          </ul>
          <Button variant="link" className="p-0">View more tips</Button>
        </div>
      </div>
    </div>
  );
};

const ApplicationRow = ({ application }: { application: any }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "interviewing":
        return <Badge className="bg-info-light text-info">Interviewing</Badge>;
      case "review":
        return <Badge className="bg-warning-light text-warning">Under Review</Badge>;
      case "offer":
        return <Badge className="bg-success-light text-success">Offer</Badge>;
      case "rejected":
        return <Badge className="bg-danger-light text-danger">Rejected</Badge>;
      case "saved":
        return <Badge className="bg-gray-100 text-gray-500">Saved</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "interviewing":
        return <MessageSquare className="h-4 w-4 text-info" />;
      case "review":
        return <Clock className="h-4 w-4 text-warning" />;
      case "offer":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-danger" />;
      case "saved":
        return <FileText className="h-4 w-4 text-gray-500" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors job-card">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <div className={`${application.logoColor} text-white h-10 w-10 rounded-md flex items-center justify-center font-bold`}>
              {application.logo}
            </div>
            <div className="ml-3">
              <h3 className="font-medium truncate">{application.position}</h3>
              <p className="text-sm text-muted-foreground md:hidden">{application.company}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 hidden md:block">
          <div className="flex items-center">
            <Building2 className="h-4 w-4 text-muted-foreground mr-1" />
            <span>{application.company}</span>
          </div>
        </div>
        
        <div className="w-28 hidden md:flex items-center">
          <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
          <span className="text-sm">{application.appliedDate}</span>
        </div>
        
        <div className="w-28 hidden lg:block text-sm">
          {application.location}
        </div>
        
        <div className="w-32 flex items-center">
          <div className="mr-2">{getStatusIcon(application.status)}</div>
          {getStatusBadge(application.status)}
        </div>
        
        <div className="w-6">
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-muted-foreground pl-12">
        {application.nextStep}
      </div>
    </div>
  );
};

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default Applications;

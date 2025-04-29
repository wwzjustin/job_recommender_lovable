
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Calendar, CheckCircle, Clock, FileText, Star, Briefcase, ChartLine } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center pt-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            Export Data
          </Button>
          <Button>
            Update Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCompletionCard />
        <ApplicationsCard />
        <UpcomingInterviewsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecommendedJobsCard />
        </div>
        <div>
          <JobMatchStatistics />
        </div>
      </div>
    </div>
  );
};

const ProfileCompletionCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Profile Completion</CardTitle>
        <CardDescription>Complete your profile for better matches</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">75% Complete</span>
            <Link to="/profile" className="text-sm text-primary hover:underline">
              Complete now
            </Link>
          </div>
          <Progress value={75} className="h-2" />
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-success">
              <CheckCircle className="h-4 w-4 mr-2" />
              Basic Information
            </li>
            <li className="flex items-center text-success">
              <CheckCircle className="h-4 w-4 mr-2" />
              Work Experience
            </li>
            <li className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              Upload Portfolio
            </li>
            <li className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              Complete Assessment
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const ApplicationsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Job Applications</CardTitle>
        <CardDescription>Your current application status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">14</div>
            <div className="text-sm text-muted-foreground mt-1">Active Applications</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-muted-foreground mt-1">Interview Invites</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">8</div>
            <div className="text-sm text-muted-foreground mt-1">Pending Review</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">1</div>
            <div className="text-sm text-muted-foreground mt-1">Offers</div>
          </div>
        </div>
        <div className="mt-4">
          <Link to="/applications" className="text-sm text-primary flex items-center hover:underline">
            View all applications
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const UpcomingInterviewsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Upcoming Interviews</CardTitle>
        <CardDescription>Your scheduled interviews</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-primary/10 p-3 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Google</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Tomorrow</span>
            </div>
            <div className="text-sm">Senior Frontend Developer</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              Apr 30, 2025 · 10:00 AM
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Stripe</span>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Next Week</span>
            </div>
            <div className="text-sm">Product Designer</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              May 4, 2025 · 2:30 PM
            </div>
          </div>
          <Link to="/calendar" className="text-sm text-primary flex items-center hover:underline">
            View calendar
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const RecommendedJobsCard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$140,000 - $180,000",
      match: 92,
      logo: "G",
      logoColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Figma",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      match: 88,
      logo: "F",
      logoColor: "bg-purple-500",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Stripe",
      location: "Remote",
      salary: "$130,000 - $160,000",
      match: 85,
      logo: "S",
      logoColor: "bg-indigo-500",
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium">AI-Recommended Jobs</CardTitle>
            <CardDescription>Personalized for your profile</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="job-card border rounded-lg p-4 bg-white">
              <div className="flex items-start">
                <div className={`${job.logoColor} text-white h-10 w-10 rounded-md flex items-center justify-center font-bold`}>
                  {job.logo}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{job.title}</h3>
                    <span className="bg-success-light text-success text-xs px-2 py-1 rounded-full font-medium">{job.match}% Match</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{job.company} • {job.location}</div>
                  <div className="text-sm mt-1">{job.salary}</div>
                  <div className="mt-3 flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      Save
                    </Button>
                    <Button size="sm" className="text-xs">
                      Quick Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const JobMatchStatistics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Profile Analytics</CardTitle>
        <CardDescription>Your profile performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Profile Views</span>
              <span className="text-sm text-green-600">+12%</span>
            </div>
            <Progress value={68} className="h-2" />
            <span className="text-xs text-muted-foreground">68 views this week</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Application Success Rate</span>
              <span className="text-sm text-green-600">+5%</span>
            </div>
            <Progress value={42} className="h-2" />
            <span className="text-xs text-muted-foreground">42% response rate</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Skills Match</span>
              <span className="text-sm text-amber-600">-3%</span>
            </div>
            <Progress value={78} className="h-2" />
            <span className="text-xs text-muted-foreground">78% match with saved jobs</span>
          </div>
          <div className="pt-2">
            <Button variant="outline" size="sm" className="w-full">
              <ChartLine className="mr-2 h-4 w-4" />
              View Detailed Analytics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;

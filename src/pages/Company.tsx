
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  UserRound,
  MapPin,
  Building2,
  Mail,
  Calendar,
  ChevronDown,
  Briefcase,
  Star,
  Clock,
  FileText,
  MessageSquare
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Company = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center pt-6">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            Add Team Member
          </Button>
          <Button>
            Post New Job
          </Button>
        </div>
      </div>

      <Tabs defaultValue="candidates" className="space-y-6">
        <TabsList>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="candidates" className="space-y-6">
          <CandidatesTab />
        </TabsContent>
        
        <TabsContent value="analytics">
          <Analytics />
        </TabsContent>
        
        <TabsContent value="jobs">
          <ActiveJobs />
        </TabsContent>
        
        <TabsContent value="team">
          <TeamMembers />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CandidatesTab = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(1);
  
  const candidates = [
    {
      id: 1,
      name: "Sarah Parker",
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      photo: null,
      experience: "8 years",
      education: "Stanford University",
      match: 92,
      status: "Interviewing",
      applicationDate: "Apr 25, 2025",
      lastActivity: "2 days ago",
      skills: ["React", "TypeScript", "GraphQL", "Redux", "Node.js", "CSS"],
      summary: "Frontend developer with 8+ years of experience building responsive web applications using modern JavaScript frameworks. Specializing in React, TypeScript, and UI component libraries."
    },
    {
      id: 2,
      name: "Alex Johnson",
      title: "UX Designer",
      location: "Remote (NYC)",
      photo: null,
      experience: "5 years",
      education: "Rhode Island School of Design",
      match: 85,
      status: "Application Review",
      applicationDate: "Apr 28, 2025",
      lastActivity: "3 days ago",
      skills: ["UI/UX", "Figma", "User Research", "Wireframing", "Prototyping"],
      summary: "UX Designer with 5 years of experience creating intuitive user interfaces and conducting user research to inform design decisions. Experienced with Figma, Sketch, and Adobe Creative Suite."
    },
    {
      id: 3,
      name: "Michael Torres",
      title: "DevOps Engineer",
      location: "Chicago, IL",
      photo: null,
      experience: "7 years",
      education: "University of Illinois",
      match: 78,
      status: "New Application",
      applicationDate: "Apr 29, 2025",
      lastActivity: "1 day ago",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      summary: "DevOps engineer with 7+ years of experience automating infrastructure and optimizing deployment pipelines. Expert in AWS, Docker, and Kubernetes."
    },
    {
      id: 4,
      name: "Jennifer Lee",
      title: "Product Manager",
      location: "Austin, TX",
      photo: null,
      experience: "6 years",
      education: "University of Texas",
      match: 88,
      status: "New Application",
      applicationDate: "Apr 29, 2025",
      lastActivity: "Today",
      skills: ["Product Strategy", "User Stories", "Roadmapping", "Analytics", "Agile"],
      summary: "Product Manager with 6 years of experience driving product strategy and development. Strong background in agile methodologies and data-driven decision making."
    },
  ];
  
  const selectedCandidateData = candidates.find(c => c.id === selectedCandidate) || candidates[0];
  
  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search candidates by name, skills, or role" className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Applied
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline">
              Status
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button>
              <Briefcase className="h-4 w-4 mr-2" />
              Open Positions
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="text-sm text-muted-foreground">Showing {candidates.length} candidates</div>
          
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`border rounded-lg p-4 bg-white hover:shadow-md transition-all cursor-pointer ${selectedCandidate === candidate.id ? 'border-primary' : ''}`}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={candidate.photo || undefined} />
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h3 className="font-medium">{candidate.name}</h3>
                    <div className="text-sm text-muted-foreground">{candidate.title}</div>
                  </div>
                </div>
                <Badge className={getStatusBadge(candidate.status)}>{candidate.status}</Badge>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  Applied {candidate.applicationDate}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  Active {candidate.lastActivity}
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs">
                  <span>Match Score</span>
                  <span className="text-primary font-medium">{candidate.match}%</span>
                </div>
                <Progress value={candidate.match} className="h-1.5 mt-1" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-2">
          {selectedCandidateData && (
            <CandidateProfile candidate={selectedCandidateData} />
          )}
        </div>
      </div>
    </>
  );
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Interviewing":
      return "bg-info-light text-info";
    case "Application Review":
      return "bg-warning-light text-warning";
    case "New Application":
      return "bg-purple-100 text-purple-600";
    case "Offer Extended":
      return "bg-success-light text-success";
    case "Rejected":
      return "bg-danger-light text-danger";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const CandidateProfile = ({ candidate }: { candidate: any }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src={candidate.photo || undefined} />
              <AvatarFallback className="text-lg">{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold">{candidate.name}</h2>
                <Badge className={getStatusBadge(candidate.status)}>{candidate.status}</Badge>
              </div>
              <p className="text-muted-foreground">{candidate.title}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="mr-1 h-4 w-4" />
                  {candidate.experience} exp
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-4 w-4" />
                  {candidate.match}% match
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Interview
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="notes">Internal Notes</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{candidate.summary}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-muted/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">AI Analysis</CardTitle>
              <CardDescription>Automated insights about this candidate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Skills Match</div>
                <div className="flex justify-between text-xs">
                  <span>Match with job requirements</span>
                  <span className="text-success font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Experience Relevance</div>
                <div className="flex justify-between text-xs">
                  <span>Relevance to position</span>
                  <span className="text-success font-medium">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Culture Fit Prediction</div>
                <div className="flex justify-between text-xs">
                  <span>Based on values and work style</span>
                  <span className="text-success font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="border rounded-md p-3 bg-muted/30">
                <div className="text-sm font-medium mb-2">Key Insights</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Strong technical background in required technologies</li>
                  <li>8+ years of relevant industry experience</li>
                  <li>Previous experience at similar-sized companies</li>
                  <li>Potentially overqualified for junior positions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resume" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <FileText className="text-primary h-5 w-5 mr-2" />
                  <span className="font-medium">{candidate.name} - Resume.pdf</span>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
              <div className="border rounded-md p-6 bg-muted/10">
                <div className="text-center text-muted-foreground">
                  Resume preview would appear here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Internal Notes</CardTitle>
              <CardDescription>Notes are visible to all team members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md p-3">
                <div className="flex justify-between mb-1">
                  <div className="font-medium">Maria Rodriguez</div>
                  <div className="text-xs text-muted-foreground">Apr 27, 2025</div>
                </div>
                <p className="text-sm">Candidate has excellent technical skills and performed well on the initial screening. Would recommend moving forward with a technical interview.</p>
              </div>
              <div className="border rounded-md p-3">
                <div className="flex justify-between mb-1">
                  <div className="font-medium">David Chen</div>
                  <div className="text-xs text-muted-foreground">Apr 26, 2025</div>
                </div>
                <p className="text-sm">Initial application looks promising. Strong background in our required technologies and good cultural fit based on previous companies.</p>
              </div>
              
              <div className="pt-4">
                <Label htmlFor="new-note">Add Note</Label>
                <Textarea
                  id="new-note"
                  placeholder="Type your note here..."
                  className="mt-2"
                />
                <div className="flex justify-between mt-2">
                  <div className="flex items-center">
                    <Checkbox id="share-note" />
                    <label
                      htmlFor="share-note"
                      className="ml-2 text-sm text-muted-foreground"
                    >
                      Share with team
                    </label>
                  </div>
                  <Button>Add Note</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="border-l border-gray-200 ml-3">
                <li className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white">
                    <MessageSquare className="w-3 h-3 text-white" />
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">Technical Interview Scheduled</h3>
                    <time className="text-xs text-gray-500">2 days ago</time>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Interview scheduled with Tech Lead (David) for May 5th, 10:00 AM
                  </div>
                  <Badge className="bg-info-light text-info">Interviewing</Badge>
                </li>
                <li className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -left-3 ring-8 ring-white">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">Initial Screening Completed</h3>
                    <time className="text-xs text-gray-500">4 days ago</time>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Phone screening with HR completed. Candidate passed initial requirements.
                  </div>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-white">
                    <FileText className="w-3 h-3 text-white" />
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">Application Received</h3>
                    <time className="text-xs text-gray-500">Apr 25, 2025</time>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Candidate applied for Senior Frontend Developer position
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Active Applicants</CardTitle>
            <CardDescription>Current pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">124</div>
            <div className="text-sm text-success mt-1">+12% from last month</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-muted p-2 rounded-md text-center">
                <div className="text-sm font-medium">38</div>
                <div className="text-xs text-muted-foreground">New this week</div>
              </div>
              <div className="bg-muted p-2 rounded-md text-center">
                <div className="text-sm font-medium">15</div>
                <div className="text-xs text-muted-foreground">In interview</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Time to Hire</CardTitle>
            <CardDescription>Average across all positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">21 days</div>
            <div className="text-sm text-success mt-1">-5 days from last quarter</div>
            <Progress value={65} className="h-2 mt-4" />
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <div>Goal: 18 days</div>
              <div>Industry avg: 30 days</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Active Jobs</CardTitle>
            <CardDescription>Open positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-warning mt-1">-2 from last month</div>
            <div className="mt-4">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Frontend Developer</span>
                  <span className="font-medium">34 applicants</span>
                </li>
                <li className="flex justify-between">
                  <span>UX Designer</span>
                  <span className="font-medium">27 applicants</span>
                </li>
                <li className="flex justify-between">
                  <span>Product Manager</span>
                  <span className="font-medium">18 applicants</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Recruitment Funnel</CardTitle>
          <CardDescription>Current active roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-32 text-sm">Applications</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>124 candidates</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-3 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-32 text-sm">Screening</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>78 candidates</span>
                  <span>63%</span>
                </div>
                <Progress value={63} className="h-3 bg-indigo-100" indicatorClassName="bg-indigo-500" />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-32 text-sm">Interview</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>42 candidates</span>
                  <span>34%</span>
                </div>
                <Progress value={34} className="h-3 bg-violet-100" indicatorClassName="bg-violet-500" />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-32 text-sm">Final Round</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>15 candidates</span>
                  <span>12%</span>
                </div>
                <Progress value={12} className="h-3 bg-purple-100" indicatorClassName="bg-purple-500" />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-32 text-sm">Offers</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-sm">
                  <span>7 candidates</span>
                  <span>6%</span>
                </div>
                <Progress value={6} className="h-3 bg-green-100" indicatorClassName="bg-green-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ActiveJobs = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search job listings" className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <ActiveJobCard 
          title="Senior Frontend Developer"
          location="San Francisco, CA (Hybrid)"
          department="Engineering"
          posted="Apr 15, 2025"
          applicants={34}
          status="Active"
        />
        
        <ActiveJobCard 
          title="UX Designer"
          location="Remote"
          department="Design"
          posted="Apr 18, 2025"
          applicants={27}
          status="Active"
        />
        
        <ActiveJobCard 
          title="Product Manager"
          location="New York, NY"
          department="Product"
          posted="Apr 20, 2025"
          applicants={18}
          status="Active"
        />
        
        <ActiveJobCard 
          title="DevOps Engineer"
          location="Remote"
          department="Engineering"
          posted="Apr 22, 2025"
          applicants={15}
          status="Active"
        />
        
        <ActiveJobCard 
          title="Marketing Specialist"
          location="Chicago, IL"
          department="Marketing"
          posted="Apr 25, 2025"
          applicants={12}
          status="Draft"
        />
      </div>
    </div>
  );
};

function Plus(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

interface ActiveJobCardProps {
  title: string;
  location: string;
  department: string;
  posted: string;
  applicants: number;
  status: "Active" | "Draft" | "Closed";
}

const ActiveJobCard = ({
  title,
  location,
  department,
  posted,
  applicants,
  status
}: ActiveJobCardProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <h3 className="font-medium">{title}</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Building2 className="mr-1 h-4 w-4" />
              {department}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              Posted {posted}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <Badge className={status === "Active" ? "bg-success-light text-success" : "bg-gray-100 text-gray-600"}>
            {status}
          </Badge>
          <div className="flex items-center">
            <UserRound className="h-4 w-4 mr-1 text-primary" />
            <span className="text-sm font-medium">{applicants} applicants</span>
          </div>
          <Button variant="outline" size="sm">
            View
          </Button>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMemberCard 
          name="Jennifer Woods"
          title="HR Director"
          photo={null}
          location="San Francisco, CA"
          email="jennifer@company.com"
        />
        
        <TeamMemberCard 
          name="Michael Chen"
          title="Technical Recruiter"
          photo={null}
          location="San Francisco, CA"
          email="michael@company.com"
        />
        
        <TeamMemberCard 
          name="Sarah Johnson"
          title="Talent Acquisition Specialist"
          photo={null}
          location="Remote (NYC)"
          email="sarah@company.com"
        />
        
        <TeamMemberCard 
          name="David Miller"
          title="Engineering Manager"
          photo={null}
          location="San Francisco, CA"
          email="david@company.com"
        />
        
        <TeamMemberCard 
          name="Maria Rodriguez"
          title="HR Associate"
          photo={null}
          location="Chicago, IL"
          email="maria@company.com"
        />
        
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full mb-2">
            <Plus className="h-6 w-6" />
          </Button>
          <h3 className="font-medium">Add Team Member</h3>
          <p className="text-sm text-muted-foreground mt-1">Invite a colleague to collaborate</p>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberCardProps {
  name: string;
  title: string;
  photo: string | null;
  location: string;
  email: string;
}

const TeamMemberCard = ({
  name,
  title,
  photo,
  location,
  email
}: TeamMemberCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={photo || undefined} />
            <AvatarFallback className="text-lg">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-center text-xs text-muted-foreground mt-2">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {location}
          </div>
          <div className="flex items-center text-xs mt-1">
            <Mail className="h-3.5 w-3.5 mr-1 text-primary" />
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">View Profile</Button>
        <Button variant="outline" size="sm">Message</Button>
      </CardFooter>
    </Card>
  );
};

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default Company;

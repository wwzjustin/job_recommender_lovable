import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ApplicationPackageModal } from "@/components/job/ApplicationPackageModal";
import { useApplicationBuilder } from "@/hooks/useApplicationBuilder";
import { useToast } from "@/hooks/use-toast";
import {
  Search,
  MapPin,
  Star,
  StarOff,
  Clock,
  Filter,
  Briefcase,
  Building2,
  ArrowUpDown,
  Calendar,
  ChevronDown,
  Clock4
} from "lucide-react";

export const Jobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const { toast } = useToast();
  
  const { isGenerating, applicationPackage, generateApplicationPackage, resetPackage } = useApplicationBuilder();

  const handleApplyNow = async (job: any) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
    
    try {
      await generateApplicationPackage({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
        skills: job.skills,
        salary: job.salary
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate application package. Please try again.",
        variant: "destructive"
      });
      setIsApplicationModalOpen(false);
    }
  };

  const handleSubmitApplication = () => {
    toast({
      title: "Application Submitted!",
      description: `Your application for ${selectedJob?.title} at ${selectedJob?.company} has been submitted successfully.`,
    });
    setIsApplicationModalOpen(false);
    resetPackage();
    setSelectedJob(null);
  };

  const handleCloseModal = () => {
    setIsApplicationModalOpen(false);
    resetPackage();
    setSelectedJob(null);
  };

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Mountain View, CA (Hybrid)",
      logo: "G",
      logoColor: "bg-blue-500",
      description: "Join our team to build next-generation web applications using React and TypeScript. You'll work on high-impact projects with millions of users.",
      salary: "$140,000 - $180,000",
      match: 92,
      postedDate: "2 days ago",
      applicants: 56,
      skills: ["React", "TypeScript", "GraphQL", "Redux"],
      remote: "Hybrid"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Figma",
      location: "San Francisco, CA (Remote)",
      logo: "F",
      logoColor: "bg-purple-500",
      description: "We're looking for a talented UX Designer to help create intuitive and beautiful user experiences for our design platform.",
      salary: "$120,000 - $150,000",
      match: 88,
      postedDate: "1 week ago",
      applicants: 124,
      skills: ["UI/UX", "Figma", "User Research", "Prototyping"],
      remote: "Remote"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Stripe",
      location: "Remote",
      logo: "S",
      logoColor: "bg-indigo-500",
      description: "Lead product development for our payment processing platform. Work with engineering, design, and marketing teams to deliver amazing products.",
      salary: "$130,000 - $160,000",
      match: 85,
      postedDate: "3 days ago",
      applicants: 89,
      skills: ["Product Management", "Agile", "Analytics", "Strategy"],
      remote: "Remote"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Netflix",
      location: "Los Gatos, CA (Onsite)",
      logo: "N",
      logoColor: "bg-red-600",
      description: "Build and maintain scalable applications for our streaming platform. Work with modern technologies in a fast-paced environment.",
      salary: "$135,000 - $175,000",
      match: 79,
      postedDate: "1 day ago",
      applicants: 42,
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      remote: "Onsite"
    },
    {
      id: 5,
      title: "Frontend Engineer",
      company: "Airbnb",
      location: "Remote",
      logo: "A",
      logoColor: "bg-pink-500",
      description: "Join our team to create beautiful and responsive user interfaces for our global platform. Focus on performance and accessibility.",
      salary: "$125,000 - $160,000",
      match: 90,
      postedDate: "5 days ago",
      applicants: 78,
      skills: ["JavaScript", "React", "CSS", "Responsive Design"],
      remote: "Remote"
    },
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center pt-6">
        <h1 className="text-2xl font-bold">Job Openings</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button>
            <Star className="h-4 w-4 mr-2" />
            Saved Jobs
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } md:block w-full md:w-72 lg:w-80`}
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Filters</h2>
                <Button variant="ghost" size="sm">
                  Reset
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Location</h3>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="City, state, or zip" className="pl-9" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remote" />
                  <label
                    htmlFor="remote"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remote jobs only
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Salary Range</h3>
                <div className="pt-4 px-2">
                  <Slider
                    defaultValue={[30000, 150000]}
                    max={300000}
                    step={10000}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$30k</span>
                  <span>$150k+</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Experience Level</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="entry" />
                    <label
                      htmlFor="entry"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Entry Level
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mid" defaultChecked />
                    <label
                      htmlFor="mid"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mid Level
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="senior" defaultChecked />
                    <label
                      htmlFor="senior"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Senior Level
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exec" />
                    <label
                      htmlFor="exec"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Executive
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Job Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fulltime" defaultChecked />
                    <label
                      htmlFor="fulltime"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contract" />
                    <label
                      htmlFor="contract"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="parttime" />
                    <label
                      htmlFor="parttime"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Part Time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="internship" />
                    <label
                      htmlFor="internship"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Internship
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Filters</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg border p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search job title or company" className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 md:flex-none">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
                <Button className="flex-1 md:flex-none">Search</Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="recommended">
            <TabsList className="mb-6">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            <TabsContent value="recommended" className="space-y-4">
              {jobListings.map((job) => (
                <JobCard key={job.id} job={job} onApplyNow={handleApplyNow} />
              ))}
            </TabsContent>
            <TabsContent value="recent">
              <div className="text-center py-10">
                <Clock4 className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No recent jobs</h3>
                <p className="mt-1 text-sm text-muted-foreground">Recent job searches will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="text-center py-10">
                <Star className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No saved jobs</h3>
                <p className="mt-1 text-sm text-muted-foreground">Your saved jobs will appear here</p>
                <Button variant="outline" className="mt-4">
                  Browse Jobs
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ApplicationPackageModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseModal}
        applicationPackage={applicationPackage}
        jobTitle={selectedJob?.title || ""}
        companyName={selectedJob?.company || ""}
        isGenerating={isGenerating}
        onSubmit={handleSubmitApplication}
      />
    </div>
  );
};

const JobCard = ({ job, onApplyNow }: { job: any; onApplyNow?: (job: any) => void }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition-all job-card">
      <div className="flex">
        <div className={`${job.logoColor} text-white h-12 w-12 rounded-md flex items-center justify-center font-bold text-lg`}>
          {job.logo}
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium">{job.title}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSaved(!saved)}
              className="text-gray-500 hover:text-yellow-500"
            >
              {saved ? (
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ) : (
                <StarOff className="h-5 w-5" />
              )}
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">{job.company}</div>
          <div className="flex items-center text-sm mt-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {job.location}
          </div>

          <div className="mt-3">
            <p className="text-sm line-clamp-2">{job.description}</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill: string) => (
              <Badge key={skill} variant="outline" className="bg-muted/50">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm font-medium">{job.salary}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Briefcase className="h-3 w-3 mr-1" />
                  Full-time
                </div>
              </div>
              <Badge className="bg-success-light text-success">
                {job.match}% Match
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Save
              </Button>
              <Button size="sm" onClick={() => onApplyNow?.(job)}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center">
          <Clock className="h-3.5 w-3.5 mr-1" />
          Posted {job.postedDate}
        </div>
        <div className="flex items-center">
          <UserRound className="h-3.5 w-3.5 mr-1" />
          {job.applicants} applicants
        </div>
        <div className="flex items-center">
          <Calendar className="h-3.5 w-3.5 mr-1" />
          Apply by May 30, 2025
        </div>
      </div>
    </div>
  );
};

function UserRound(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

export default Jobs;

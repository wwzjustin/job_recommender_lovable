
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Avatar } from "@/components/ui/avatar";

const Company = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Candidate Management</h2>
          <p className="text-muted-foreground">
            Manage and track candidates in your recruitment pipeline.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input className="max-w-[180px] md:max-w-[260px]" placeholder="Search candidates..." />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Experience Level</DropdownMenuItem>
              <DropdownMenuItem>Location</DropdownMenuItem>
              <DropdownMenuItem>Skills</DropdownMenuItem>
              <DropdownMenuItem>Application Date</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>New Position</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Candidates</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
          <TabsTrigger value="offered">Offered</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Candidate Cards */}
            <CandidateCard 
              name="Alex Johnson"
              role="Senior Frontend Developer"
              location="San Francisco, CA"
              experience="6 years"
              status="Shortlisted"
              match={92}
            />
            <CandidateCard 
              name="Jamie Smith"
              role="UX/UI Designer"
              location="New York, NY"
              experience="4 years"
              status="In Review"
              match={87}
            />
            <CandidateCard 
              name="Taylor Wilson"
              role="Product Manager"
              location="Austin, TX"
              experience="8 years"
              status="Interview Scheduled"
              match={78}
            />
            <CandidateCard 
              name="Morgan Lee"
              role="Full Stack Developer"
              location="Seattle, WA"
              experience="5 years"
              status="Technical Test"
              match={85}
            />
            <CandidateCard 
              name="Casey Brown"
              role="DevOps Engineer"
              location="Chicago, IL"
              experience="7 years"
              status="Final Interview"
              match={82}
            />
            <CandidateCard 
              name="Jordan Green"
              role="Data Scientist"
              location="Boston, MA"
              experience="3 years"
              status="In Review"
              match={72}
            />
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>
        <TabsContent value="shortlisted" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CandidateCard 
              name="Alex Johnson"
              role="Senior Frontend Developer"
              location="San Francisco, CA"
              experience="6 years"
              status="Shortlisted"
              match={92}
            />
          </div>
        </TabsContent>
        <TabsContent value="interviewed">
          <div className="text-center py-10">
            <p className="text-muted-foreground">No candidates in this stage yet.</p>
          </div>
        </TabsContent>
        <TabsContent value="offered">
          <div className="text-center py-10">
            <p className="text-muted-foreground">No candidates in this stage yet.</p>
          </div>
        </TabsContent>
        <TabsContent value="rejected">
          <div className="text-center py-10">
            <p className="text-muted-foreground">No candidates in this stage yet.</p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Open Positions</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PositionCard 
            title="Full Stack Developer"
            department="Engineering"
            location="Remote"
            applications={48}
          />
          <PositionCard 
            title="Product Manager"
            department="Product"
            location="San Francisco"
            applications={32}
          />
          <PositionCard 
            title="UX Designer"
            department="Design"
            location="New York"
            applications={24}
          />
          <PositionCard 
            title="DevOps Engineer"
            department="Engineering"
            location="Remote"
            applications={16}
          />
        </div>
      </div>
    </div>
  );
};

interface CandidateCardProps {
  name: string;
  role: string;
  location: string;
  experience: string;
  status: string;
  match: number;
}

const CandidateCard = ({ name, role, location, experience, status, match }: CandidateCardProps) => {
  // Fix the color based on match score
  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-emerald-500"; 
    if (score >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 bg-primary text-white">
              {name.split(' ').map(word => word[0]).join('')}
            </Avatar>
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </div>
          </div>
          <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            {status}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location</span>
            <span>{location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Experience</span>
            <span>{experience}</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-muted-foreground">Match Score</span>
            <span className="font-medium">{match}%</span>
          </div>
          <Progress 
            value={match}
            className="h-2 mt-1"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">View Profile</Button>
        <Button size="sm">Contact</Button>
      </CardFooter>
    </Card>
  );
};

interface PositionCardProps {
  title: string;
  department: string;
  location: string;
  applications: number;
}

const PositionCard = ({ title, department, location, applications }: PositionCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{department}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location</span>
            <span>{location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Applications</span>
            <span>{applications}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button className="w-full" variant="outline">View Candidates</Button>
      </CardFooter>
    </Card>
  );
};

export default Company;

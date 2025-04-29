
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Edit, MapPin, Pencil, Plus, School, Star, Trash2, UserRound } from "lucide-react";

export const Profile = () => {
  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center pt-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Button>Save Changes</Button>
      </div>

      <div className="bg-white rounded-lg border shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-24">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Senior Frontend Developer</p>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Photo
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                San Francisco, California
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Briefcase className="mr-1 h-4 w-4" />
                8 Years Experience
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <UserRound className="mr-1 h-4 w-4" />
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Professional Summary</CardTitle>
                  <CardDescription>
                    Tell recruiters about yourself and your professional career
                  </CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea 
                className="min-h-32"
                placeholder="Write your professional summary here..."
                defaultValue="Frontend developer with 8+ years of experience building responsive web applications using modern JavaScript frameworks. Specializing in React, TypeScript, and UI component libraries. Passionate about creating accessible and performant user interfaces with attention to detail."
              />
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">AI Enhancement Suggestions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="text-xs w-full justify-start h-auto py-2 text-left">
                    <span>
                      Add specific metrics and achievements, such as "Reduced load times by 40% through code optimization"
                    </span>
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs w-full justify-start h-auto py-2 text-left">
                    <span>
                      Mention your experience with CI/CD pipelines and deployment strategies
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Generate with AI</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>
                    Add your work experience to help employers understand your background
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white h-10 w-10 rounded-md flex items-center justify-center font-bold">
                      A
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Senior Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">Apple Inc.</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  Jan 2020 - Present · 3 yrs 3 mos
                </div>
                <div className="text-sm">
                  <p>Led the frontend development of Apple's internal design system used across 15+ products.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Implemented component library with React, TypeScript and Styled Components</li>
                    <li>Reduced bundle size by 35% through code splitting and lazy loading</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">Design Systems</Badge>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-purple-500 text-white h-10 w-10 rounded-md flex items-center justify-center font-bold">
                      M
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">Microsoft</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  Mar 2017 - Dec 2019 · 2 yrs 10 mos
                </div>
                <div className="text-sm">
                  <p>Developed and maintained web applications for Microsoft's cloud services division.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Built responsive interfaces using Angular and SCSS</li>
                    <li>Implemented CI/CD pipelines with Azure DevOps</li>
                    <li>Collaborated with UX designers to improve user experience</li>
                  </ul>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">SCSS</Badge>
                  <Badge variant="outline">Azure</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Add your educational background
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white h-10 w-10 rounded-md flex items-center justify-center font-bold">
                      S
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                      <p className="text-sm text-muted-foreground">Stanford University</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <School className="mr-1 h-4 w-4" />
                  2013 - 2017
                </div>
                <div className="text-sm">
                  <p>Graduated with honors. Specialized in Human-Computer Interaction.</p>
                  <div className="mt-2">
                    <div className="font-medium">Notable Courses:</div>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Advanced Web Technologies</li>
                      <li>User Interface Design</li>
                      <li>Data Structures and Algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white h-10 w-10 rounded-md flex items-center justify-center font-bold">
                      U
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Udacity Nanodegree</h3>
                      <p className="text-sm text-muted-foreground">Front End Web Developer</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <School className="mr-1 h-4 w-4" />
                  2018
                </div>
                <div className="text-sm">
                  <p>Completed intensive 6-month program focused on modern web development.</p>
                  <div className="mt-2">
                    <div className="font-medium">Projects:</div>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Built a responsive portfolio website</li>
                      <li>Developed an interactive map application with API integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>
                    Highlight your technical skills and expertise
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Skill
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="React" level={5} />
                    <SkillBadge name="TypeScript" level={5} />
                    <SkillBadge name="JavaScript" level={5} />
                    <SkillBadge name="HTML/CSS" level={5} />
                    <SkillBadge name="Redux" level={4} />
                    <SkillBadge name="GraphQL" level={4} />
                    <SkillBadge name="Webpack" level={3} />
                    <SkillBadge name="Jest" level={4} />
                    <SkillBadge name="Node.js" level={3} />
                    <SkillBadge name="Tailwind CSS" level={4} />
                    <SkillBadge name="Next.js" level={3} />
                    <SkillBadge name="Figma" level={3} />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Team Leadership" level={4} />
                    <SkillBadge name="Project Management" level={4} />
                    <SkillBadge name="Communication" level={5} />
                    <SkillBadge name="Problem Solving" level={5} />
                    <SkillBadge name="Mentoring" level={4} />
                    <SkillBadge name="Time Management" level={4} />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">AI Recommended Skills</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Based on your profile and target roles, consider adding these skills:</p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="flex gap-2 items-center">
                        <Plus className="h-3 w-3" />
                        <span>Docker</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex gap-2 items-center">
                        <Plus className="h-3 w-3" />
                        <span>AWS</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex gap-2 items-center">
                        <Plus className="h-3 w-3" />
                        <span>Accessibility (ARIA)</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex gap-2 items-center">
                        <Plus className="h-3 w-3" />
                        <span>CI/CD</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Job Preferences</CardTitle>
              <CardDescription>
                Set your preferences to get more relevant job recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Desired Job Title</Label>
                    <Input id="job-title" defaultValue="Senior Frontend Developer" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary (USD)</Label>
                    <Input id="salary" defaultValue="150,000" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employment-type">Employment Type</Label>
                    <select id="employment-type" className="w-full border px-3 py-2 rounded-md">
                      <option value="full-time">Full-time</option>
                      <option value="contract">Contract</option>
                      <option value="part-time">Part-time</option>
                      <option value="intern">Internship</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="remote">Remote Preference</Label>
                    <select id="remote" className="w-full border px-3 py-2 rounded-md">
                      <option value="remote">Remote Only</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="onsite">On-site Only</option>
                      <option value="any">No Preference</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="travel">Willing to Travel</Label>
                    <select id="travel" className="w-full border px-3 py-2 rounded-md">
                      <option value="0">Not willing to travel</option>
                      <option value="25">Up to 25% travel</option>
                      <option value="50">Up to 50% travel</option>
                      <option value="75">Up to 75% travel</option>
                      <option value="100">Willing to relocate</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Industry Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer">Technology</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer">Finance</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer">Healthcare</Badge>
                  <Badge variant="outline" className="cursor-pointer">E-commerce</Badge>
                  <Badge variant="outline" className="cursor-pointer">Education</Badge>
                  <Badge variant="outline" className="cursor-pointer">Entertainment</Badge>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Plus className="mr-1 h-3 w-3" />
                    Add more
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const SkillBadge = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="inline-flex items-center border rounded-md px-3 py-1 bg-white">
      <span className="text-sm">{name}</span>
      <div className="ml-2 flex">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < level ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;

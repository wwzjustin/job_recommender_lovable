
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, User, Briefcase, GraduationCap, Star, Download, Send } from 'lucide-react';
import { ApplicationPackage } from '@/hooks/useApplicationBuilder';

interface ApplicationPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicationPackage: ApplicationPackage | null;
  jobTitle: string;
  companyName: string;
  isGenerating: boolean;
  onSubmit: () => void;
}

export const ApplicationPackageModal: React.FC<ApplicationPackageModalProps> = ({
  isOpen,
  onClose,
  applicationPackage,
  jobTitle,
  companyName,
  isGenerating,
  onSubmit
}) => {
  if (isGenerating) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Generating Your Application Package</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Compiling your profile data...</p>
            <p className="text-sm text-muted-foreground">Creating tailored resume and cover letter</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!applicationPackage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Application Package for {jobTitle}
          </DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{companyName}</Badge>
            <Badge className="bg-success-light text-success">
              {applicationPackage.matchScore}% Match
            </Badge>
          </div>
        </DialogHeader>

        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="resume" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Resume
            </TabsTrigger>
            <TabsTrigger value="cover-letter" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Cover Letter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resume" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-lg">{applicationPackage.resume.personalInfo.name}</p>
                  <p className="text-muted-foreground">{applicationPackage.resume.personalInfo.title}</p>
                  <p className="text-sm text-muted-foreground">{applicationPackage.resume.personalInfo.location}</p>
                  <p className="text-sm text-muted-foreground">{applicationPackage.resume.personalInfo.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{applicationPackage.resume.summary}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {applicationPackage.resume.experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{job.duration}</p>
                    <p className="text-sm mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {applicationPackage.resume.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                    {edu.description && (
                      <p className="text-sm mt-1">{edu.description}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Relevant Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {applicationPackage.resume.skills.map((skill, index) => (
                    <Badge key={index} className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cover-letter" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Cover Letter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="font-medium">{applicationPackage.coverLetter.greeting}</p>
                  <Separator />
                  {applicationPackage.coverLetter.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <Separator />
                  <p className="whitespace-pre-line">{applicationPackage.coverLetter.closing}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button onClick={onSubmit} className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Submit Application
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

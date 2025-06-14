
import { useState } from 'react';

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  experience: string;
  summary: string;
  workExperience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
    description?: string;
  }>;
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
}

export interface JobData {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
  salary: string;
}

export interface ApplicationPackage {
  resume: {
    personalInfo: {
      name: string;
      title: string;
      location: string;
      email: string;
    };
    summary: string;
    experience: ProfileData['workExperience'];
    education: ProfileData['education'];
    skills: string[];
  };
  coverLetter: {
    content: string;
    greeting: string;
    body: string[];
    closing: string;
  };
  matchScore: number;
}

export const useApplicationBuilder = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [applicationPackage, setApplicationPackage] = useState<ApplicationPackage | null>(null);

  // Mock profile data - in real app, this would come from your profile state/API
  const mockProfileData: ProfileData = {
    name: "John Doe",
    title: "Senior Frontend Developer",
    location: "San Francisco, California",
    experience: "8 Years Experience",
    summary: "Frontend developer with 8+ years of experience building responsive web applications using modern JavaScript frameworks. Specializing in React, TypeScript, and UI component libraries. Passionate about creating accessible and performant user interfaces with attention to detail.",
    workExperience: [
      {
        title: "Senior Frontend Developer",
        company: "Apple Inc.",
        duration: "Jan 2020 - Present · 3 yrs 3 mos",
        description: "Led the frontend development of Apple's internal design system used across 15+ products.",
        skills: ["React", "TypeScript", "Redux", "Design Systems"]
      },
      {
        title: "Frontend Developer",
        company: "Microsoft",
        duration: "Mar 2017 - Dec 2019 · 2 yrs 10 mos",
        description: "Developed and maintained web applications for Microsoft's cloud services division.",
        skills: ["Angular", "JavaScript", "SCSS", "Azure"]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        year: "2013 - 2017",
        description: "Graduated with honors. Specialized in Human-Computer Interaction."
      }
    ],
    skills: [
      { name: "React", level: 5, category: "Frontend" },
      { name: "TypeScript", level: 5, category: "Frontend" },
      { name: "JavaScript", level: 5, category: "Frontend" },
      { name: "Node.js", level: 3, category: "Backend" },
      { name: "GraphQL", level: 4, category: "API" }
    ]
  };

  const generateApplicationPackage = async (jobData: JobData): Promise<ApplicationPackage> => {
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Match skills between profile and job
    const matchingSkills = mockProfileData.skills.filter(skill => 
      jobData.skills.some(jobSkill => 
        jobSkill.toLowerCase().includes(skill.name.toLowerCase()) ||
        skill.name.toLowerCase().includes(jobSkill.toLowerCase())
      )
    );

    const matchScore = Math.round((matchingSkills.length / jobData.skills.length) * 100);

    // Generate cover letter content
    const coverLetterBody = [
      `I am excited to apply for the ${jobData.title} position at ${jobData.company}. With ${mockProfileData.experience.toLowerCase()}, I am confident that my skills and experience align perfectly with your requirements.`,
      `In my current role as ${mockProfileData.workExperience[0].title} at ${mockProfileData.workExperience[0].company}, I have successfully ${mockProfileData.workExperience[0].description.toLowerCase()} My expertise in ${matchingSkills.slice(0, 3).map(s => s.name).join(', ')} makes me an ideal candidate for this position.`,
      `I am particularly drawn to this opportunity because of ${jobData.company}'s reputation for innovation and excellence. I am eager to contribute to your team and help drive continued success.`,
      `Thank you for considering my application. I look forward to the opportunity to discuss how my experience and passion can contribute to your team's goals.`
    ];

    const applicationPackage: ApplicationPackage = {
      resume: {
        personalInfo: {
          name: mockProfileData.name,
          title: mockProfileData.title,
          location: mockProfileData.location,
          email: "john.doe@email.com"
        },
        summary: mockProfileData.summary,
        experience: mockProfileData.workExperience,
        education: mockProfileData.education,
        skills: matchingSkills.map(skill => skill.name)
      },
      coverLetter: {
        content: coverLetterBody.join('\n\n'),
        greeting: `Dear ${jobData.company} Hiring Team,`,
        body: coverLetterBody,
        closing: "Sincerely,\nJohn Doe"
      },
      matchScore
    };

    setApplicationPackage(applicationPackage);
    setIsGenerating(false);
    
    return applicationPackage;
  };

  const resetPackage = () => {
    setApplicationPackage(null);
  };

  return {
    isGenerating,
    applicationPackage,
    generateApplicationPackage,
    resetPackage
  };
};

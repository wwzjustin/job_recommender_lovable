
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  FileText, 
  Search, 
  Target, 
  Zap, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "AI-Powered Resume Builder",
      description: "Generate tailored resumes automatically from your profile data, optimized for each job application."
    },
    {
      icon: <FileText className="h-12 w-12 text-secondary" />,
      title: "Smart Cover Letters",
      description: "Create personalized cover letters that match job requirements and highlight your relevant experience."
    },
    {
      icon: <Target className="h-12 w-12 text-accent" />,
      title: "Job Matching Intelligence",
      description: "Get AI-calculated match scores to find the perfect job opportunities based on your skills and experience."
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Application Package Generator",
      description: "Complete application packages created instantly, including resume, cover letter, and portfolio links."
    }
  ];

  const benefits = [
    "Save hours on application preparation",
    "Increase your interview callback rate",
    "Apply to more jobs with less effort",
    "Stand out with tailored applications"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">JobFlow AI</span>
            </div>
            <Link to="/profile">
              <Button variant="outline">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Land Your Dream Job with 
            <span className="text-primary"> AI-Powered</span> Applications
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your job search with intelligent automation. Generate tailored resumes, 
            cover letters, and application packages in seconds, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile">
              <Button size="lg" className="w-full sm:w-auto">
                <Zap className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Job Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our intelligent system analyzes job requirements and creates perfectly 
              tailored application materials that get you noticed by employers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose JobFlow AI?
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of job seekers who've accelerated their careers with our AI platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Transform Your Job Search?
              </h3>
              <p className="text-gray-600 mb-6">
                Start building your AI-powered profile today and experience the 
                future of job applications.
              </p>
              <Link to="/profile">
                <Button className="w-full" size="lg">
                  Create Your Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">JobFlow AI</span>
          </div>
          <p className="text-gray-400">
            Empowering job seekers with intelligent automation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

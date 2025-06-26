import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbulb, UserRoundCheck, BookOpen, FileText, Video, Link as LinkIcon, ChartLine, UserPlus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { api, type IdeaData, type MentorshipData, type RegistrationData, type ResourceRequestData } from "@/lib/api";

const resources = [
  {
    title: "Business Plan Template",
    description: "Comprehensive template for creating professional business plans",
    icon: <FileText className="h-5 w-5 text-red-500" />,
    type: "PDF"
  },
  {
    title: "Funding Guide",
    description: "Complete guide to startup funding sources and application processes",
    icon: <FileText className="h-5 w-5 text-red-500" />,
    type: "PDF"
  },
  {
    title: "Market Research Tools",
    description: "Essential tools and techniques for effective market research",
    icon: <FileText className="h-5 w-5 text-red-500" />,
    type: "PDF"
  },
  {
    title: "Pitch Deck Examples",
    description: "Video collection of successful startup pitch presentations",
    icon: <Video className="h-5 w-5 text-blue-500" />,
    type: "Video"
  },
  {
    title: "Legal Resources",
    description: "Legal templates, compliance checklists, and regulatory guides",
    icon: <LinkIcon className="h-5 w-5 text-green-500" />,
    type: "Link"
  },
  {
    title: "Financial Models",
    description: "Excel templates for financial projections and budgeting",
    icon: <ChartLine className="h-5 w-5 text-purple-500" />,
    type: "Excel"
  }
];

export default function StudentCorner() {
  const { toast } = useToast();
  const [ideaForm, setIdeaForm] = useState<IdeaData>({
    title: "",
    description: "",
    name: "",
    email: "",
    branch: "",
    year: ""
  });

  const [mentorshipForm, setMentorshipForm] = useState<MentorshipData>({
    area: "",
    challenge: "",
    name: "",
    email: "",
    phone: ""
  });

  const [registrationForm, setRegistrationForm] = useState<RegistrationData>({
    name: "",
    email: "",
    branch: "",
    year: "",
    phone: "",
    reason: "",
    interests: []
  });

  const [resourceForm, setResourceForm] = useState<ResourceRequestData>({
    resourceType: "",
    specificResource: "",
    purpose: "",
    timeline: "",
    name: "",
    email: "",
    branch: "",
    year: ""
  });

  const ideaMutation = useMutation({
    mutationFn: api.submitIdea,
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your idea has been submitted successfully. We'll review it and get back to you soon.",
      });
      setIdeaForm({
        title: "",
        description: "",
        name: "",
        email: "",
        branch: "",
        year: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your idea. Please try again.",
        variant: "destructive",
      });
    }
  });

  const mentorshipMutation = useMutation({
    mutationFn: api.requestMentorship,
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your mentorship request has been submitted. A mentor will contact you within 2-3 business days.",
      });
      setMentorshipForm({
        area: "",
        challenge: "",
        name: "",
        email: "",
        phone: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your mentorship request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const registrationMutation = useMutation({
    mutationFn: api.register,
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Welcome to TCET EDIC! We'll contact you soon with next steps.",
      });
      setRegistrationForm({
        name: "",
        email: "",
        branch: "",
        year: "",
        phone: "",
        reason: "",
        interests: []
      });
    },
    onError: () => {
      toast({
        title: "Registration Failed",
        description: "Failed to submit your registration. Please try again.",
        variant: "destructive",
      });
    }
  });

  const resourceMutation = useMutation({
    mutationFn: api.requestResource,
    onSuccess: () => {
      toast({
        title: "Resource Request Submitted!",
        description: "Your resource request has been submitted. We'll process it and get back to you soon.",
      });
      setResourceForm({
        resourceType: "",
        specificResource: "",
        purpose: "",
        timeline: "",
        name: "",
        email: "",
        branch: "",
        year: ""
      });
    },
    onError: () => {
      toast({
        title: "Request Failed",
        description: "Failed to submit your resource request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ideaMutation.mutate(ideaForm);
  };

  const handleMentorshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mentorshipMutation.mutate(mentorshipForm);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registrationMutation.mutate(registrationForm);
  };

  const handleResourceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resourceMutation.mutate(resourceForm);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setRegistrationForm({
        ...registrationForm,
        interests: [...(registrationForm.interests || []), interest]
      });
    } else {
      setRegistrationForm({
        ...registrationForm,
        interests: (registrationForm.interests || []).filter(i => i !== interest)
      });
    }
  };

  const interests = [
    "Technology",
    "Healthcare", 
    "Education",
    "Environment",
    "Fintech",
    "E-commerce"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Student's Corner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Submit your ideas, request mentorship, and access valuable resources
          </motion.p>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* Submit Idea Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Submit Your Idea</h3>
              </div>
              
              <form onSubmit={handleIdeaSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Idea Title *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your idea title"
                    value={ideaForm.title}
                    onChange={(e) => setIdeaForm({ ...ideaForm, title: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description *
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Describe your idea in detail"
                    value={ideaForm.description}
                    onChange={(e) => setIdeaForm({ ...ideaForm, description: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={ideaForm.name}
                      onChange={(e) => setIdeaForm({ ...ideaForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={ideaForm.email}
                      onChange={(e) => setIdeaForm({ ...ideaForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Branch *
                    </label>
                    <Select value={ideaForm.branch} onValueChange={(value) => setIdeaForm({ ...ideaForm, branch: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer">Computer Engineering</SelectItem>
                        <SelectItem value="electronics">Electronics Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Year *
                    </label>
                    <Select value={ideaForm.year} onValueChange={(value) => setIdeaForm({ ...ideaForm, year: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Year</SelectItem>
                        <SelectItem value="second">Second Year</SelectItem>
                        <SelectItem value="third">Third Year</SelectItem>
                        <SelectItem value="final">Final Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={ideaMutation.isPending}
                >
                  {ideaMutation.isPending ? "Submitting..." : "Submit Idea"}
                </Button>
              </form>
            </motion.div>

            {/* Request Mentorship Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <UserRoundCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Mentorship</h3>
              </div>
              
              <form onSubmit={handleMentorshipSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mentorship Area *
                  </label>
                  <Select value={mentorshipForm.area} onValueChange={(value) => setMentorshipForm({ ...mentorshipForm, area: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business-planning">Business Planning</SelectItem>
                      <SelectItem value="technical-development">Technical Development</SelectItem>
                      <SelectItem value="marketing">Marketing & Sales</SelectItem>
                      <SelectItem value="funding">Funding & Investment</SelectItem>
                      <SelectItem value="legal">Legal & Compliance</SelectItem>
                      <SelectItem value="product-development">Product Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Challenge *
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Describe the specific challenge you're facing"
                    value={mentorshipForm.challenge}
                    onChange={(e) => setMentorshipForm({ ...mentorshipForm, challenge: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={mentorshipForm.name}
                      onChange={(e) => setMentorshipForm({ ...mentorshipForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={mentorshipForm.email}
                      onChange={(e) => setMentorshipForm({ ...mentorshipForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={mentorshipForm.phone}
                    onChange={(e) => setMentorshipForm({ ...mentorshipForm, phone: e.target.value })}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={mentorshipMutation.isPending}
                >
                  {mentorshipMutation.isPending ? "Submitting..." : "Request Mentorship"}
                </Button>
              </form>
            </motion.div>

            {/* Register for EDIC Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="gradient-card rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <UserPlus className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Join EDIC</h3>
              </div>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={registrationForm.name}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Branch *
                    </label>
                    <Select value={registrationForm.branch} onValueChange={(value) => setRegistrationForm({ ...registrationForm, branch: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer">Computer Engineering</SelectItem>
                        <SelectItem value="electronics">Electronics Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Year *
                    </label>
                    <Select value={registrationForm.year} onValueChange={(value) => setRegistrationForm({ ...registrationForm, year: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Year</SelectItem>
                        <SelectItem value="second">Second Year</SelectItem>
                        <SelectItem value="third">Third Year</SelectItem>
                        <SelectItem value="final">Final Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Why join EDIC?
                  </label>
                  <Textarea
                    rows={3}
                    placeholder="Tell us your entrepreneurial goals"
                    value={registrationForm.reason}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, reason: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interests
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          checked={(registrationForm.interests || []).includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={registrationMutation.isPending}
                >
                  {registrationMutation.isPending ? "Registering..." : "Join EDIC Now"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gradient-card rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Shared Resources</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 group block"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {resource.icon}
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {resource.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

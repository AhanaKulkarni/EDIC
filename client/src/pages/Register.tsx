import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { api, type RegistrationData } from "@/lib/api";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

export default function Register() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    branch: "",
    year: "",
    phone: "",
    reason: "",
    interests: []
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const registrationMutation = useMutation({
    mutationFn: api.register,
    onSuccess: () => {
      setShowSuccess(true);
      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with next steps.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        branch: "",
        year: "",
        phone: "",
        reason: "",
        interests: []
      });
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registrationMutation.mutate(formData);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        interests: [...(formData.interests || []), interest]
      });
    } else {
      setFormData({
        ...formData,
        interests: (formData.interests || []).filter(i => i !== interest)
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
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Join TCET EDIC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Become part of our entrepreneurial community and start your journey towards innovation and success
          </motion.p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Branch *
                  </label>
                  <Select value={formData.branch} onValueChange={(value) => setFormData({ ...formData, branch: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer">Computer Engineering</SelectItem>
                      <SelectItem value="electronics">Electronics Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year *
                  </label>
                  <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
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
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why do you want to join EDIC?
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your entrepreneurial interests and goals"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        checked={(formData.interests || []).includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold card-hover"
                disabled={registrationMutation.isPending}
              >
                {registrationMutation.isPending ? (
                  "Submitting Registration..."
                ) : (
                  <>
                    Submit Registration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Success/Error Messages */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Registration successful! We'll contact you soon with next steps.
                </div>
              </motion.div>
            )}

            {registrationMutation.isError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg"
              >
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  Registration failed. Please try again or contact us directly.
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

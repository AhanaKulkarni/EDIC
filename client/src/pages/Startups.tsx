import { motion } from "framer-motion";
import { ExternalLink, Rocket, Leaf, Smartphone, ShoppingCart, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const startups = [
  {
    name: "EduTech Solutions",
    description: "AI-powered learning platform that personalizes education for students across different learning styles and paces.",
    founder: "Rahul Verma",
    founderTitle: "Founder & CEO",
    founderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Active",
    founded: "2023",
    icon: <Rocket className="h-6 w-6" />
  },
  {
    name: "GreenCycle",
    description: "Smart waste management system using IoT sensors to optimize collection routes and reduce environmental impact.",
    founder: "Priya Sharma",
    founderTitle: "Co-founder",
    founderImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Incubated",
    founded: "2022",
    icon: <Leaf className="h-6 w-6" />
  },
  {
    name: "HealthMonitor",
    description: "Mobile app that tracks vital health metrics and provides personalized health recommendations using machine learning.",
    founder: "Arjun Patel",
    founderTitle: "Founder",
    founderImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Funding",
    founded: "2023",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    name: "LocalMart",
    description: "E-commerce platform connecting local vendors with customers, promoting local businesses and reducing delivery times.",
    founder: "Sneha Joshi",
    founderTitle: "Co-founder & CTO",
    founderImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Active",
    founded: "2022",
    icon: <ShoppingCart className="h-6 w-6" />
  },
  {
    name: "AI Tutor",
    description: "Intelligent tutoring system that adapts to individual learning patterns and provides personalized academic support.",
    founder: "Vikram Singh",
    founderTitle: "Founder & CEO",
    founderImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Incubated",
    founded: "2023",
    icon: <Brain className="h-6 w-6" />
  },
  {
    name: "SolarGrid",
    description: "Smart solar energy management system for residential and commercial properties with predictive analytics.",
    founder: "Kavya Reddy",
    founderTitle: "Co-founder",
    founderImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&face",
    status: "Active",
    founded: "2022",
    icon: <Zap className="h-6 w-6" />
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Incubated":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Funding":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function Startups() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-blue-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Student Startups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover the innovative startups founded by TCET students through EDIC
          </motion.p>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {startup.icon}
                  </div>
                  <Badge className={getStatusColor(startup.status)}>
                    {startup.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {startup.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {startup.description}
                </p>
                
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={startup.founderImage}
                    alt={startup.founder}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {startup.founder}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {startup.founderTitle}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Founded: {startup.founded}
                  </span>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Startup Success Metrics
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our track record of nurturing successful student entrepreneurs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center gradient-card p-8 rounded-xl"
            >
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Startups Launched</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center gradient-card p-8 rounded-xl"
            >
              <div className="text-4xl font-bold text-primary mb-2">₹15L+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Funding Raised</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center gradient-card p-8 rounded-xl"
            >
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

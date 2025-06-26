import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award, Calendar } from "lucide-react";

export default function Home() {
  const quotes = [
    "Building the next generation of entrepreneurs and innovators",
    "Innovation distinguishes between a leader and a follower",
    "The way to get started is to quit talking and begin doing",
    "Your limitation—it's only your imagination",
    "Great things never come from comfort zones",
    "Success is not final, failure is not fatal: it is the courage to continue that counts",
    "The future belongs to those who believe in the beauty of their dreams"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 entrepreneurship-bg">
        {/* Floating Background Icons */}
        <div className="floating-icons">
          <div className="floating-icon">💡</div>
          <div className="floating-icon">🚀</div>
          <div className="floating-icon">💼</div>
          <div className="floating-icon">📈</div>
          <div className="floating-icon">🎯</div>
          <div className="floating-icon">🌟</div>
          <div className="floating-icon">⚡</div>
          <div className="floating-icon">🔥</div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Empowering</span>{" "}
                <span className="gradient-text-secondary">Innovation</span>{" "}
                <span className="text-gray-900 dark:text-white">at TCET</span>
              </h1>
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl mb-8 min-h-[3.5rem] flex items-center"
              >
                <p className="gradient-text-secondary font-semibold">
                  {quotes[currentQuote]}
                </p>
              </motion.div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Join TCET's Entrepreneurship Development and Innovation Cell (EDIC) and transform your ideas into successful ventures. We provide mentorship, resources, and a supportive ecosystem for aspiring entrepreneurs.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/register">
                  <Button className="btn-primary group">
                    Join EDIC Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Students collaborating on entrepreneurship projects"
                className="rounded-xl shadow-2xl w-full h-auto card-hover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full pulse-animation"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    25+ Active Startups
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 colorful-card rounded-xl card-hover bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800">
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">67</div>
              <div className="text-purple-600 dark:text-purple-400">Student Startups</div>
            </div>
            <div className="text-center p-6 colorful-card rounded-xl card-hover bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800">
              <Award className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-2">₹4L+</div>
              <div className="text-cyan-600 dark:text-cyan-400">Funding Raised</div>
            </div>
            <div className="text-center p-6 colorful-card rounded-xl card-hover bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800">
              <Calendar className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">25+</div>
              <div className="text-emerald-600 dark:text-emerald-400">Events Organized</div>
            </div>
            <div className="text-center p-6 colorful-card rounded-xl card-hover bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800">
              <Users className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-2">500+</div>
              <div className="text-orange-600 dark:text-orange-400">Students Mentored</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their ideas into successful ventures with EDIC's support.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

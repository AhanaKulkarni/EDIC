import { motion } from "framer-motion";
import { Eye, Rocket, TrendingUp, Users, Calendar, Award } from "lucide-react";

export default function About() {
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
            About TCET EDIC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Fostering innovation and entrepreneurship in the heart of engineering education
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-primary mb-4">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To foster a culture of innovation and entrepreneurship at TCET, creating the next generation of successful entrepreneurs who will drive economic growth and social impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-primary mb-4">
                <Rocket className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide comprehensive support, mentorship, and resources to student entrepreneurs, helping them transform innovative ideas into viable business ventures.
              </p>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Student Startups</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">₹15L+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Funding Raised</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Students Mentored</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Events Organized</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gradient-card rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              TCET's Entrepreneurship Development and Innovation Cell (EDIC) was established in 2018 with a vision to create a thriving ecosystem of innovation and entrepreneurship within the college. Starting with just a handful of passionate students and dedicated faculty, EDIC has grown into one of the most active entrepreneurship cells in the region, fostering creativity, innovation, and business acumen among students across all disciplines.
            </p>
          </motion.div>

          {/* Leadership */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Faculty Head */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face"
                  alt="Faculty Head"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Priya Sharma</h4>
                  <p className="text-primary font-medium">Faculty Head, EDIC</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Department of Computer Engineering</p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "Innovation is not just about technology; it's about solving real-world problems and creating value for society. EDIC provides the perfect platform for our students to explore their entrepreneurial potential."
              </blockquote>
            </motion.div>

            {/* Dean's Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&face"
                  alt="Dean"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Rajesh Kumar</h4>
                  <p className="text-primary font-medium">Dean, TCET</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">PhD in Management Studies</p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "EDIC represents our commitment to nurturing entrepreneurial minds. We believe that education should empower students to become job creators, not just job seekers."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

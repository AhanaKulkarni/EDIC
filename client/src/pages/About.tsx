import { motion } from "framer-motion";
import { Eye, Rocket, TrendingUp, Users, Calendar, Award } from "lucide-react";
import sukrutiImage from "@assets/Screenshot 2025-06-26 105927_1750923638170.png";
import vinitImage from "@assets/vinitdongre_1750924162874.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
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
              <h3 className="text-2xl font-bold gradient-text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To cultivate a dynamic ecosystem of innovation and entrepreneurship, empowering students to become visionary leaders and creators of groundbreaking solutions.
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
              <h3 className="text-2xl font-bold gradient-text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To foster a culture of innovation and entrepreneurial spirit among students by providing resources, mentorship, and practical experience, enabling them to transform their ideas into viable businesses and become industry leaders.
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
              <div className="text-3xl font-bold text-primary">67</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Student Startups</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">₹4L+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Funding Raised</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Students Mentored</div>
            </div>
            <div className="text-center p-6 gradient-card rounded-xl">
              <div className="text-3xl font-bold text-primary">25+</div>
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
            <h3 className="text-2xl font-bold gradient-text-secondary mb-6">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              The Innovation and Entrepreneurship Cell at TCET acts as a dynamic launchpad for student entrepreneurs, fostering a vibrant ecosystem through diverse, impactful activities. Engaging seminars and hands-on workshops equip students with vital skills, from ideation to IP. Our competitions showcase innovation, drawing valuable feedback.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              A strong alumni network provides crucial mentorship and guidance. We bridge academia and industry through collaborations, offering real-world exposure. The TCET-EDIC actively connects students with funding opportunities and provides a well-equipped pre-incubation center. This comprehensive support system has led to the remarkable success of 66 registered student startups across various sectors.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Many of these ventures have secured seed funding and achieved national recognition, highlighting the effectiveness of our student-centric approach in nurturing future entrepreneurial leaders.
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
                  src={sukrutiImage}
                  alt="Sukruti Kaulgud"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Sukruti Kaulgud</h4>
                  <p className="text-primary font-medium">Faculty Head, EDIC</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Department of Computer Engineering</p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "As the Head of the Innovation and Entrepreneurship Cell, I extend a warm invitation to all engineering students ready to embark on their entrepreneurial journey. This is a pivotal time to transform your innovative ideas into impactful ventures, and our cell is here to guide you every step of the way. We offer a vibrant ecosystem designed to nurture your ideas, connect you with mentors, and provide the resources needed to overcome challenges. Don't let hesitation hold you back; seize this opportunity to learn, innovate, and contribute to solving real-world problems. We're excited to support your entrepreneurial dreams and help you shape the future."
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
                  src={vinitImage}
                  alt="Dr. Vinitkumar Dongre"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Vinitkumar Dongre</h4>
                  <p className="text-primary font-medium">Dean R&D</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">TCET</p>
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

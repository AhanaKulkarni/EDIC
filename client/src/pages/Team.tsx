import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import sukrutiImage from "@assets/Screenshot 2025-06-26 105927_1750923638170.png";
import vinitImage from "@assets/vinitdongre_1750924162874.jpg";

const coreFacultyCoordinators = [
  {
    name: "Sukruti Kaulgud",
    role: "Faculty Head, EDIC",
    department: "Department of Computer Engineering",
    image: sukrutiImage
  },
  {
    name: "Dr. Vinitkumar Dongre",
    role: "Dean R&D",
    department: "TCET",
    image: vinitImage
  }
];

const facultyCoordinators = [
  {
    name: "Mr. Vinayak Bachal",
    department: "CIVIL"
  },
  {
    name: "Mr. Aniket Deo",
    department: "AIDS"
  },
  {
    name: "Ms. Apeksha Waghmare",
    department: "IT"
  },
  {
    name: "Ms. Seema Nagrani",
    department: "MECH"
  },
  {
    name: "Mr. Ashish Dwivedi",
    department: "COMP"
  },
  {
    name: "Mrs. Harsha Sanap",
    department: "E&CS"
  },
  {
    name: "Ms. Usha Gupta",
    department: "IoT"
  },
  {
    name: "Mr. Siddhesh Mane",
    department: "MME"
  },
  {
    name: "Mrs. Shital Pazare",
    department: "AIML"
  },
  {
    name: "Dr. Nidhi Tiwari",
    department: "ES&H"
  }
];

const coreTeam = [
  {
    name: "Arya Reddy",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Ashutosh Pal",
    role: "Technical Head",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Priya Mehta",
    role: "Creative Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Rohan Gupta",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Anisha Sharma",
    role: "Events Head",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Karan Singh",
    role: "Operations Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Sneha Patel",
    role: "Content Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Vivek Kumar",
    role: "Finance Manager",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Riya Jain",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Aditya Verma",
    role: "PR Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Kavya Reddy",
    role: "Research Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Rahul Desai",
    role: "Outreach Manager",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Meera Shah",
    role: "Design Manager",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Sameer Khan",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  },
  {
    name: "Nikita Agarwal",
    role: "Partnership Manager",
    image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    linkedin: "#"
  }
];

const alumni = [
  {
    name: "Aditya Mehta",
    company: "Founder, TechStart Solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    testimonial: "EDIC gave me the platform and mentorship I needed to turn my idea into a successful startup. The support system here is incredible."
  },
  {
    name: "Priyanka Joshi",
    company: "Co-founder, EcoInnovate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    testimonial: "The entrepreneurship journey started at EDIC. From ideation to execution, every step was guided by amazing mentors and peers."
  },
  {
    name: "Arjun Nair",
    company: "Product Manager, InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    testimonial: "EDIC taught me to think like an entrepreneur. The skills and network I built here continue to benefit me in my career."
  }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Meet the passionate individuals driving innovation and entrepreneurship at TCET
          </motion.p>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center"
          >
            Faculty Coordinators
          </motion.h2>
          
          {/* Core Faculty Coordinators with Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {coreFacultyCoordinators.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.department}</p>
              </motion.div>
            ))}
          </div>

          {/* Department Faculty Coordinators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyCoordinators.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">
                    {member.name.split(' ').map(n => n.charAt(0)).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{member.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center"
          >
            Core Committee
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center"
          >
            Alumni Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alum, index) => (
              <motion.div
                key={alum.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {alum.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {alum.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{alum.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
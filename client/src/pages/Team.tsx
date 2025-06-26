import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const coreTeam = [
  {
    name: "Ayush Pardeshi",
    role: "Chief Executive Officer",
    department: "Final Year",
    linkedin: "#"
  },
  {
    name: "Ahana Kulkarni",
    role: "Chief Technology Officer",
    department: "Final Year",
    linkedin: "#"
  },
  {
    name: "Bhummi Girnara",
    role: "Chief Operating Officer",
    department: "Final Year",
    linkedin: "#"
  },
  {
    name: "Khushal Satyapal",
    role: "Chief Marketing Officer",
    department: "Final Year",
    linkedin: "#"
  },
  {
    name: "Yash Khatri",
    role: "Chairperson",
    department: "Third Year",
    linkedin: "#"
  },
  {
    name: "Anushka Yadav",
    role: "Vice-Chairperson",
    department: "Third Year",
    linkedin: "#"
  },
  {
    name: "Krish Jain",
    role: "Outreach Head",
    department: "First Year",
    linkedin: "#"
  },
  {
    name: "Raj Mane",
    role: "Tech Lead",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Ansh Singh",
    role: "Creative Head",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Rashi Bedse",
    role: "Social Media Manager",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Sayyam Lohade",
    role: "Secretary",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Nidhi Dilipkumar Shukla",
    role: "Event Manager",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Tanvi Prakash Jabare",
    role: "Publication Head",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Hredey Chaand",
    role: "PR Head",
    department: "Second Year",
    linkedin: "#"
  },
  {
    name: "Yash Yadav",
    role: "Sponsorship Head",
    department: "Second Year",
    linkedin: "#"
  }
];

const facultyCoordinators = [
  {
    name: "Sukruti Kaulgud",
    role: "Faculty Head, EDIC",
    department: "Department of Computer Engineering",
    image: "/attached_assets/Screenshot 2025-06-26 105927_1750923638170.png"
  },
  {
    name: "Dr. Vinitkumar Dongre",
    role: "Dean R&D",
    department: "TCET"
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
    name: "Rhea Kapoor",
    company: "Co-founder, EcoInnovate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    testimonial: "The entrepreneurial mindset I developed at EDIC has been invaluable. It's not just about starting a business, it's about solving problems."
  },
  {
    name: "Karthik Nair",
    company: "CEO, FinTech Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    testimonial: "EDIC connected me with amazing mentors and peers. The network I built here continues to support my entrepreneurial journey."
  }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
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

      {/* Core Committee */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold gradient-text-secondary mb-12 text-center"
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
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center card-hover border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.department}
                </p>
                <a
                  href={member.linkedin}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mx-auto" />
                </a>
              </motion.div>
            ))}
          </div>
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
            className="text-3xl font-bold gradient-text-secondary mb-12 text-center"
          >
            Faculty Coordinators
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className={faculty.image ? "flex items-center space-x-4" : ""}>
                  {faculty.image && (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {faculty.name}
                    </h3>
                    <p className="text-primary">{faculty.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {faculty.department}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold gradient-text-secondary mb-12 text-center"
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
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
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

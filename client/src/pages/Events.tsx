import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Startup Pitch Competition",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    description: "Present your innovative ideas to industry experts and win exciting prizes. Open to all students with startup ideas.",
    icon: "💡"
  },
  {
    title: "Entrepreneurship Workshop",
    date: "March 22, 2024",
    time: "2:00 PM - 5:00 PM",
    description: "Learn the fundamentals of starting a business from successful entrepreneurs and industry mentors.",
    icon: "🎯"
  },
  {
    title: "Networking Night",
    date: "April 5, 2024",
    time: "6:00 PM - 8:00 PM",
    description: "Connect with fellow entrepreneurs, mentors, and investors in a relaxed networking environment.",
    icon: "🤝"
  }
];

const pastEvents = [
  {
    title: "TechHack 2023",
    date: "November 2023",
    description: "48-hour hackathon with 200+ participants building innovative solutions for real-world problems.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Business Plan Competition",
    date: "September 2023",
    description: "Students presented comprehensive business plans to industry experts and investors.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Mentor Connect Session",
    date: "August 2023",
    description: "One-on-one mentoring sessions with successful entrepreneurs and industry leaders.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  }
];

export default function Events() {
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
            Events & Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Join our exciting events and programs designed to foster innovation and entrepreneurship
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gradient-card rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 card-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg text-2xl">
                    {event.icon}
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <Button className="w-full">
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Featured Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Innovation Summit 2024
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join industry leaders, successful entrepreneurs, and innovative minds for a day of inspiration, learning, and networking. Discover the latest trends in technology and entrepreneurship.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    April 20, 2024
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Full Day Event</span>
                </div>
                <Button>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Innovation Summit 2024"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Past Events
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 card-hover"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {event.description}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

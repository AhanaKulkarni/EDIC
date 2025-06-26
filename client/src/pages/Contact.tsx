import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with us for any questions or collaborations
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">edic@tcetmumbai.in</p>
                      <p className="text-gray-600 dark:text-gray-300">info@tcetedic.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                      <p className="text-gray-600 dark:text-gray-300">+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Thakur College of Engineering & Technology<br />
                        Shyamnarayan Thakur Marg,<br />
                        Thakur Village, Kandivali East,<br />
                        Mumbai, Maharashtra 400101
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 card-hover"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors duration-200 card-hover"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200 card-hover"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 card-hover"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="h-96 bg-gray-300 dark:bg-gray-700 relative">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.180234234567!2d72.8697675!3d19.2183133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647c5cb%3A0x7b9b2a5c2c8e0f6e!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thakur College of Engineering & Technology Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Visit Our Campus
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Located in the heart of Kandivali East, Mumbai, our campus provides the perfect environment for innovation and entrepreneurship.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="gradient-card p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Monday - Friday</h3>
                <p className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Saturday</h3>
                <p className="text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sunday</h3>
                <p className="text-gray-600 dark:text-gray-300">Closed</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> During academic holidays, office hours may vary. Please call ahead or check our social media for updates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

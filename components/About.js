// components/About.js
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            About <span className="text-blue-500">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with a strong background in computer science and software development. 
                I love creating innovative web applications that enhance user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With experience in both technical support and web development, I bring a unique perspective to building 
                user-centric applications. I'm dedicated to continuous learning and staying up-to-date with the latest technologies.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">1+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">10+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">5+</p>
                  <p className="text-gray-400">Technologies</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">100%</p>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-blue-400 font-semibold">Full Stack Developer Intern</p>
                  <p className="text-gray-400">IMOSmart</p>
                  <p className="text-gray-500 text-sm">Aug 2025 - Present</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="text-white font-semibold">Technical Support Specialist</p>
                  <p className="text-gray-400">HP (Enterprise Services, EMEA)</p>
                  <p className="text-gray-500 text-sm">Jan 2025 - Aug 2025</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="text-white font-semibold">Order to Cash Specialist</p>
                  <p className="text-gray-400">Mood Media Romania</p>
                  <p className="text-gray-500 text-sm">May 2021 - Jan 2025</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

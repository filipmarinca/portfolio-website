// components/Skills.js
import { motion } from 'framer-motion';

const skills = {
  'Frontend': ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'RESTful APIs'],
  'Tools': ['Git', 'AWS', 'Active Directory', 'ServiceNow'],
  'Other': ['Technical Support', 'ITIL', 'Customer Service']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            My <span className="text-blue-500">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "March 2024",
      image: "/certificates/ml-stanford.jpg",
      credentialId: "STAN-ML-2024",
      credentialUrl: "https://coursera.org/verify/STAN-ML-2024"
    },
    {
      id: 2,
      title: "Deep Learning Nanodegree",
      issuer: "Udacity",
      date: "February 2024",
      image: "/certificates/deep-learning-udacity.jpg",
      credentialId: "UD-DL-2024",
      credentialUrl: "https://udacity.com/confirm/UD-DL-2024"
    },
    {
      id: 3,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "January 2024",
      image: "/certificates/tensorflow-google.jpg",
      credentialId: "GOO-TF-2024",
      credentialUrl: "https://certificate.google.com/GOO-TF-2024"
    },
    {
      id: 4,
      title: "AWS Certified Machine Learning",
      issuer: "Amazon Web Services",
      date: "December 2023",
      image: "/certificates/aws-ml.jpg",
      credentialId: "AWS-ML-2023",
      credentialUrl: "https://aws.amazon.com/verify/AWS-ML-2023"
    },
    {
      id: 5,
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "November 2023",
      image: "/certificates/data-science-ibm.jpg",
      credentialId: "IBM-DS-2023",
      credentialUrl: "https://ibm.com/verify/IBM-DS-2023"
    },
    {
      id: 6,
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "October 2023",
      image: "/certificates/python-datacamp.jpg",
      credentialId: "DC-PY-2023",
      credentialUrl: "https://datacamp.com/statement-of-accomplishment/DC-PY-2023"
    }
  ];

  return (
    <section id="certificates" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in AI, Machine Learning, and Data Science
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-purple-400 opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs text-purple-300 font-semibold">Verified</span>
                    </div>
                  </div>
                  {/* Certificate placeholder - replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full"><Award class="w-16 h-16 text-purple-400 opacity-50" /></div>';
                      }}
                    />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-purple-300 text-sm font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors group/link"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Development
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              I'm committed to staying current with the latest technologies and best practices in AI and Machine Learning. 
              These certifications represent my dedication to mastering cutting-edge tools and methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-purple-500/20 px-4 py-2 rounded-lg">
                <span className="text-purple-300 font-medium">6+ Certifications</span>
              </div>
              <div className="bg-blue-500/20 px-4 py-2 rounded-lg">
                <span className="text-blue-300 font-medium">500+ Hours Learning</span>
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-lg">
                <span className="text-green-300 font-medium">Industry Recognized</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

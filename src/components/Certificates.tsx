import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "April 18, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-GENAI-2026",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Prepare Data for ML APIs",
      issuer: "Google Cloud",
      date: "December 2025",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=800",
      credentialId: "GC-ML-2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/skarafath"
    },
    {
      id: 3,
      title: "Gen AI NASSCOM Certificate",
      issuer: "SFJ & NASSCOM",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      credentialId: "NAS-GENAI-2026",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Java Foundation Certification",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-JAVA-2026",
      credentialUrl: "#"
    },
    {
      id: 5,
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "April 18, 2026",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PY-2026",
      credentialUrl: "#"
    },
    {
      id: 6,
      title: "TechA Data Analytics using Power BI Foundation",
      issuer: "Infosys Springboard",
      date: "April 20, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PBI-2026",
      credentialUrl: "#"
    },
    {
      id: 7,
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-AGILE-2026",
      credentialUrl: "#"
    },
    {
      id: 8,
      title: "Angular Course Completion",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3af748?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-ANG-2026",
      credentialUrl: "#"
    },
    {
      id: 9,
      title: "Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-AI-2026",
      credentialUrl: "#"
    },
    {
      id: 10,
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PY-BAS-2026",
      credentialUrl: "#"
    },
    {
      id: 11,
      title: "Big Data Course Completion",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1504868584819-f8eec4c1737f?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-BD-2026",
      credentialUrl: "#"
    },
    {
      id: 12,
      title: "Cloud Technologies",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-CLOUD-2026",
      credentialUrl: "#"
    },
    {
      id: 13,
      title: "Computer Vision 101",
      issuer: "Infosys Springboard",
      date: "April 4, 2026",
      image: "https://images.unsplash.com/photo-1527430253228-e92683015112?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-CV-2026",
      credentialUrl: "#"
    },
    {
      id: 14,
      title: "Data Science Course",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-DS-2026",
      credentialUrl: "#"
    },
    {
      id: 15,
      title: "Deep Learning for Developers",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-DL-2026",
      credentialUrl: "#"
    },
    {
      id: 16,
      title: "Excel Course Completion",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-EXCEL-2026",
      credentialUrl: "#"
    },
    {
      id: 17,
      title: "Generative Models for Developers",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-GENMOD-2026",
      credentialUrl: "#"
    },
    {
      id: 18,
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "April 4, 2026",
      image: "https://images.unsplash.com/photo-1555255707-c0796f85bc3e?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-INTRO-AI-2026",
      credentialUrl: "#"
    },
    {
      id: 19,
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "March 29, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-INTRO-DS-2026",
      credentialUrl: "#"
    },
    {
      id: 20,
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      date: "April 4, 2026",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-INTRO-DL-2026",
      credentialUrl: "#"
    },
    {
      id: 21,
      title: "Introduction to NLP",
      issuer: "Infosys Springboard",
      date: "April 1, 2026",
      image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-INTRO-NLP-2026",
      credentialUrl: "#"
    },
    {
      id: 22,
      title: "Introduction to OpenAI GPT Models",
      issuer: "Infosys Springboard",
      date: "April 11, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-GPT-MOD-2026",
      credentialUrl: "#"
    },
    {
      id: 23,
      title: "Introduction to RPA",
      issuer: "Infosys Springboard",
      date: "April 4, 2026",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-RPA-2026",
      credentialUrl: "#"
    },
    {
      id: 24,
      title: "Java Programming Fundamentals",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-JAVA-FUN-2026",
      credentialUrl: "#"
    },
    {
      id: 25,
      title: "Learning Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "April 18, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PBI-LEARN-2026",
      credentialUrl: "#"
    },
    {
      id: 26,
      title: "GPT-3 for Developers",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-GPT3-DEV-2026",
      credentialUrl: "#"
    },
    {
      id: 27,
      title: "Power BI Training",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PBI-TR-2026",
      credentialUrl: "#"
    },
    {
      id: 28,
      title: "Power BI for Business Professionals",
      issuer: "Infosys Springboard",
      date: "April 19, 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PBI-BUS-2026",
      credentialUrl: "#"
    },
    {
      id: 29,
      title: "Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "April 16, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      credentialId: "INF-PROMPT-2026",
      credentialUrl: "#"
    },
    {
      id: 30,
      title: "LAKSHAGRIHA 2026 Participation",
      issuer: "Dev Bhoomi Uttarakhand University",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      credentialId: "DBUU-HACK-2026",
      credentialUrl: "#"
    },
    {
      id: 31,
      title: "Model Making Recognition",
      issuer: "Uttaranchal University",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1460666819451-7410f5ef13ac?auto=format&fit=crop&q=80&w=800",
      credentialId: "UU-AGRO-2026",
      credentialUrl: "#"
    },
    {
      id: 32,
      title: "Junior Hackathon 2024",
      issuer: "Uttaranchal University",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      credentialId: "UU-JH-2024",
      credentialUrl: "#"
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
                <span className="text-purple-300 font-medium">34+ Certifications</span>
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

import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Calendar, MapPin, ExternalLink, Code, Users, Globe, Target, Cpu, Cloud, Filter } from "lucide-react";
import { useState } from "react";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("all");

  const achievements = [
    {
      id: 1,
      type: "hackathon",
      title: "Certificate of Excellence – CARE Hackathon",
      subtitle: "Top Team Selection",
      organization: "Tula's Institute in association with Saukhyam & Amrita Vishwa Vidyapeetham",
      date: "September 2025",
      location: "Dehradun",
      description: "Awarded the Certificate of Excellence for being selected as a \"Top Team\" during the CARE Hackathon. Recognized for exemplary commitment to combating climate change, supporting zero-waste initiatives, and empowering women by championing reusable sustainable solutions.",
      icon: Trophy,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      type: "hackathon",
      title: "National Hackathon Participation",
      subtitle: "HACK THE FUTURE 2.0 (ZO25)",
      organization: "Department of Computer Science and Engineering, Tula's Institute, Dehradun",
      date: "September 26th & 27th, 2025",
      location: "Dehradun",
      description: "Participated in the National Level Hackathon \"Hack The Future 2.0,\" organized in association with technical partners Unstop and AWaDH (IIT Ropar). Engaged in intensive problem-solving and technical innovation over a two-day event.",
      icon: Code,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      type: "conference",
      title: "International Conference Delegate",
      subtitle: "2nd International Conference on AI for a Sustainable Future (ICAISF-2025)",
      organization: "Uttaranchal Institute of Technology, Uttaranchal University",
      date: "November 21st – 22nd, 2025",
      location: "Dehradun",
      description: "Attended the 2nd International Conference focused on Artificial Intelligence and Sustainability. Gained insights into global technological trends and research presented in association with Springer Nature and Atlantis Press.",
      icon: Globe,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      type: "competition",
      title: "CODESTORM Participant",
      subtitle: "Engineers' Day Mahotsava 2.0",
      organization: "Uttaranchal Institute of Technology, Dehradun",
      date: "Engineers' Day 2025",
      location: "Dehradun",
      description: "Demonstrated technical proficiency and dedication by participating in the \"CODESTORM\" coding competition. Recognized for outstanding performance and talent in algorithmic problem solving during the Engineers' Day celebrations.",
      icon: Target,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      type: "certification",
      title: "Principles of Generative AI Certification",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "Apr 2026",
      location: "Online",
      description: "Completed comprehensive certification covering the foundational principles of Generative AI, demonstrating an understanding of modern AI technologies and their applications.",
      icon: Award,
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 6,
      type: "certification",
      title: "TechA Data Analytics using Power BI Foundation",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "Apr 2026",
      location: "Online",
      description: "Acquired foundational knowledge in data analytics, utilizing Power BI to uncover insights and effectively visualize data trends.",
      icon: Award,
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 7,
      type: "leadership",
      title: "Technical Team Member",
      subtitle: "IEEE Event Coordination",
      organization: "IEEE",
      date: "2023 - Present",
      location: "Dehradun",
      description: "Managed and coordinated 10+ club events, workshops, hackathons and seminars, enhancing technical skills for 200+ members through exceptional organizational and leadership efforts.",
      icon: Users,
      color: "from-teal-500 to-emerald-600"
    },
    {
      id: 8,
      type: "hackathon",
      title: "Lakshagriha 2026 – Global Hackathon",
      subtitle: "24-Hour Global Innovation Challenge",
      organization: "Dev Bhoomi Uttarakhand University",
      date: "February 27th - 28th, 2026",
      location: "Dehradun",
      description: "Competed in the intense 24-hour Lakshagriha Global Hackathon. Developed innovative solutions as part of Team 'VaraVision', demonstrating rapid prototyping and collaborative problem-solving skills under pressure.",
      icon: Code,
      color: "from-indigo-500 to-blue-700"
    },
    {
      id: 9,
      type: "competition",
      title: "Certificate of Recognition",
      subtitle: "Model Making Competition – Farmer's Fair",
      organization: "School of Agriculture, Uttaranchal University",
      date: "March 19th - 20th, 2026",
      location: "Dehradun",
      description: "Recognized for valuable contribution and excellent technical display in the Model Making Competition during the Farmer's Fair and Agro-Industrial Exhibition.",
      icon: Target,
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 10,
      type: "certification",
      title: "GEN AI NASSCOM Certificate",
      subtitle: "Skill Development Program",
      organization: "SFJ (Let's Transform) & NASSCOM",
      date: "February 27th, 2026",
      location: "Online",
      description: "Successfully completed the Gen AI course under the NASSCOM Skill Development Program, gaining practical expertise in generative artificial intelligence and its applications.",
      icon: Cpu,
      color: "from-cyan-400 to-blue-600"
    },
    {
      id: 11,
      type: "certification",
      title: "Google Cloud Skill Badge",
      subtitle: "Prepare Data for ML APIs",
      organization: "Google Cloud",
      date: "December 22nd, 2025",
      location: "Online",
      description: "Earned the 'Prepare Data for ML APIs' skill badge, certifying proficiency in cleaning, transforming, and analyzing data for machine learning models using Google Cloud services.",
      icon: Cloud,
      color: "from-blue-400 to-indigo-600"
    },
    {
      id: 12,
      type: "hackathon",
      title: "Junior Hackathon 2024",
      subtitle: "University Innovation Drive",
      organization: "Uttaranchal University",
      date: "May 10th, 2024",
      location: "Dehradun",
      description: "Early-stage participation in the Junior Hackathon 2024, demonstrating foundation-level coding skills and potential for technical innovation.",
      icon: Code,
      color: "from-slate-500 to-slate-700"
    },
    {
      id: 13,
      type: "certification",
      title: "Java Foundation Certification",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Certified in Java foundations, covering core programming concepts, data structures, and object-oriented principles through the Infosys Springboard platform.",
      icon: Award,
      color: "from-red-500 to-orange-600"
    },
    {
      id: 14,
      type: "certification",
      title: "Python Foundation Certification",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 18, 2026",
      location: "Online",
      description: "Demonstrated proficiency in Python programming, including fundamental syntax, libraries, and best practices for software development.",
      icon: Award,
      color: "from-blue-500 to-green-600"
    },
    {
      id: 15,
      type: "certification",
      title: "Agile Scrum in Practice",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Gained practical knowledge of Agile methodologies and Scrum frameworks, focusing on iterative development and team collaboration.",
      icon: Award,
      color: "from-blue-400 to-indigo-600"
    },
    {
      id: 16,
      type: "certification",
      title: "Angular Course Completion",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Completed comprehensive training in Angular, building modern web applications with a focus on component-based architecture.",
      icon: Award,
      color: "from-red-600 to-pink-600"
    },
    {
      id: 17,
      type: "certification",
      title: "Artificial Intelligence",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Acquired fundamental knowledge in Artificial Intelligence, exploring machine learning, neural networks, and AI ethics.",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 18,
      type: "certification",
      title: "Basics of Python",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Mastered the core concepts of Python programming, including data types, control flow, and standard libraries.",
      icon: Award,
      color: "from-yellow-400 to-green-500"
    },
    {
      id: 19,
      type: "certification",
      title: "Big Data Course Completion",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Explored the fundamentals of Big Data, covering data processing at scale and modern analytical tools.",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 20,
      type: "certification",
      title: "Cloud Technologies",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Explored the fundamentals of cloud computing, covering infrastructure, service models, and modern cloud architecture.",
      icon: Cloud,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 21,
      type: "certification",
      title: "Computer Vision 101",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 4, 2026",
      location: "Online",
      description: "Gained an introductory understanding of computer vision techniques, including image processing and pattern recognition.",
      icon: Cpu,
      color: "from-purple-600 to-blue-500"
    },
    {
      id: 22,
      type: "certification",
      title: "Data Science Course",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Completed comprehensive training in data science methodologies, from data exploration to model building.",
      icon: Award,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 23,
      type: "certification",
      title: "Deep Learning for Developers",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Focused on applying deep learning techniques to real-world development tasks using modern neural networks.",
      icon: Cpu,
      color: "from-indigo-600 to-purple-700"
    },
    {
      id: 24,
      type: "certification",
      title: "Excel Course Completion",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Mastered advanced Excel functions for data management, analysis, and reporting.",
      icon: Award,
      color: "from-green-600 to-emerald-700"
    },
    {
      id: 25,
      type: "certification",
      title: "Generative Models for Developers",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Focused on the development and implementation of generative AI models for various software applications.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 26,
      type: "certification",
      title: "Introduction to Artificial Intelligence",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 4, 2026",
      location: "Online",
      description: "Learned the foundational concepts of AI, including history, types, and ethical considerations.",
      icon: Award,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 27,
      type: "certification",
      title: "Introduction to Data Science",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "March 29, 2026",
      location: "Online",
      description: "Gained a high-level overview of the data science lifecycle, from data collection to insight communication.",
      icon: Award,
      color: "from-green-400 to-teal-500"
    },
    {
      id: 28,
      type: "certification",
      title: "Introduction to Deep Learning",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 4, 2026",
      location: "Online",
      description: "Acquired a basic understanding of deep learning architectures and their role in modern AI systems.",
      icon: Cpu,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 29,
      type: "certification",
      title: "Introduction to NLP",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 1, 2026",
      location: "Online",
      description: "Explored the fundamentals of Natural Language Processing, focusing on text analysis and language understanding.",
      icon: Globe,
      color: "from-blue-500 to-indigo-700"
    },
    {
      id: 30,
      type: "certification",
      title: "Introduction to OpenAI GPT Models",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 11, 2026",
      location: "Online",
      description: "Explored the architecture and capabilities of OpenAI's GPT models, focusing on prompt engineering and model fine-tuning.",
      icon: Cpu,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 31,
      type: "certification",
      title: "Introduction to RPA",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 4, 2026",
      location: "Online",
      description: "Gained foundational knowledge of Robotic Process Automation, exploring automation tools and workflow design.",
      icon: Cpu,
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 32,
      type: "certification",
      title: "Java Programming Fundamentals",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Mastered the core principles of Java programming, including object-oriented design and standard library usage.",
      icon: Award,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 33,
      type: "certification",
      title: "Learning Microsoft Power BI",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 18, 2026",
      location: "Online",
      description: "Developed proficiency in Microsoft Power BI for data visualization, dashboard creation, and business intelligence reporting.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 34,
      type: "certification",
      title: "GPT-3 for Developers",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Focused on integrating GPT-3 capabilities into developer workflows, exploring API usage and advanced application scenarios.",
      icon: Cpu,
      color: "from-indigo-600 to-purple-700"
    },
    {
      id: 35,
      type: "certification",
      title: "Power BI Training",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Completed intensive training in Power BI, covering data modeling, DAX expressions, and advanced report design.",
      icon: Award,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 36,
      type: "certification",
      title: "Power BI for Business Professionals",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 19, 2026",
      location: "Online",
      description: "Tailored specifically for business context, focusing on deriving actionable insights and effective communication through dashboards.",
      icon: Award,
      color: "from-orange-400 to-red-500"
    },
    {
      id: 37,
      type: "certification",
      title: "Prompt Engineering",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      date: "April 16, 2026",
      location: "Online",
      description: "Mastered the art of crafting effective prompts to interact with large language models, optimizing for accuracy and desired output formats.",
      icon: Cpu,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const categories = [
    { id: "all", label: "All", icon: Filter },
    { id: "hackathon", label: "Hackathons", icon: Code },
    { id: "certification", label: "Certifications", icon: Award },
    { id: "competition", label: "Competitions", icon: Target },
    { id: "conference", label: "Conferences", icon: Globe },
    { id: "leadership", label: "Leadership", icon: Users },
  ];

  const filteredAchievements = activeTab === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return Code;
      case 'conference':
        return Globe;
      case 'competition':
        return Target;
      case 'leadership':
        return Users;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case 'conference':
        return "bg-purple-500/20 text-purple-400 border-purple-400/30";
      case 'competition':
        return "bg-orange-500/20 text-orange-400 border-orange-400/30";
      case 'leadership':
        return "bg-teal-500/20 text-teal-400 border-teal-400/30";
      case 'certification':
        return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30";
      default:
        return "bg-green-500/20 text-green-400 border-green-400/30";
    }
  };

  return (
    <section id="achievements" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            Achievements & Recognition
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my accomplishments in hackathons, conferences, and technical competitions
          </p>
        </motion.div>

        {/* Selection / Filtering Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === cat.id
                    ? "bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/30 grow-0"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col">
                    {/* Card Header */}
                    <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
                    
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Icon and Type Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(achievement.type)}`}>
                              {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3 flex-grow">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                            {achievement.title}
                          </h3>
                          <p className="text-purple-300 font-medium text-sm">
                            {achievement.subtitle}
                          </p>
                        </div>

                        <div className="text-gray-400 text-xs space-y-1">
                          <p className="font-semibold text-purple-200/80">{achievement.organization}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{achievement.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{achievement.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Achievement Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">37+</div>
                <div className="text-gray-300 text-sm">Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300 text-sm">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">29</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Events Managed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 mb-6">
              I actively participate in technical events and competitions to enhance my skills and stay updated with the latest industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-purple-500/20 rounded-lg text-purple-300 text-sm">Problem Solving</span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-lg text-blue-300 text-sm">Innovation</span>
              <span className="px-4 py-2 bg-green-500/20 rounded-lg text-green-300 text-sm">Sustainability</span>
              <span className="px-4 py-2 bg-orange-500/20 rounded-lg text-orange-300 text-sm">Technical Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

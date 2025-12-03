import { motion } from "framer-motion";
import { Award, Trophy, Calendar, MapPin, ExternalLink, Code, Users, Globe, Target } from "lucide-react";

const Achievements = () => {
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
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return Code;
      case 'conference':
        return Globe;
      case 'competition':
        return Target;
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

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  {/* Card Header */}
                  <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
                  
                  <div className="p-6">
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
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-purple-300 font-medium">
                          {achievement.subtitle}
                        </p>
                      </div>

                      <div className="text-gray-400 text-sm space-y-1">
                        <p className="font-medium text-purple-200">{achievement.organization}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{achievement.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
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
        </div>

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
                <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-gray-300 text-sm">Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-gray-300 text-sm">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-gray-300 text-sm">International Conference</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">1</div>
                <div className="text-gray-300 text-sm">Coding Competition</div>
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

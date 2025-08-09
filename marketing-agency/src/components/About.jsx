import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Users, Award, Clock, Target, Sparkles, Star } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-term partnerships based on trust and results."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Innovation",
      description: "We stay ahead of industry trends to provide cutting-edge solutions for your business."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-normal py-2"
            style={{ y, opacity }}
          >
            About
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 py-1"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AgencyPro
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a team of passionate marketers, designers, and developers dedicated to 
            helping businesses grow in the digital age.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-6 leading-normal py-1"
              variants={itemVariants}
            >
              Our Story
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Founded in 2018, AgencyPro started with a simple mission: to help businesses 
              succeed in the digital world. What began as a small team of three has grown 
              into a full-service digital marketing agency serving clients across the globe.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              We believe that great marketing is about more than just numbers—it's about 
              understanding your audience, telling your story, and building meaningful 
              connections that drive real business results.
            </motion.p>

            {/* Key Achievements */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg relative overflow-hidden group interactive magnetic border border-gray-700"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="text-2xl font-bold text-blue-400 mb-2 relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-400 relative z-10">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg relative overflow-hidden group interactive magnetic border border-gray-700"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="text-2xl font-bold text-blue-400 mb-2 relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  25+
                </motion.div>
                <div className="text-sm text-gray-400 relative z-10">Team Members</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden interactive magnetic"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  backgroundSize: "100% 100%"
                }}
              />
              
              <motion.h4 
                className="text-2xl font-bold mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Why Choose Us?
              </motion.h4>
              <motion.ul 
                className="space-y-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Proven track record with 500+ successful campaigns",
                  "Data-driven approach with measurable results",
                  "Dedicated account managers for personalized service",
                  "Transparent reporting and regular communication"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </motion.div>
                    <span className="text-gray-100">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12 leading-normal py-1"
            style={{ y, opacity }}
          >
            Our Values
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center group relative interactive magnetic"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 8px rgba(0,0,0,0.3)",
                      "0 8px 16px rgba(0,0,0,0.4)",
                      "0 4px 8px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {value.icon}
                  </motion.div>
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12 leading-normal py-1"
            style={{ y, opacity }}
          >
            Meet Our Team
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center group relative interactive magnetic"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="relative mb-4"
                  whileHover={{ rotateY: 10, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
                <motion.h4 
                  className="text-lg font-bold text-white mb-1 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {member.name}
                </motion.h4>
                <motion.p 
                  className="text-gray-300 relative z-10"
                  whileHover={{ scale: 1.01 }}
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Star className="w-2 h-2 text-blue-400" />
        </motion.div>
      ))}
    </section>
  )
}

export default About 
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Target, TrendingUp } from 'lucide-react'

const Hero = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Sparkles className="w-6 h-6" /> },
    { number: "$50M+", label: "Revenue Generated", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Target className="w-6 h-6" /> }
  ]

  return (
    <>
      {/* Fixed Background for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Fixed Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-xl" />
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500/20 rounded-full filter blur-xl" />
        </div>

        {/* Fixed Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Fixed Energy Burst Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10" />
        </div>

        {/* Fixed Interactive Grid */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section Content */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-visible pt-20 pb-20">
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20 interactive"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Award-winning digital marketing agency
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              We Create
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundSize: ["200% 200%", "200% 200%", "200% 200%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(45deg, #60a5fa, #a78bfa, #60a5fa)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%"
                }}
              >
                Digital Success
              </motion.span>
              Stories
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Transform your business with data-driven marketing strategies that deliver 
              measurable results and drive sustainable growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center relative overflow-hidden interactive magnetic"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Your Project</span>
                <motion.div className="relative z-10 ml-2">
                  <ArrowRight 
                    className="group-hover:translate-x-1 transition-transform duration-200" 
                    size={20} 
                  />
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="group flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200 interactive magnetic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-200 border border-blue-500/30"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <Play className="text-blue-400" size={20} />
                </motion.div>
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group interactive magnetic"
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-400 mb-2 flex items-center justify-center"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    {stat.icon}
                    <span className="ml-2">{stat.number}</span>
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero 
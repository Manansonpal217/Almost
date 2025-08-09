import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Globe,
  Zap,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Analytics",
      description: "Data-driven insights to optimize your marketing campaigns and maximize ROI.",
      features: ["Conversion tracking", "A/B testing", "Performance reports"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword research", "Technical SEO", "Content optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all platforms.",
      features: ["Content creation", "Community management", "Paid advertising"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "PPC Campaigns",
      description: "Targeted paid advertising that delivers immediate results and measurable growth.",
      features: ["Google Ads", "Facebook Ads", "Remarketing"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Strategic content that educates, entertains, and converts your audience.",
      features: ["Blog writing", "Video content", "Email campaigns"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and applications that convert visitors into customers.",
      features: ["Responsive design", "E-commerce", "Performance optimization"],
      color: "from-teal-500 to-blue-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20 interactive magnetic"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Marketing
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Solutions
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer end-to-end digital marketing services designed to grow your business 
            and achieve your goals.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border border-gray-800 hover:border-blue-500/50 overflow-hidden hover:-translate-y-1">
                {/* Icon */}
                <div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-105 transition-transform duration-200`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button 
                  className="mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 flex items-center group relative z-10"
                >
                  Learn More
                  <div className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 relative overflow-hidden hover:scale-105 transition-transform duration-200">
            <div className="relative z-10">
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that trust us with their digital marketing needs.
              </p>
              <button 
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Get Your Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Award
} from 'lucide-react';

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [casesRef, casesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: 'TechHub Kenya - Complete Brand Transformation',
      client: 'TechHub Kenya',
      category: 'Brand Identity & Strategy',
      duration: '3 months',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'TechHub Kenya needed a complete rebrand to position themselves as East Africa\'s leading tech incubator and attract international investors.',
      solution: 'We developed a comprehensive brand strategy, created a modern visual identity, and designed all marketing materials to reflect their innovative spirit.',
      results: [
        { metric: 'Brand Recognition', value: '85%', description: 'increase in brand awareness' },
        { metric: 'Investment Inquiries', value: '200%', description: 'increase in investor interest' },
        { metric: 'Startup Applications', value: '150%', description: 'increase in quality applications' }
      ],
      services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Marketing Materials', 'Website Design'],
      testimonial: 'ALJana Tech completely transformed our brand. The new identity perfectly captures our vision and has significantly improved our market position.',
      clientName: 'Sarah Wanjiku, CEO TechHub Kenya'
    },
    {
      title: 'EcoFarm Initiative - Digital Marketing Campaign',
      client: 'EcoFarm Initiative',
      category: 'Digital Marketing & Social Media',
      duration: '6 months',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'EcoFarm needed to raise awareness about sustainable farming practices and increase farmer enrollment in their program.',
      solution: 'We created a comprehensive digital marketing strategy focusing on social media engagement, content marketing, and targeted advertising.',
      results: [
        { metric: 'Social Engagement', value: '300%', description: 'increase in social media engagement' },
        { metric: 'Farmer Enrollment', value: '250%', description: 'increase in program participants' },
        { metric: 'Website Traffic', value: '400%', description: 'increase in organic traffic' }
      ],
      services: ['Digital Strategy', 'Social Media Management', 'Content Creation', 'PPC Advertising', 'SEO'],
      testimonial: 'The digital marketing campaign exceeded all our expectations. We\'ve never seen such engagement and enrollment numbers.',
      clientName: 'Michael Ochieng, Director EcoFarm Initiative'
    },
    {
      title: 'Nairobi Fashion Week - Event Branding & Web Platform',
      client: 'Nairobi Fashion Week',
      category: 'Event Branding & Web Development',
      duration: '4 months',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Nairobi Fashion Week needed a cohesive brand identity and digital platform to showcase African designers and attract international attention.',
      solution: 'We developed a vibrant brand identity celebrating African fashion and built a comprehensive web platform for designer showcases and ticket sales.',
      results: [
        { metric: 'International Visitors', value: '180%', description: 'increase in global audience' },
        { metric: 'Designer Applications', value: '220%', description: 'increase in quality submissions' },
        { metric: 'Ticket Sales', value: '160%', description: 'increase in advance bookings' }
      ],
      services: ['Event Branding', 'Web Development', 'E-commerce Integration', 'Digital Marketing', 'Print Design'],
      testimonial: 'ALJana Tech brought our vision to life beautifully. The brand and platform perfectly represent the vibrancy of African fashion.',
      clientName: 'Grace Nyong\'o, Creative Director Nairobi Fashion Week'
    },
    {
      title: 'ACK Guest House Nyeri - Hospitality Website & Booking System',
      client: 'ACK Guest House Nyeri',
      category: 'Web Development & Digital Transformation',
      duration: '2 months',
      image: '/Images/ackweb.png',
      challenge: 'ACK Guest House needed a modern website with integrated booking system to compete with online travel platforms and increase direct bookings.',
      solution: 'We designed and developed a user-friendly website with seamless booking integration, mobile optimization, and local SEO strategy.',
      results: [
        { metric: 'Direct Bookings', value: '190%', description: 'increase in website bookings' },
        { metric: 'Online Visibility', value: '250%', description: 'improvement in search rankings' },
        { metric: 'User Engagement', value: '170%', description: 'increase in session duration' }
      ],
      services: ['Web Development', 'Booking System Integration', 'Mobile Optimization', 'Local SEO', 'Content Strategy'],
      testimonial: 'The new website has transformed our business. We\'re getting more direct bookings than ever before.',
      clientName: 'Rev. David Kimani, Manager ACK Guest House Nyeri'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 rounded-full text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4 mr-2" />
              Real Results, Real Impact
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Case{' '}
              <span className="bg-gradient-to-r from-purple-600 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their brands, increase their market presence, 
              and achieve measurable results through strategic design and technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-purple-600 to-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Study */}
      <section ref={casesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 50 }}
            animate={casesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Case Study Image */}
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-green-500 p-1 rounded-3xl">
                <img
                  src={caseStudies[selectedCase].image}
                  alt={caseStudies[selectedCase].title}
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{caseStudies[selectedCase].duration}</div>
                  <div className="text-sm text-gray-600">Project Duration</div>
                </div>
              </div>
            </div>

            {/* Case Study Details */}
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                {caseStudies[selectedCase].category}
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {caseStudies[selectedCase].title}
              </h2>

              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[selectedCase].challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  Our Solution
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {caseStudies[selectedCase].solution}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[selectedCase].services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-yellow-600" />
                  The Results
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {caseStudies[selectedCase].results.map((result, index) => (
                    <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{result.value}</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                      <div className="text-xs text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-purple-50 to-green-50 p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      "{caseStudies[selectedCase].testimonial}"
                    </p>
                    <div className="font-semibold text-gray-900">
                      {caseStudies[selectedCase].clientName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Let's discuss how we can help transform your brand and achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudies;
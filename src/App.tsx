import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  PenTool, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Portfolio items
  const portfolioItems = [
    {
      title: "Brand Identity - TechHub Kenya",
      category: "Branding",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete brand identity for Kenya's leading tech incubator"
    },
    {
      title: "Social Media Campaign - EcoFarm",
      category: "Social Media",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vibrant social media designs for sustainable farming initiative"
    },
    {
      title: "Website Design - Nairobi Fashion Week",
      category: "Web Design",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern website showcasing African fashion designers"
    },
    {
      title: "Website development - ACK guest house Nyeri",
      category: "Websie development",
      image: "/Images/ackweb.png",
      description: "Crafting premium websites that honor Kenyan heritage with modern desig"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      company: "TechHub Kenya",
      text: "AlJana Tech transformed our brand identity completely. Their understanding of African digital culture is exceptional.",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      company: "EcoFarm Initiative",
      text: "The social media designs increased our engagement by 300%. Truly professional and creative work.",
      rating: 5
    },
    {
      name: "Grace Nyong'o",
      company: "Nairobi Fashion Week",
      text: "Outstanding creativity and attention to detail. They captured our vision perfectly.",
      rating: 5
    }
  ];

  // Auto-advance portfolio carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
               <img 
                  src="/Images/Aljana logo.png" 
                  alt="AlJana Logo" 
                  className="w-16 h-16 rounded-full object-cover"
                />
            
             {/* Brand Name */}
               <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                  AlJana Tech
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'portfolio', 'about', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-purple-600 font-medium' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              {['hero', 'portfolio', 'about', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4 mr-2" />
              Creative. Digital. Global.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovative Design {' '}
              <span className="bg-gradient-to-r from-purple-600 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                for Forward  Thinking
              </span>{' '}
             Brands Everywhere
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We create innovative digital experiences that blend culture, creativity, and strategy to drive business growth. From startups to SMEs, we bring your vision to life with design that connects across borders and audiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Brand Mockups */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <PenTool className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Logo Design</h3>
                  <p className="text-sm text-gray-600">Creative brand identities</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg mb-4 flex items-center justify-center">
                    <Instagram className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                  <p className="text-sm text-gray-600">Engaging content design</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white font-bold text-2xl">Web</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Web Design</h3>
                  <p className="text-sm text-gray-600">Modern digital experiences</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600 via-yellow-500 to-green-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">BRAND</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Branding</h3>
                  <p className="text-sm text-gray-600">Complete brand systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Creative
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent"> Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Explore how we've partnered with Kenyan businesses and startups to craft memorable brand experiences that captivate audiences and fuel sustainable growth.
            </p>
          </div>

          {/* Featured Portfolio Carousel */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-purple-100 via-yellow-50 to-green-100 rounded-3xl p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-200 text-purple-800 text-sm font-medium rounded-full mb-4">
                    {portfolioItems[currentPortfolioIndex].category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {portfolioItems[currentPortfolioIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {portfolioItems[currentPortfolioIndex].description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)}
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm text-gray-500">
                      {currentPortfolioIndex + 1} / {portfolioItems.length}
                    </span>
                    <button
                      onClick={() => setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length)}
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={portfolioItems[currentPortfolioIndex].image}
                    alt={portfolioItems[currentPortfolioIndex].title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center group hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Identity</h3>
              <p className="text-gray-600">Complete brand systems including logos, colors, and guidelines.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl text-center group hover:from-yellow-100 hover:to-yellow-200 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600">Engaging social media designs and content strategies.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center group hover:from-green-100 hover:to-green-200 transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="text-white font-bold text-sm">WEB</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Design</h3>
              <p className="text-gray-600">Modern, responsive websites that convert visitors to customers.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 p-8 rounded-2xl text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Print Design</h3>
              <p className="text-gray-600">Business cards, brochures, and marketing materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                  AlJana Tech
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a creative design studio based in Nairobi, passionate about elevating brands across the globe with an African touch
                Our team blends cultural insight with cutting-edge design techniques to craft bold,
                 impactful brand experiences rooted in authenticity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups taking their first steps to established SMEs looking to refresh their image, 
                we partner with businesses across Kenya to tell their stories through compelling visual design.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">45+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-2">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Brand Application Mockups */}
              <div className="space-y-4">
                {/* Business Card Mockup */}
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-24 rounded-lg p-3 text-white">
                    <div className="flex items-center mb-2">
                      <PenTool className="w-4 h-4 mr-2" />
                      <span className="text-xs font-bold">AlJana Tech</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-purple-200">Creative Director</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">Business Card</p>
                </div>

                {/* T-Shirt Mockup */}
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-gray-900 h-24 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PenTool className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
                      <div className="text-white text-xs font-bold">AlJana Tech</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">T-Shirt Design</p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                {/* Instagram Post Template */}
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-yellow-400 via-purple-500 to-green-500 h-24 rounded-lg p-3 text-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-bold mb-1">DESIGN</div>
                      <div className="text-xs">That Inspires</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">Instagram Template</p>
                </div>

                {/* Sticker Mockup */}
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="bg-green-500 h-24 rounded-full flex items-center justify-center mx-4">
                    <div className="text-white text-center">
                      <PenTool className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs font-bold">AlJana Tech</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">Sticker Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with AlJana Tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Brand?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-purple-200">maingijulius001@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-purple-200">+254 705 494 094</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-purple-200">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 rounded-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 rounded-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/20 rounded-lg border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="branding" className="text-gray-900">Brand Identity</option>
                    <option value="web" className="text-gray-900">Web Design</option>
                    <option value="social" className="text-gray-900">Social Media</option>
                    <option value="print" className="text-gray-900">Print Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 rounded-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/Images/Aljana logo.png" alt="Logo" className="w-16 h-16" />
              <span className="text-xl font-bold">AlJana Tech</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 AlJana Tech. All rights reserved.</p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
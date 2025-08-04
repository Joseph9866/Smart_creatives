import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Download, 
  Calendar, 
  User, 
  ArrowRight,
  FileText,
  CheckCircle,
  X
} from 'lucide-react';

const Blogs = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [blogsRef, blogsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const blogs = [
    {
      id: 'brand-identity-guide-2025',
      title: 'The Complete Guide to Brand Identity in 2025',
      excerpt: 'Discover the latest trends and strategies for creating compelling brand identities that resonate with modern audiences.',
      author: 'Julius Maingi',
      date: '2025-01-15',
      category: 'Brand Strategy',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/brand-identity-guide-2025.pdf',
      featured: true
    },
    {
      id: 'digital-marketing-trends-2025',
      title: 'Digital Marketing Trends That Will Dominate 2025',
      excerpt: 'Stay ahead of the curve with insights into the digital marketing strategies that will drive success in the coming year.',
      author: 'Grace Nyong\'o',
      date: '2025-01-10',
      category: 'Digital Marketing',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/digital-marketing-trends-2025.pdf',
      featured: false
    },
    {
      id: 'web-development-best-practices',
      title: 'Modern Web Development: Best Practices for 2025',
      excerpt: 'Learn the essential techniques and technologies that every web developer should master in the modern digital landscape.',
      author: 'Michael Ochieng',
      date: '2025-01-05',
      category: 'Web Development',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/web-development-best-practices.pdf',
      featured: false
    },
    {
      id: 'cloud-computing-small-business',
      title: 'Cloud Computing Solutions for Small Businesses',
      excerpt: 'A comprehensive guide to leveraging cloud technologies to scale your business efficiently and cost-effectively.',
      author: 'David Kimani',
      date: '2024-12-28',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/cloud-computing-small-business.pdf',
      featured: false
    },
    {
      id: 'social-media-strategy-guide',
      title: 'Building a Winning Social Media Strategy',
      excerpt: 'Master the art of social media marketing with proven strategies that build communities and drive engagement.',
      author: 'Amina Hassan',
      date: '2024-12-20',
      category: 'Social Media',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/social-media-strategy-guide.pdf',
      featured: false
    },
    {
      id: 'seo-optimization-2025',
      title: 'SEO Optimization Techniques for Maximum Visibility',
      excerpt: 'Unlock the secrets of search engine optimization and drive organic traffic to your website with proven techniques.',
      author: 'Sarah Wanjiku',
      date: '2024-12-15',
      category: 'SEO',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '/downloads/seo-optimization-2025.pdf',
      featured: false
    }
  ];

  const handleDownloadClick = (blog: any) => {
    setSelectedBlog(blog);
    setShowDownloadForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Supabase to store the download request
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate file download
      const link = document.createElement('a');
      link.href = selectedBlog.downloadUrl;
      link.download = `${selectedBlog.id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloaded(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false);
        setShowDownloadForm(false);
        setFormData({ name: '', email: '' });
        setSelectedBlog(null);
      }, 3000);
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setShowDownloadForm(false);
    setSelectedBlog(null);
    setFormData({ name: '', email: '' });
    setIsDownloaded(false);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Brand Strategy': 'from-purple-500 to-purple-600',
      'Digital Marketing': 'from-yellow-500 to-yellow-600',
      'Web Development': 'from-green-500 to-green-600',
      'Cloud Computing': 'from-blue-500 to-blue-600',
      'Social Media': 'from-pink-500 to-pink-600',
      'SEO': 'from-indigo-500 to-indigo-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

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
              <BookOpen className="w-4 h-4 mr-2" />
              Insights, Guides & Industry Knowledge
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover expert insights, industry trends, and practical guides to help you navigate 
              the digital landscape and grow your business. Download our comprehensive resources for free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog */}
      {blogs.filter(blog => blog.featured).map((blog, index) => (
        <section key={blog.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-green-50 rounded-3xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                    <FileText className="w-4 h-4 mr-2" />
                    Featured Article
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{blog.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-gray-500">{blog.readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleDownloadClick(blog)}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-green-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Download Full Article
                    <Download className="w-5 h-5 ml-2" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600 to-green-500 p-1 rounded-3xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-80 object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Blog Grid */}
      <section ref={blogsRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={blogsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More{' '}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of in-depth guides and insights covering various aspects of digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter(blog => !blog.featured).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ y: 50, opacity: 0 }}
                animate={blogsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(blog.category)} text-white text-xs font-medium rounded-full`}>
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleDownloadClick(blog)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-500 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Download Article
                    <Download className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {isDownloaded ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Started!</h3>
                <p className="text-gray-600">Your article is being downloaded. Thank you for your interest!</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Article</h3>
                  <p className="text-gray-600">Please provide your details to download:</p>
                  <p className="font-medium text-purple-600 mt-2">{selectedBlog?.title}</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-500 text-white font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Download...
                      </>
                    ) : (
                      <>
                        Download Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By downloading, you agree to receive occasional updates about our services. 
                  You can unsubscribe at any time.
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Blogs;
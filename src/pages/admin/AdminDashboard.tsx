import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Briefcase, 
  MessageSquare,
  BookOpen,
  Settings,
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    projects: 0,
    caseStudies: 0,
    teamMembers: 0,
    testimonials: 0,
    blogPosts: 0,
    newsletterSubscribers: 0
  });
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/admin/login');
      return;
    }

    const { data: adminUser } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', user.email)
      .eq('is_active', true)
      .single();

    if (!adminUser) {
      await supabase.auth.signOut();
      navigate('/admin/login');
      return;
    }

    setUser(adminUser);
  };

  const loadStats = async () => {
    try {
      const [
        { count: projects },
        { count: caseStudies },
        { count: teamMembers },
        { count: testimonials },
        { count: blogPosts },
        { count: newsletterSubscribers }
      ] = await Promise.all([
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('case_studies').select('*', { count: 'exact', head: true }),
        supabase.from('team_members').select('*', { count: 'exact', head: true }),
        supabase.from('testimonials').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        projects: projects || 0,
        caseStudies: caseStudies || 0,
        teamMembers: teamMembers || 0,
        testimonials: testimonials || 0,
        blogPosts: blogPosts || 0,
        newsletterSubscribers: newsletterSubscribers || 0
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const statCards = [
    { title: 'Projects', count: stats.projects, icon: Briefcase, color: 'from-blue-500 to-blue-600' },
    { title: 'Case Studies', count: stats.caseStudies, icon: BarChart3, color: 'from-green-500 to-green-600' },
    { title: 'Team Members', count: stats.teamMembers, icon: Users, color: 'from-purple-500 to-purple-600' },
    { title: 'Testimonials', count: stats.testimonials, icon: MessageSquare, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Blog Posts', count: stats.blogPosts, icon: BookOpen, color: 'from-pink-500 to-pink-600' },
    { title: 'Subscribers', count: stats.newsletterSubscribers, icon: FileText, color: 'from-indigo-500 to-indigo-600' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Our Work', icon: Briefcase },
    { id: 'case-studies', label: 'Case Studies', icon: FileText },
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'blogs', label: 'Blog Posts', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/Images/Aljana logo.png" 
                alt="ALJana Tech" 
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-purple-600 to-green-500 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {statCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{card.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{card.count}</p>
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center`}>
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="flex items-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Add Project</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Add Case Study</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Add Team Member</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Add Blog Post</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other tabs content would go here */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {menuItems.find(item => item.id === activeTab)?.label} Management
                </h2>
                <p className="text-gray-600 mb-6">
                  This section is under development. Full CRUD functionality will be available soon.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:from-purple-700 hover:to-green-600 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <span>Add New</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View All</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
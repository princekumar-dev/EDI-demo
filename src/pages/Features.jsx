import React from 'react'
import { 
  Brain, 
  Eye, 
  Users, 
  BarChart3, 
  Beaker, 
  Mic, 
  Camera, 
  Heart,
  Compass,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Age-Adaptive Interface',
      description: 'Automatically changes UI and teaching style based on age category. Kids get colorful, playful interfaces while adults get professional, streamlined designs.',
      benefits: ['Seamless transitions', 'Age-appropriate content', 'Optimized engagement'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'AI Learning Style Detector',
      description: 'Identifies whether you learn best through Visual, Auditory, Kinesthetic, or Reading/Writing methods and adapts content dynamically.',
      benefits: ['Personalized content delivery', 'Improved retention', 'Faster learning'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Multi-Mode Teaching',
      description: 'Kids learn through storytelling & AR, teens through quizzes & videos, adults through career and skill training.',
      benefits: ['Age-specific pedagogy', 'Engaging formats', 'Relevant content'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Parental & Teacher Dashboard',
      description: 'Comprehensive progress tracking, screen time monitoring, weakness identification, and detailed analytics for guardians.',
      benefits: ['Real-time insights', 'Progress monitoring', 'Safety controls'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Beaker,
      title: 'Real-World Learning Hub',
      description: 'DIY experiments, coding for kids, STEM challenges, and mini internships that connect learning to practical applications.',
      benefits: ['Hands-on experience', 'Practical skills', 'Career preparation'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Mic,
      title: 'Voice Learning for Kids',
      description: '"Talk to Learn" mode with advanced speech recognition that helps young learners interact naturally with educational content.',
      benefits: ['Natural interaction', 'Language development', 'Accessibility'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Camera,
      title: 'AI Homework Helper',
      description: 'Photo-based homework assistance with safety mode that provides hints and guidance without giving direct answers.',
      benefits: ['Learning support', 'Safe assistance', 'Skill building'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Focus timer, calm mode, emotional learning tools, and motivation systems to support holistic development.',
      benefits: ['Emotional intelligence', 'Stress management', 'Balanced learning'],
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: Compass,
      title: 'Career Engine',
      description: 'AI-powered suggestions for skills, learning pathways, and career opportunities based on interests and aptitude.',
      benefits: ['Career guidance', 'Skill mapping', 'Future planning'],
      gradient: 'from-violet-500 to-purple-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-md border border-blue-100">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Revolutionary Features</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 px-4">
              <span className="text-gradient">Powerful Features</span>
              <br />
              <span className="text-gray-900">That Adapt to You</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover the innovative technologies and methodologies that make EduOrbit 
              the most adaptive learning platform ever created.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="glass-card group hover:scale-105 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">Key Benefits</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3`}></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-card text-center">
              <Zap className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">AI-powered responses in milliseconds for seamless learning experiences</p>
            </div>
            
            <div className="glass-card text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">Advanced privacy protection and parental controls for peace of mind</p>
            </div>
            
            <div className="glass-card text-center">
              <Brain className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">Machine learning algorithms that understand and adapt to each learner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-sky-50">
        <div className="container-custom">
          <div className="glass-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-blue-500/5"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 px-4">
                Experience These Features Today
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
                See how EduOrbit's revolutionary features can transform your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <button className="btn-primary">
                  Start Free Trial
                </button>
                <button className="btn-secondary">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
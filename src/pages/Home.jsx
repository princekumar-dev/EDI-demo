import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight, 
  Play,
  Sparkles,
  BookOpen,
  Gamepad2,
  GraduationCap,
  Heart,
  Target,
  Award
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Age-Adaptive Interface',
      description: 'Automatically changes UI and teaching style based on age category'
    },
    {
      icon: Zap,
      title: 'AI Learning Style Detector',
      description: 'Visual, Auditory, Kinesthetic, Reading/Writing with dynamic content'
    },
    {
      icon: Users,
      title: 'Multi-Mode Teaching',
      description: 'Storytelling for kids, quizzes for teens, career training for adults'
    },
    {
      icon: Shield,
      title: 'Parental Dashboard',
      description: 'Progress tracking, screen time, weaknesses, and analytics'
    },
    {
      icon: BookOpen,
      title: 'Real-World Learning',
      description: 'DIY experiments, coding for kids, STEM challenges, mini internships'
    },
    {
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Focus timer, calm mode, emotional learning, motivation tools'
    }
  ]

  const ageModes = [
    {
      title: 'Kids Mode',
      age: '3-10 years',
      icon: Sparkles,
      color: 'from-pink-500 to-orange-500',
      features: [
        'Cartoon interface',
        'Story-based lessons',
        'AR alphabet & science',
        'Voice "Talk to Learn"',
        'Drawing-based learning',
        'Rewards & badges'
      ]
    },
    {
      title: 'Teen Mode',
      age: '11-17 years',
      icon: Gamepad2,
      color: 'from-purple-500 to-blue-500',
      features: [
        'Concept videos',
        'Gamified quizzes',
        'Homework solver (hints)',
        'Study planner',
        'Career exploration',
        'Social learning'
      ]
    },
    {
      title: 'College Mode',
      age: '18+ years',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Skill-based courses',
        'Internship connect',
        'AI coding coach',
        'Competitive exam mode',
        'Resume builder',
        'Interview simulator'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-blue-100/50 blur-3xl"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-md border border-blue-100">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Adaptive Learning</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient">EduOrbit</span>
              <br />
              <span className="text-gray-900">One App for Every Age</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
              AI-powered adaptive learning for kids, teens, and college students. 
              One platform that grows with you, adapting to your age, learning style, and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-started" className="btn-primary group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/prototype" className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Try Prototype
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes EduOrbit Unique */}
      <section className="section-padding bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              What Makes EduOrbit <span className="text-gradient">Unique</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Revolutionary features that adapt to every learner's journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="glass-card group hover:scale-105">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 w-fit mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Age Modes Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              <span className="text-gradient">Age Modes</span> That Grow With You
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Tailored experiences for every stage of learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {ageModes.map((mode, index) => {
              const Icon = mode.icon
              return (
                <div key={index} className="glass-card group hover:scale-105 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${mode.color} w-fit mb-4 shadow-md`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{mode.title}</h3>
                    <p className="text-sky-600 font-medium mb-4">{mode.age}</p>
                    <ul className="space-y-2">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/features" 
                      className="inline-flex items-center mt-6 text-sky-600 hover:text-sky-700 font-medium group"
                    >
                      Learn More 
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-sky-50">
        <div className="container-custom">
          <div className="glass-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-blue-500/5"></div>
            <div className="relative">
              <Award className="h-12 sm:h-16 w-12 sm:w-16 text-sky-600 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 px-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of learners who are already experiencing the future of education with EduOrbit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link to="/get-started" className="btn-primary">
                  Start Free Trial
                </Link>
                <Link to="/prototype" className="btn-secondary">
                  View Prototype
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
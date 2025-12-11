import React, { useState } from 'react'
import { 
  Play, 
  Smartphone, 
  Monitor, 
  Tablet,
  ArrowLeft,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const Prototype = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [selectedDevice, setSelectedDevice] = useState('desktop')

  const screens = [
    {
      title: 'Welcome Screen',
      description: 'Age selection and personalized onboarding experience',
      image: '/api/placeholder/800/600',
      features: ['Age detection', 'Learning style assessment', 'Goal setting']
    },
    {
      title: 'Kids Dashboard',
      description: 'Colorful, cartoon-style interface for young learners',
      image: '/api/placeholder/800/600',
      features: ['Story-based navigation', 'Voice interactions', 'Reward system']
    },
    {
      title: 'Teen Dashboard',
      description: 'Gamified learning environment for teenagers',
      image: '/api/placeholder/800/600',
      features: ['Achievement system', 'Social features', 'Study planner']
    },
    {
      title: 'College Dashboard',
      description: 'Professional interface for higher education',
      image: '/api/placeholder/800/600',
      features: ['Skill tracking', 'Career guidance', 'Internship portal']
    },
    {
      title: 'AI Learning Path',
      description: 'Personalized curriculum generation',
      image: '/api/placeholder/800/600',
      features: ['Adaptive content', 'Progress tracking', 'Difficulty adjustment']
    },
    {
      title: 'Homework Helper',
      description: 'AI-powered assistance with safety features',
      image: '/api/placeholder/800/600',
      features: ['Photo recognition', 'Hint system', 'Step-by-step guidance']
    },
    {
      title: 'Parental Dashboard',
      description: 'Comprehensive monitoring and control panel',
      image: '/api/placeholder/800/600',
      features: ['Progress analytics', 'Screen time control', 'Safety settings']
    },
    {
      title: 'Internship Hub',
      description: 'Real-world experience connections',
      image: '/api/placeholder/800/600',
      features: ['Opportunity matching', 'Skill verification', 'Mentor connect']
    }
  ]

  const devices = [
    { id: 'desktop', name: 'Desktop', icon: Monitor },
    { id: 'tablet', name: 'Tablet', icon: Tablet },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ]

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length)
  }

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
              <Play className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">Interactive Prototype</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Experience</span>
              <br />
              <span className="text-white">EduOrbit in Action</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore our interactive prototype and see how EduOrbit adapts to different 
              age groups and learning styles in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Device Selection */}
      <section className="mb-12">
        <div className="container-custom">
          <div className="flex justify-center mb-8">
            <div className="glass rounded-2xl p-2 flex space-x-2">
              {devices.map((device) => {
                const Icon = device.icon
                return (
                  <button
                    key={device.id}
                    onClick={() => setSelectedDevice(device.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                      selectedDevice === device.id
                        ? 'bg-primary-500 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Viewer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Screen Preview */}
              <div className="lg:col-span-2">
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 ${
                  selectedDevice === 'mobile' ? 'aspect-[9/16] max-w-sm mx-auto' :
                  selectedDevice === 'tablet' ? 'aspect-[4/3]' :
                  'aspect-video'
                }`}>
                  <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Monitor className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">{screens[currentScreen].title}</p>
                      <p className="text-sm opacity-70 mt-2">Interactive prototype coming soon</p>
                    </div>
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                      onClick={prevScreen}
                      className="p-2 rounded-full glass text-white hover:bg-white/20 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextScreen}
                      className="p-2 rounded-full glass text-white hover:bg-white/20 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Screen Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {screens[currentScreen].title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {screens[currentScreen].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {screens[currentScreen].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full group">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Full Prototype
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            All Prototype Screens
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screens.map((screen, index) => (
              <div
                key={index}
                onClick={() => setCurrentScreen(index)}
                className={`glass-card cursor-pointer transition-all ${
                  currentScreen === index ? 'ring-2 ring-primary-400' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-4 flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-white/50" />
                </div>
                <h3 className="font-semibold text-white mb-2">{screen.title}</h3>
                <p className="text-sm text-white/70">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
            <div className="relative">
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Ready to Build Your Learning Journey?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the full power of EduOrbit with our complete platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Free Trial
                </button>
                <button className="btn-secondary">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Prototype
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Sparkles, 
  Gamepad2, 
  GraduationCap, 
  ArrowRight,
  Star,
  Heart,
  Zap
} from 'lucide-react'

const AgeSelection = () => {
  const navigate = useNavigate()
  const [selectedAge, setSelectedAge] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const ageGroups = [
    {
      id: 'kids',
      title: 'Kids Mode',
      age: '3-10 years',
      icon: Sparkles,
      color: 'from-pink-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-pink-500/20 to-orange-500/20',
      description: 'Fun learning with stories, games, and colorful adventures!',
      features: ['🎨 Colorful Interface', '📚 Story Learning', '🎮 Fun Games', '🎵 Voice Learning'],
      route: '/dashboard/kids'
    },
    {
      id: 'teen',
      title: 'School Mode',
      age: '11-17 years',
      icon: Gamepad2,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      description: 'Gamified learning with quizzes, videos, and study tools!',
      features: ['🎯 Gamified Quizzes', '📹 Video Lessons', '📝 Homework Help', '🏆 Achievements'],
      route: '/dashboard/teen'
    },
    {
      id: 'college',
      title: 'College Mode',
      age: '18+ years',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      description: 'Professional skills, career prep, and advanced learning!',
      features: ['💼 Career Skills', '🔬 Advanced Courses', '🤝 Internships', '💻 Coding Coach'],
      route: '/dashboard/college'
    }
  ]

  const handleAgeSelect = (ageGroup) => {
    setSelectedAge(ageGroup.id)
    setIsAnimating(true)
    
    setTimeout(() => {
      navigate(ageGroup.route)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 sm:left-20 floating-element">
        <Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400/40" />
      </div>
      <div className="absolute top-40 right-10 sm:right-32 floating-element" style={{ animationDelay: '1s' }}>
        <Heart className="h-5 sm:h-6 w-5 sm:w-6 text-pink-400/40" />
      </div>
      <div className="absolute bottom-32 left-20 sm:left-40 floating-element" style={{ animationDelay: '2s' }}>
        <Zap className="h-8 sm:h-10 w-8 sm:w-10 text-blue-400/40" />
      </div>

      <div className="container-custom relative z-10 py-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-md border border-blue-100">
            <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-500" />
            <span className="text-sm sm:text-lg font-medium text-gray-700">Choose Your Learning Journey</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight px-4">
            <span className="text-gradient">Welcome to</span>
            <br />
            <span className="text-gray-900">EduOrbit</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Select your age group to unlock a personalized learning experience designed just for you!
          </p>
        </div>

        {/* Age Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {ageGroups.map((group, index) => {
            const Icon = group.icon
            const isSelected = selectedAge === group.id
            const isOtherSelected = selectedAge && selectedAge !== group.id
            
            return (
              <div
                key={group.id}
                onClick={() => handleAgeSelect(group)}
                className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isSelected ? 'scale-110 z-20' : ''
                } ${
                  isOtherSelected ? 'scale-95 opacity-50' : ''
                } ${
                  isAnimating && isSelected ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card group relative overflow-hidden h-full">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative text-center p-6 sm:p-8">
                    {/* Icon */}
                    <div className={`mx-auto mb-6 p-4 sm:p-6 rounded-full bg-gradient-to-r ${group.color} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-10 sm:h-12 w-10 sm:w-12 text-white" />
                    </div>
                    
                    {/* Title and Age */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{group.title}</h3>
                    <p className="text-base sm:text-lg text-sky-600 font-medium mb-4">{group.age}</p>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {group.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full font-semibold text-white bg-gradient-to-r ${group.color} transform transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}>
                      <span>Start Learning</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute inset-0 border-4 border-sky-500/50 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-gray-500 text-base sm:text-lg">
            Don't worry, you can always switch between modes later!
          </p>
        </div>
      </div>

      {/* Loading Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-card p-8 text-center max-w-sm mx-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-sky-600 mx-auto mb-4"></div>
            <p className="text-gray-900 text-lg">Loading your personalized dashboard...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgeSelection
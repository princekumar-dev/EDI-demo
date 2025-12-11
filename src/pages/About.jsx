import React from 'react'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  Globe,
  Zap,
  Shield,
  BookOpen
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of educational technology with AI-powered adaptive learning'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Creating learning experiences that work for every age, ability, and learning style'
    },
    {
      icon: Zap,
      title: 'Growth',
      description: 'Fostering continuous learning and development throughout life\'s journey'
    }
  ]

  const stats = [
    { number: '10M+', label: 'Learners Worldwide' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'AI Support' }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Stanford AI researcher with 15+ years in educational technology',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in machine learning and adaptive systems',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Learning Sciences',
      bio: 'Child development expert and former MIT professor',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      bio: 'Design thinking expert with background in user experience research',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Democratizing</span>
              <br />
              <span className="text-white">Adaptive Learning</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We believe that every learner deserves an education that adapts to their unique 
              needs, grows with them, and prepares them for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="glass-card text-center">
              <Target className="h-12 w-12 text-primary-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To democratize adaptive learning by creating an AI-powered platform that 
                personalizes education for every age, learning style, and life stage.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card text-center">
              <Eye className="h-12 w-12 text-secondary-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                A world where learning is truly personalized, accessible, and continuous - 
                one app that grows with every learner from childhood to career.
              </p>
            </div>

            {/* Impact */}
            <div className="glass-card text-center">
              <Globe className="h-12 w-12 text-accent-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-white/80 leading-relaxed">
                Transforming millions of lives through adaptive learning that unlocks 
                human potential and creates opportunities for lifelong growth.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="glass-card group hover:scale-105">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Passionate educators, technologists, and innovators working together 
              to transform learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card text-center group hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-white/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  The <span className="text-gradient">EduOrbit Story</span>
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    EduOrbit was born from a simple observation: traditional education 
                    treats all learners the same, despite the fact that everyone learns 
                    differently and at different stages of life.
                  </p>
                  <p>
                    Our founders, Dr. Sarah Chen and Marcus Rodriguez, met at a conference 
                    on AI in education. Sarah, a former Stanford researcher, had spent years 
                    studying how children's learning needs evolve with age. Marcus, an 
                    ex-Google engineer, had been working on adaptive algorithms.
                  </p>
                  <p>
                    Together, they envisioned a platform that could truly adapt - not just 
                    to learning styles, but to age, maturity, goals, and life circumstances. 
                    The result is EduOrbit: one app that grows with you from your first 
                    words to your career achievements.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-white/50" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
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
                Join Our Mission
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Be part of the learning revolution. Help us create a world where 
                education truly adapts to every learner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Learning Today
                </button>
                <button className="btn-secondary">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
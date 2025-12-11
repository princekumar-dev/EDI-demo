import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queryType: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const queryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'demo', label: 'Request Demo' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Careers' }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@eduorbit.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive, San Francisco, CA 94105',
      description: 'Our headquarters'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        queryType: 'general',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
              <MessageCircle className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Contact</span>
              <br />
              <span className="text-white">EduOrbit</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions about EduOrbit? Want to see a demo? We'd love to hear from you. 
              Reach out and let's start a conversation about the future of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/50 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/50 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="queryType" className="block text-sm font-medium text-white mb-2">
                      Query Type
                    </label>
                    <select
                      id="queryType"
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                    >
                      {queryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-slate-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/50 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-card">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-primary-400 font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-white/70">{info.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="glass-card">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-primary-400" />
                  <span className="text-white">Monday - Friday</span>
                </div>
                <p className="text-white/70 mb-4">9:00 AM - 6:00 PM (PST)</p>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-white/70">
                    We typically respond within 24 hours
                  </span>
                </div>
              </div>

              <div className="glass-card">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="btn-secondary w-full">
                    Schedule a Demo
                  </button>
                  <button className="btn-secondary w-full">
                    Download Brochure
                  </button>
                  <button className="btn-secondary w-full">
                    Join Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/70">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card">
              <h3 className="font-semibold text-white mb-2">How does age adaptation work?</h3>
              <p className="text-white/70 text-sm">
                EduOrbit uses AI to detect age ranges and automatically adjusts the interface, 
                content complexity, and teaching methods accordingly.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="font-semibold text-white mb-2">Is EduOrbit safe for children?</h3>
              <p className="text-white/70 text-sm">
                Yes, we have comprehensive safety features including parental controls, 
                content filtering, and privacy protection designed specifically for young learners.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="font-semibold text-white mb-2">Can I try EduOrbit for free?</h3>
              <p className="text-white/70 text-sm">
                Absolutely! We offer a 14-day free trial with full access to all features. 
                No credit card required to get started.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="font-semibold text-white mb-2">What devices are supported?</h3>
              <p className="text-white/70 text-sm">
                EduOrbit works on all devices - desktop, tablet, and mobile. 
                The interface automatically adapts to your screen size and device type.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
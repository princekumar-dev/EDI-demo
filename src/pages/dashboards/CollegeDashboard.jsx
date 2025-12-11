import React, { useState } from 'react'
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  TrendingUp, 
  Users, 
  Calendar,
  Target,
  Award,
  BookOpen,
  Lightbulb,
  MessageSquare,
  FileText,
  Video,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  User,
  Building,
  PlusCircle,
  Search,
  Filter,
  Play
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CollegeDashboard = () => {
  const [currentSection, setCurrentSection] = useState('overview')
  const [skillPoints, setSkillPoints] = useState(2450)
  const [completedCourses, setCompletedCourses] = useState(8)
  const [currentStreak, setCurrentStreak] = useState(15)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [enrolledCourses, setEnrolledCourses] = useState(courses)
  const [availableCourses, setAvailableCourses] = useState([
    {
      id: 'ai-ml',
      title: 'Artificial Intelligence & Machine Learning',
      provider: 'AI Institute',
      duration: '20 weeks',
      difficulty: 'Advanced',
      rating: 4.8,
      students: 12500,
      skills: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
      description: 'Master AI and ML fundamentals with hands-on projects',
      price: 'Free',
      category: 'Technology',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Development',
      provider: 'CryptoAcademy',
      duration: '14 weeks',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 8300,
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
      description: 'Learn blockchain technology and build decentralized apps',
      price: 'Free',
      category: 'Technology',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      provider: 'MarketPro',
      duration: '10 weeks',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 15200,
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      description: 'Complete digital marketing from basics to advanced',
      price: 'Free',
      category: 'Business',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      provider: 'AppSchool',
      duration: '16 weeks',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 10800,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Build cross-platform mobile applications',
      price: 'Free',
      category: 'Technology',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'finance',
      title: 'Financial Analysis & Investment',
      provider: 'FinanceHub',
      duration: '12 weeks',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 9500,
      skills: ['Excel', 'Financial Modeling', 'Stock Analysis', 'Portfolio Management'],
      description: 'Learn financial analysis and investment strategies',
      price: 'Free',
      category: 'Business',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design Professional',
      provider: 'DesignPro',
      duration: '8 weeks',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 13400,
      skills: ['Photoshop', 'Illustrator', 'Branding', 'Typography'],
      description: 'Master graphic design tools and principles',
      price: 'Free',
      category: 'Design',
      color: 'from-purple-500 to-pink-500'
    }
  ])

  const courses = [
    {
      id: 'web-dev',
      title: 'Full Stack Web Development',
      provider: 'TechAcademy',
      progress: 75,
      duration: '12 weeks',
      difficulty: 'Intermediate',
      skills: ['React', 'Node.js', 'MongoDB'],
      nextLesson: 'Advanced React Hooks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      provider: 'DataPro',
      progress: 45,
      duration: '16 weeks',
      difficulty: 'Advanced',
      skills: ['Python', 'Machine Learning', 'Statistics'],
      nextLesson: 'Neural Networks Basics',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design Fundamentals',
      provider: 'DesignHub',
      progress: 90,
      duration: '8 weeks',
      difficulty: 'Beginner',
      skills: ['Figma', 'User Research', 'Prototyping'],
      nextLesson: 'Design Systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'business',
      title: 'Entrepreneurship & Startups',
      provider: 'BizSchool',
      progress: 30,
      duration: '10 weeks',
      difficulty: 'Intermediate',
      skills: ['Business Planning', 'Marketing', 'Finance'],
      nextLesson: 'Market Research',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const internships = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Frontend Developer Intern',
      location: 'San Francisco, CA',
      duration: '3 months',
      stipend: '$2000/month',
      skills: ['React', 'JavaScript', 'CSS'],
      deadline: '2025-01-15',
      status: 'Applied'
    },
    {
      id: 2,
      company: 'DataFlow Solutions',
      position: 'Data Analyst Intern',
      location: 'Remote',
      duration: '4 months',
      stipend: '$1800/month',
      skills: ['Python', 'SQL', 'Tableau'],
      deadline: '2025-01-20',
      status: 'Open'
    },
    {
      id: 3,
      company: 'StartupX',
      position: 'Product Design Intern',
      location: 'New York, NY',
      duration: '6 months',
      stipend: '$2500/month',
      skills: ['Figma', 'User Research', 'Prototyping'],
      deadline: '2025-01-10',
      status: 'Interview'
    }
  ]

  const skillsProgress = [
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 78, category: 'Frontend' },
    { name: 'Python', level: 65, category: 'Programming' },
    { name: 'UI/UX Design', level: 72, category: 'Design' },
    { name: 'Data Analysis', level: 55, category: 'Analytics' },
    { name: 'Project Management', level: 68, category: 'Business' }
  ]

  const upcomingEvents = [
    {
      title: 'Tech Career Fair',
      date: '2025-01-18',
      time: '10:00 AM',
      type: 'Career Event',
      location: 'Virtual'
    },
    {
      title: 'React Workshop',
      date: '2025-01-20',
      time: '2:00 PM',
      type: 'Workshop',
      location: 'Online'
    },
    {
      title: 'Startup Pitch Competition',
      date: '2025-01-25',
      time: '6:00 PM',
      type: 'Competition',
      location: 'Campus'
    }
  ]

  const CourseCard = ({ course }) => (
    <div className="glass-card group hover:scale-105 cursor-pointer">
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{course.provider}</p>
          </div>
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 border border-green-200' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
            'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {course.difficulty}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-xs sm:text-sm mb-2">Skills you'll learn:</p>
          <div className="flex flex-wrap gap-2">
            {course.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-blue-50 rounded-lg text-xs text-gray-700 border border-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1 mr-2">
            <p className="text-gray-600 text-xs sm:text-sm truncate">Next: {course.nextLesson}</p>
            <p className="text-gray-500 text-xs">{course.duration}</p>
          </div>
          <button className={`px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r ${course.color} text-white text-xs sm:text-sm font-medium hover:scale-105 transition-transform shadow-md flex-shrink-0`}>
            Continue
          </button>
        </div>
      </div>
    </div>
  )

  const InternshipCard = ({ internship }) => (
    <div className="glass-card">
      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md flex-shrink-0">
            <Building className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">{internship.position}</h3>
            <p className="text-gray-600 text-sm">{internship.company}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{internship.location}</p>
          </div>
        </div>
        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
          internship.status === 'Applied' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
          internship.status === 'Interview' ? 'bg-green-100 text-green-700 border border-green-200' :
          'bg-gray-100 text-gray-700 border border-gray-200'
        }`}>
          {internship.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
        <div>
          <p className="text-gray-600">Duration</p>
          <p className="text-gray-900 font-medium">{internship.duration}</p>
        </div>
        <div>
          <p className="text-gray-600">Stipend</p>
          <p className="text-gray-900 font-medium">{internship.stipend}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 text-xs sm:text-sm mb-2">Required Skills:</p>
        <div className="flex flex-wrap gap-2">
          {internship.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 rounded-lg text-xs text-gray-700 border border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-gray-500 text-xs sm:text-sm">Deadline: {internship.deadline}</p>
        <button className="btn-primary text-xs sm:text-sm">
          {internship.status === 'Open' ? 'Apply Now' : 'View Details'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-40 shadow-md">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform shadow-md">
                <GraduationCap className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-display font-bold text-gradient">EduOrbit College</span>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-yellow-50 rounded-full px-3 sm:px-4 py-2 border border-yellow-200 shadow-sm">
                <Star className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">{skillPoints} SP</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-green-50 rounded-full px-3 sm:px-4 py-2 border border-green-200 shadow-sm">
                <TrendingUp className="h-4 sm:h-5 w-4 sm:w-5 text-green-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">{currentStreak} days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-24 overflow-hidden">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Dashboard</h2>
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Target },
                  { id: 'courses', label: 'My Courses', icon: BookOpen },
                  { id: 'add-course', label: 'Add New Course', icon: PlusCircle },
                  { id: 'internships', label: 'Internships', icon: Briefcase },
                  { id: 'skills', label: 'Skills', icon: TrendingUp },
                  { id: 'events', label: 'Events', icon: Calendar },
                  { id: 'coding', label: 'AI Coding Coach', icon: Code }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors relative ${
                        currentSection === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-blue-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentSection === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="glass-card">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Welcome back, Sarah! 🎓
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Ready to advance your career? Let's continue your learning journey.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="glass-card text-center">
                    <BookOpen className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{completedCourses}</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Courses Completed</p>
                  </div>
                  <div className="glass-card text-center">
                    <Star className="h-10 sm:h-12 w-10 sm:w-12 text-yellow-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{skillPoints}</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Skill Points</p>
                  </div>
                  <div className="glass-card text-center">
                    <Briefcase className="h-10 sm:h-12 w-10 sm:w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">3</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Applications</p>
                  </div>
                  <div className="glass-card text-center">
                    <TrendingUp className="h-10 sm:h-12 w-10 sm:w-12 text-purple-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{currentStreak}</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Day Streak</p>
                  </div>
                </div>

                {/* Current Courses */}
                <div className="glass-card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">Continue Learning</h2>
                    <Link to="#" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm sm:text-base">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {courses.slice(0, 2).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>

                {/* Recent Internships */}
                <div className="glass-card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">Internship Opportunities</h2>
                    <Link to="#" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm sm:text-base">
                      <span>View All</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {internships.slice(0, 2).map((internship) => (
                      <InternshipCard key={internship.id} internship={internship} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 'courses' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {enrolledCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'add-course' && (
              <div className="space-y-6">
                <div className="glass-card">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center">
                      <PlusCircle className="h-8 w-8 text-green-500 mr-3" />
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Discover New Courses</h1>
                        <p className="text-gray-600">Expand your skills with top-rated courses</p>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filter */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="sm:col-span-2">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search courses, skills, or topics..."
                          className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900"
                        />
                      </div>
                    </div>
                    <div>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900"
                      >
                        <option value="all">All Categories</option>
                        <option value="Technology">Technology</option>
                        <option value="Business">Business</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Available Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableCourses
                    .filter(course => 
                      (selectedCategory === 'all' || course.category === selectedCategory) &&
                      (searchQuery === '' || 
                        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
                      )
                    )
                    .map((course) => (
                      <div key={course.id} className="glass-card hover:scale-105 transition-all">
                        <div className="relative">
                          <div className={`h-2 rounded-t-xl bg-gradient-to-r ${course.color}`}></div>
                          
                          <div className="p-6">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                                <p className="text-sm text-gray-600">{course.provider}</p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 border border-green-200' :
                                course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                                'bg-red-100 text-red-700 border border-red-200'
                              }`}>
                                {course.difficulty}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                            {/* Stats */}
                            <div className="flex items-center space-x-4 mb-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="font-bold text-gray-900">{course.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-gray-600">
                                <Users className="h-4 w-4" />
                                <span>{course.students.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>{course.duration}</span>
                              </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                              <p className="text-xs text-gray-600 mb-2">Skills you'll learn:</p>
                              <div className="flex flex-wrap gap-2">
                                {course.skills.map((skill, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-50 rounded-lg text-xs text-gray-700 border border-blue-100">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <span className="text-lg font-bold text-green-600">{course.price}</span>
                              <button
                                onClick={() => {
                                  if (!enrolledCourses.find(c => c.id === course.id)) {
                                    setEnrolledCourses([...enrolledCourses, {
                                      ...course,
                                      progress: 0,
                                      nextLesson: 'Introduction'
                                    }])
                                    setSkillPoints(skillPoints + 50)
                                    alert(`🎉 Successfully enrolled in ${course.title}! +50 Skill Points`)
                                  } else {
                                    alert('You are already enrolled in this course!')
                                  }
                                }}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center space-x-2"
                              >
                                <PlusCircle className="h-5 w-5" />
                                <span>Enroll Now</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Learning Paths Section */}
                <div className="glass-card">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 mr-2 text-purple-500" />
                    Recommended Learning Paths
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Full Stack Developer', courses: 4, duration: '6 months', icon: Code, color: 'blue' },
                      { name: 'Data Scientist', courses: 5, duration: '8 months', icon: TrendingUp, color: 'green' },
                      { name: 'Product Manager', courses: 3, duration: '4 months', icon: Briefcase, color: 'purple' }
                    ].map((path, index) => {
                      const Icon = path.icon
                      return (
                        <div key={index} className={`bg-gradient-to-br from-${path.color}-50 to-${path.color}-100 rounded-xl p-6 border-2 border-${path.color}-200 hover:scale-105 transition-all cursor-pointer`}>
                          <Icon className={`h-10 w-10 text-${path.color}-500 mb-3`} />
                          <h3 className="font-bold text-gray-900 mb-2">{path.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">{path.courses} courses</p>
                          <p className="text-sm text-gray-600">{path.duration}</p>
                          <button className="mt-4 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center">
                            View Path <ArrowRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 'internships' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Internship Opportunities</h1>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {internships.map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} />
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'skills' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Skill Development</h1>
                <div className="glass-card">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Your Skills Progress</h2>
                  <div className="space-y-4">
                    {skillsProgress.map((skill, index) => (
                      <div key={index} className="p-3 sm:p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text-gray-900 font-medium text-sm sm:text-base">{skill.name}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm">{skill.category}</p>
                          </div>
                          <span className="text-gray-900 font-bold text-sm sm:text-base">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 'events' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Events</h1>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="glass-card">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md flex-shrink-0">
                            <Calendar className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.date} at {event.time}</p>
                            <p className="text-gray-500 text-xs sm:text-sm">{event.location} • {event.type}</p>
                          </div>
                        </div>
                        <button className="btn-primary text-sm">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'coding' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Coding Coach</h1>
                <div className="glass-card">
                  <div className="text-center py-8 sm:py-12">
                    <Code className="h-12 sm:h-16 w-12 sm:w-16 text-blue-600 mx-auto mb-6" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 px-4">Your Personal AI Coding Assistant</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                      Get personalized coding help, code reviews, and practice problems tailored to your skill level.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                      <button className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform">
                        <Lightbulb className="h-7 sm:h-8 w-7 sm:w-8 text-yellow-500 mx-auto mb-3" />
                        <h3 className="text-gray-900 font-medium text-sm sm:text-base">Get Help</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Ask coding questions</p>
                      </button>
                      <button className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform">
                        <FileText className="h-7 sm:h-8 w-7 sm:w-8 text-green-500 mx-auto mb-3" />
                        <h3 className="text-gray-900 font-medium text-sm sm:text-base">Code Review</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Improve your code</p>
                      </button>
                      <button className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform">
                        <Target className="h-7 sm:h-8 w-7 sm:w-8 text-purple-500 mx-auto mb-3" />
                        <h3 className="text-gray-900 font-medium text-sm sm:text-base">Practice</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Coding challenges</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeDashboard
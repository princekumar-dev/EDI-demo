import React, { useState } from 'react'
import { 
  Target, 
  BookOpen, 
  Video, 
  Brain, 
  Users, 
  Calendar,
  Trophy,
  Zap,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
  Play,
  FileText,
  Calculator,
  Lightbulb,
  Award,
  TrendingUp,
  Youtube,
  Sparkles,
  Send,
  Download,
  MessageCircle,
  HelpCircle,
  Upload,
  Camera
} from 'lucide-react'
import { Link } from 'react-router-dom'

const TeenDashboard = () => {
  const [currentSection, setCurrentSection] = useState('overview')
  const [completedTasks, setCompletedTasks] = useState(12)
  const [streak, setStreak] = useState(7)
  const [level, setLevel] = useState(15)
  const [textInput, setTextInput] = useState('')
  const [animationGenerated, setAnimationGenerated] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [notesGenerated, setNotesGenerated] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [homeworkQuestion, setHomeworkQuestion] = useState('')
  const [homeworkImage, setHomeworkImage] = useState(null)
  const [homeworkSolution, setHomeworkSolution] = useState(null)
  const [homeworkSubject, setHomeworkSubject] = useState('math')

  const subjects = [
    {
      id: 'math',
      name: 'Mathematics',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500',
      progress: 75,
      nextTopic: 'Quadratic Equations',
      points: 450
    },
    {
      id: 'science',
      name: 'Science',
      icon: Brain,
      color: 'from-green-500 to-teal-500',
      progress: 60,
      nextTopic: 'Chemical Reactions',
      points: 380
    },
    {
      id: 'english',
      name: 'English',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      progress: 85,
      nextTopic: 'Essay Writing',
      points: 520
    },
    {
      id: 'history',
      name: 'History',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      progress: 40,
      nextTopic: 'World War II',
      points: 290
    }
  ]

  const todaysTasks = [
    { id: 1, subject: 'Math', task: 'Complete algebra worksheet', completed: true, points: 50 },
    { id: 2, subject: 'Science', task: 'Watch chemistry video', completed: true, points: 30 },
    { id: 3, subject: 'English', task: 'Read chapter 5', completed: false, points: 40 },
    { id: 4, subject: 'History', task: 'Timeline assignment', completed: false, points: 60 }
  ]

  const achievements = [
    { icon: '🔥', title: 'Week Streak', description: '7 days in a row!', unlocked: true },
    { icon: '🎯', title: 'Perfect Score', description: 'Aced 5 quizzes', unlocked: true },
    { icon: '📚', title: 'Bookworm', description: 'Read 10 chapters', unlocked: true },
    { icon: '🏆', title: 'Top Student', description: 'Rank #1 this week', unlocked: false },
    { icon: '🤝', title: 'Team Player', description: 'Help 5 classmates', unlocked: false },
    { icon: '💡', title: 'Innovation', description: 'Creative project', unlocked: false }
  ]

  const studyPlan = [
    { time: '4:00 PM', subject: 'Math', topic: 'Algebra Practice', duration: '45 min' },
    { time: '5:00 PM', subject: 'Break', topic: 'Rest & Snack', duration: '15 min' },
    { time: '5:15 PM', subject: 'Science', topic: 'Chemistry Lab', duration: '60 min' },
    { time: '6:15 PM', subject: 'English', topic: 'Reading Time', duration: '30 min' }
  ]

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => prev + 1)
  }

  const SubjectCard = ({ subject }) => {
    const Icon = subject.icon
    return (
      <div className="glass-card group hover:scale-105 cursor-pointer">
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${subject.color} shadow-md`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Points</p>
              <p className="text-lg font-bold text-gray-900">{subject.points}</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
          <p className="text-gray-600 mb-4">Next: {subject.nextTopic}</p>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{subject.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${subject.color}`}
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
          </div>
          
          <button className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${subject.color} text-white font-medium hover:scale-105 transition-transform shadow-md`}>
            Continue Learning
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-40 shadow-md">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-110 transition-transform shadow-md">
                <Target className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-display font-bold text-gradient">EduOrbit School</span>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-yellow-50 rounded-full px-3 sm:px-4 py-2 border border-yellow-200 shadow-sm">
                <Zap className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">{streak} day streak</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-orange-50 rounded-full px-3 sm:px-4 py-2 border border-orange-200 shadow-sm">
                <Trophy className="h-4 sm:h-5 w-4 sm:w-5 text-orange-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">Level {level}</span>
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
                  { id: 'subjects', label: 'Subjects', icon: BookOpen },
                  { id: 'homework-help', label: 'Homework Help', icon: HelpCircle },
                  { id: 'text-to-video', label: 'Text to Video', icon: Sparkles },
                  { id: 'youtube-notes', label: 'YouTube Notes', icon: Youtube },
                  { id: 'schedule', label: 'Schedule', icon: Calendar },
                  { id: 'achievements', label: 'Achievements', icon: Award },
                  { id: 'study-plan', label: 'Study Plan', icon: Clock }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors relative ${
                        currentSection === item.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
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
                    Welcome back, Alex! 👋
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg">
                    You're doing great! Keep up the momentum.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="glass-card text-center">
                    <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{completedTasks}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Tasks Completed</p>
                  </div>
                  <div className="glass-card text-center">
                    <TrendingUp className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">85%</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Average Score</p>
                  </div>
                  <div className="glass-card text-center">
                    <Clock className="h-10 sm:h-12 w-10 sm:w-12 text-purple-500 mx-auto mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">4.5h</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Study Time Today</p>
                  </div>
                </div>

                {/* Today's Tasks */}
                <div className="glass-card">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Today's Tasks</h2>
                  <div className="space-y-3">
                    {todaysTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors border border-blue-100">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                              task.completed
                                ? 'bg-green-500 border-green-500'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            {task.completed && <CheckCircle className="h-4 w-4 text-white" />}
                          </button>
                          <div>
                            <p className={`font-medium text-sm sm:text-base ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {task.task}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">{task.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-gray-900 font-medium text-sm sm:text-base">{task.points}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 'subjects' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Subjects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {subjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'homework-help' && (
              <div className="space-y-6">
                <div className="glass-card">
                  <div className="flex items-center mb-6">
                    <HelpCircle className="h-8 w-8 text-green-500 mr-3" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Homework Help</h1>
                  </div>
                  <p className="text-gray-600 mb-6">Get instant help with your homework! Upload an image or type your question.</p>
                  
                  <div className="space-y-6">
                    {/* Subject Selection */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Select Subject:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'math', label: 'Math', color: 'blue', icon: Calculator },
                          { id: 'science', label: 'Science', color: 'green', icon: Brain },
                          { id: 'english', label: 'English', color: 'purple', icon: BookOpen },
                          { id: 'history', label: 'History', color: 'orange', icon: FileText }
                        ].map((subject) => {
                          const Icon = subject.icon
                          return (
                            <button
                              key={subject.id}
                              onClick={() => setHomeworkSubject(subject.id)}
                              className={`flex flex-col items-center justify-center p-4 rounded-xl border-4 transition-all hover:scale-105 ${
                                homeworkSubject === subject.id
                                  ? `bg-${subject.color}-100 border-${subject.color}-500`
                                  : 'bg-white border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <Icon className={`h-8 w-8 mb-2 ${homeworkSubject === subject.id ? `text-${subject.color}-600` : 'text-gray-400'}`} />
                              <span className="font-bold text-sm">{subject.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Input Method Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Text Input */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-4 border-blue-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <FileText className="h-6 w-6 mr-2 text-blue-500" />
                          Type Your Question
                        </h3>
                        <textarea
                          value={homeworkQuestion}
                          onChange={(e) => setHomeworkQuestion(e.target.value)}
                          placeholder="Example: Solve for x: 2x + 5 = 15"
                          className="w-full h-32 px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 resize-none text-gray-900 mb-4"
                        />
                        <button
                          onClick={() => {
                            if (homeworkQuestion.trim()) {
                              setHomeworkSolution({
                                type: 'text',
                                question: homeworkQuestion,
                                steps: [
                                  'Step 1: Subtract 5 from both sides: 2x = 10',
                                  'Step 2: Divide both sides by 2: x = 5',
                                  'Step 3: Verify by substituting back: 2(5) + 5 = 15 ✓'
                                ],
                                answer: 'x = 5',
                                explanation: 'This is a linear equation. We isolate x by performing inverse operations on both sides.'
                              })
                            } else {
                              alert('Please enter a question first!')
                            }
                          }}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center"
                        >
                          <Brain className="h-5 w-5 mr-2" />
                          Get Solution
                        </button>
                      </div>

                      {/* Image Upload */}
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-4 border-green-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                          <Camera className="h-6 w-6 mr-2 text-green-500" />
                          Upload Photo
                        </h3>
                        <div className="border-4 border-dashed border-green-300 rounded-xl p-8 text-center mb-4 hover:border-green-500 transition-colors cursor-pointer bg-white">
                          <Upload className="h-12 w-12 text-green-400 mx-auto mb-3" />
                          <p className="text-gray-600 mb-2">Click or drag image here</p>
                          <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setHomeworkImage(URL.createObjectURL(e.target.files[0]))
                              }
                            }}
                            className="hidden"
                            id="homework-upload"
                          />
                        </div>
                        <label htmlFor="homework-upload">
                          <button
                            onClick={() => document.getElementById('homework-upload').click()}
                            type="button"
                            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center"
                          >
                            <Camera className="h-5 w-5 mr-2" />
                            Take/Upload Photo
                          </button>
                        </label>
                      </div>
                    </div>

                    {/* Display uploaded image */}
                    {homeworkImage && (
                      <div className="glass-card">
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Uploaded Image:</h3>
                        <img src={homeworkImage} alt="Homework" className="max-w-full h-auto rounded-xl border-4 border-gray-200 mb-4" />
                        <button
                          onClick={() => {
                            setHomeworkSolution({
                              type: 'image',
                              question: 'Question from uploaded image',
                              steps: [
                                'Step 1: Identify the problem type and given information',
                                'Step 2: Apply the relevant formula or concept',
                                'Step 3: Perform calculations step by step',
                                'Step 4: Verify the answer makes sense'
                              ],
                              answer: 'Answer will be extracted from the image',
                              explanation: 'Our AI is analyzing your homework image and will provide a detailed solution.'
                            })
                          }}
                          className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center"
                        >
                          <Brain className="h-6 w-6 mr-2" />
                          Analyze & Solve
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Solution Display */}
                {homeworkSolution && (
                  <div className="glass-card animate-scale-in">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Lightbulb className="h-7 w-7 mr-3 text-yellow-500" />
                      Step-by-Step Solution
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Question */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                        <h3 className="font-bold text-gray-900 mb-2">Question:</h3>
                        <p className="text-gray-700 text-lg">{homeworkSolution.question}</p>
                      </div>

                      {/* Steps */}
                      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-4 text-xl">Solution Steps:</h3>
                        <div className="space-y-4">
                          {homeworkSolution.steps.map((step, index) => (
                            <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-2 border-green-200">
                              <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <p className="text-gray-700 flex-1 pt-1">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final Answer */}
                      <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-xl p-6 text-white">
                        <h3 className="font-bold text-2xl mb-2">Final Answer:</h3>
                        <p className="text-3xl font-bold">{homeworkSolution.answer}</p>
                      </div>

                      {/* Explanation */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                        <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Brain className="h-6 w-6 mr-2 text-purple-500" />
                          Concept Explanation:
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{homeworkSolution.explanation}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center">
                          <Download className="h-5 w-5 mr-2" />
                          Save Solution
                        </button>
                        <button
                          onClick={() => {
                            setHomeworkSolution(null)
                            setHomeworkQuestion('')
                            setHomeworkImage(null)
                          }}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center"
                        >
                          <RotateCcw className="h-5 w-5 mr-2" />
                          New Question
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentSection === 'text-to-video' && (
              <div className="space-y-6">
                <div className="glass-card">
                  <div className="flex items-center mb-6">
                    <Sparkles className="h-8 w-8 text-purple-500 mr-3" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Text to Animation Video</h1>
                  </div>
                  <p className="text-gray-600 mb-6">Transform your text or story into an animated video!</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Enter your text or story:</label>
                      <textarea
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder="Type your story, explanation, or any text you want to animate..."
                        className="w-full h-48 px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none text-gray-900"
                      />
                    </div>
                    
                    <button
                      onClick={() => {
                        if (textInput.trim()) {
                          setAnimationGenerated(true)
                          setTimeout(() => {
                            alert('🎬 Your animation video is being generated! This usually takes 2-3 minutes.')
                          }, 500)
                        } else {
                          alert('Please enter some text first!')
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center w-full sm:w-auto"
                    >
                      <Sparkles className="h-6 w-6 mr-2" />
                      Generate Animation Video
                    </button>
                  </div>
                </div>

                {animationGenerated && textInput && (
                  <div className="glass-card animate-scale-in">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Video className="h-6 w-6 mr-2 text-green-500" />
                      Generated Animation Preview
                    </h2>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-4 border-purple-200 text-center">
                      <div className="animate-pulse mb-4">
                        <Video className="h-24 w-24 text-purple-500 mx-auto" />
                      </div>
                      <p className="text-gray-700 font-medium mb-4">Your animation is being created...</p>
                      <div className="bg-gray-200 rounded-full h-3 w-full max-w-md mx-auto mb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                      </div>
                      <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center mx-auto">
                        <Download className="h-5 w-5 mr-2" />
                        Download Video (Coming Soon)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentSection === 'youtube-notes' && (
              <div className="space-y-6">
                <div className="glass-card">
                  <div className="flex items-center mb-6">
                    <Youtube className="h-8 w-8 text-red-500 mr-3" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">YouTube to Notes Converter</h1>
                  </div>
                  <p className="text-gray-600 mb-6">Convert any YouTube video into comprehensive notes, quiz, and more!</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">YouTube Video URL:</label>
                      <input
                        type="text"
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900"
                      />
                    </div>
                    
                    <button
                      onClick={() => {
                        if (youtubeUrl.trim() && youtubeUrl.includes('youtube.com')) {
                          setNotesGenerated(true)
                          setQuizQuestions([
                            { question: 'What is the main topic of this video?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 0 },
                            { question: 'Which concept was explained first?', options: ['Concept 1', 'Concept 2', 'Concept 3', 'Concept 4'], correct: 1 },
                            { question: 'What was the key takeaway?', options: ['Takeaway A', 'Takeaway B', 'Takeaway C', 'Takeaway D'], correct: 2 }
                          ])
                          setChatMessages([{ type: 'bot', text: 'Hi! I\'ve analyzed the video. Ask me anything about it!' }])
                        } else {
                          alert('Please enter a valid YouTube URL!')
                        }
                      }}
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center w-full sm:w-auto"
                    >
                      <Youtube className="h-6 w-6 mr-2" />
                      Generate Notes & Quiz
                    </button>
                  </div>
                </div>

                {notesGenerated && youtubeUrl && (
                  <div className="space-y-6 animate-scale-in">
                    {/* Brief Notes Section */}
                    <div className="glass-card">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-6 w-6 mr-2 text-blue-500" />
                        Brief Notes
                      </h2>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Key Points:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Main concept explained in the introduction</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Important formulas and their applications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Real-world examples and use cases</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Summary and key takeaways</span>
                          </li>
                        </ul>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center">
                          <Download className="h-5 w-5 mr-2" />
                          Download Notes PDF
                        </button>
                      </div>
                    </div>

                    {/* Quiz Section */}
                    <div className="glass-card">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Brain className="h-6 w-6 mr-2 text-purple-500" />
                        Interactive Quiz
                      </h2>
                      <div className="space-y-4">
                        {quizQuestions.map((q, index) => (
                          <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                            <p className="font-bold text-gray-900 mb-4">Q{index + 1}. {q.question}</p>
                            <div className="space-y-2">
                              {q.options.map((option, optIndex) => (
                                <button
                                  key={optIndex}
                                  onClick={() => {
                                    if (optIndex === q.correct) {
                                      setQuizScore(quizScore + 1)
                                      alert('✅ Correct! Great job!')
                                    } else {
                                      alert('❌ Not quite. Try reviewing the notes!')
                                    }
                                  }}
                                  className="w-full text-left px-4 py-3 rounded-lg border-2 border-purple-200 hover:bg-purple-100 hover:border-purple-400 transition-all"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 text-center">
                          <p className="text-lg font-bold text-gray-900">Your Score: {quizScore} / {quizQuestions.length}</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Section */}
                    <div className="glass-card">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MessageCircle className="h-6 w-6 mr-2 text-green-500" />
                        Ask Questions
                      </h2>
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border-2 border-green-200">
                        <div className="h-64 overflow-y-auto mb-4 space-y-3">
                          {chatMessages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-xs sm:max-w-md px-4 py-3 rounded-2xl ${
                                msg.type === 'user' 
                                  ? 'bg-blue-500 text-white' 
                                  : 'bg-white text-gray-900 border-2 border-gray-200'
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' && chatInput.trim()) {
                                setChatMessages([...chatMessages, 
                                  { type: 'user', text: chatInput },
                                  { type: 'bot', text: 'Based on the video, here\'s what I found: ' + chatInput.split(' ').reverse().join(' ') }
                                ])
                                setChatInput('')
                              }
                            }}
                            placeholder="Ask anything about the video..."
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                          />
                          <button
                            onClick={() => {
                              if (chatInput.trim()) {
                                setChatMessages([...chatMessages, 
                                  { type: 'user', text: chatInput },
                                  { type: 'bot', text: 'Great question! Based on the video content, the answer involves understanding the key concepts discussed around timestamp 2:45.' }
                                ])
                                setChatInput('')
                              }
                            }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                          >
                            <Send className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentSection === 'achievements' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Achievements</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`glass-card text-center ${
                        achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'opacity-50 grayscale'
                      }`}
                    >
                      <div className="text-3xl sm:text-4xl mb-3">{achievement.icon}</div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                      {achievement.unlocked && (
                        <div className="mt-3 inline-flex items-center space-x-1 text-yellow-600">
                          <Trophy className="h-4 w-4" />
                          <span className="text-sm font-medium">Unlocked!</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'schedule' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Schedule</h1>
                <div className="glass-card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">Weekly Overview</h2>
                    <button className="btn-secondary text-sm">Add Event</button>
                  </div>
                  <div className="space-y-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                      <div key={index} className="p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                        <h3 className="font-bold text-gray-900 mb-2">{day}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">9:00 AM - Math Class</span>
                            <span className="text-blue-600 text-xs">Online</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">2:00 PM - Science Lab</span>
                            <span className="text-green-600 text-xs">Campus</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 'study-plan' && (
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Today's Study Plan</h1>
                <div className="glass-card">
                  <div className="space-y-4">
                    {studyPlan.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                        <div className="text-center flex-shrink-0">
                          <p className="text-gray-900 font-medium text-sm sm:text-base">{item.time}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{item.duration}</p>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-gray-900 font-medium text-sm sm:text-base">{item.subject}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm truncate">{item.topic}</p>
                        </div>
                        <button className="btn-primary p-2 sm:p-3 flex-shrink-0">
                          <Play className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
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

export default TeenDashboard
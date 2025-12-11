import React, { useState, useRef, useEffect } from 'react'
import { 
  Star, 
  Heart, 
  Sparkles, 
  BookOpen, 
  Palette, 
  Music, 
  Gamepad2,
  Trophy,
  Gift,
  Volume2,
  Camera,
  Mic,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'
import { Link } from 'react-router-dom'

const KidsDashboard = () => {
  const [currentActivity, setCurrentActivity] = useState(null)
  const [stars, setStars] = useState(45)
  const [level, setLevel] = useState(3)
  const [isPlaying, setIsPlaying] = useState(false)
  const [clickedActivity, setClickedActivity] = useState(null)
  const [selectedTool, setSelectedTool] = useState('🖍️ Crayon')
  const [selectedColor, setSelectedColor] = useState('#FF6B6B')
  const [playingSong, setPlayingSong] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [completedActivities, setCompletedActivities] = useState([])
  const [storyProgress, setStoryProgress] = useState(0)
  const [musicProgress, setMusicProgress] = useState(0)
  const [drawingProgress, setDrawingProgress] = useState(0)
  const [isDrawing, setIsDrawing] = useState(false)
  const [canvasContext, setCanvasContext] = useState(null)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [gameScore, setGameScore] = useState(0)
  
  const storyIntervalRef = useRef(null)
  const musicIntervalRef = useRef(null)
  const voiceIntervalRef = useRef(null)
  
  const clearAllIntervals = () => {
    if (storyIntervalRef.current) clearInterval(storyIntervalRef.current)
    if (musicIntervalRef.current) clearInterval(musicIntervalRef.current)
    if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current)
  }
  
  const resetActivityStates = () => {
    setIsPlaying(false)
    setPlayingSong(null)
    setIsRecording(false)
    setStoryProgress(0)
    setMusicProgress(0)
    setRecordingDuration(0)
    setSelectedGame(null)
    setIsDrawing(false)
    clearAllIntervals()
  }

  const activities = [
    {
      id: 'stories',
      title: 'Story Time',
      icon: BookOpen,
      color: 'from-pink-400 to-rose-500',
      description: 'Listen to magical stories!',
      content: {
        type: 'story',
        title: 'The Magic Rainbow',
        text: 'Once upon a time, in a land far away, there lived a little rainbow who lost all its colors...',
        image: '🌈'
      }
    },
    {
      id: 'drawing',
      title: 'Art Studio',
      icon: Palette,
      color: 'from-purple-400 to-pink-500',
      description: 'Draw and create amazing art!',
      content: {
        type: 'drawing',
        tools: ['🖍️ Crayon', '🖌️ Brush', '✏️ Pencil', '🌈 Colors']
      }
    },
    {
      id: 'music',
      title: 'Music Box',
      icon: Music,
      color: 'from-blue-400 to-purple-500',
      description: 'Learn with fun songs!',
      content: {
        type: 'music',
        songs: ['🎵 ABC Song', '🎶 Number Dance', '🎼 Color Song', '🎤 Animal Sounds']
      }
    },
    {
      id: 'games',
      title: 'Fun Games',
      icon: Gamepad2,
      color: 'from-green-400 to-blue-500',
      description: 'Play and learn together!',
      content: {
        type: 'games',
        games: ['🔤 Letter Match', '🔢 Number Hunt', '🐾 Animal Quiz', '🌟 Shape Puzzle']
      }
    },
    {
      id: 'voice',
      title: 'Talk & Learn',
      icon: Mic,
      color: 'from-yellow-400 to-orange-500',
      description: 'Speak and I will listen!',
      content: {
        type: 'voice',
        prompts: ['Say the alphabet!', 'Count to 10!', 'Name 3 animals!', 'What color is the sky?']
      }
    },
    {
      id: 'camera',
      title: 'Photo Fun',
      icon: Camera,
      color: 'from-cyan-400 to-blue-500',
      description: 'Take pictures and learn!',
      content: {
        type: 'camera',
        activities: ['📸 Find shapes', '🔍 Color hunt', '📱 Number search', '🌸 Nature walk']
      }
    }
  ]

  const achievements = [
    { icon: '🌟', title: 'First Story', unlocked: true },
    { icon: '🎨', title: 'Artist', unlocked: true },
    { icon: '🎵', title: 'Music Lover', unlocked: true },
    { icon: '🏆', title: 'Game Master', unlocked: false },
    { icon: '🗣️', title: 'Great Speaker', unlocked: false },
    { icon: '📸', title: 'Photographer', unlocked: false }
  ]

  const ActivityModal = ({ activity, onClose }) => {
    if (!activity) return null

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 animate-scale-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
              <activity.icon className="h-8 sm:h-10 w-8 sm:w-10 mr-3 text-yellow-500" />
              {activity.title}
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation()
                resetActivityStates()
                onClose()
              }}
              className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-all hover:scale-110 border-2 border-red-600 shadow-lg"
            >
              <ArrowLeft className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
            </button>
          </div>

          <div className="space-y-6">
            {activity.content.type === 'story' && (
              <div className="text-center">
                <div className={`text-7xl sm:text-8xl mb-6 ${isPlaying ? 'animate-pulse' : ''}`}>{activity.content.image}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-6">{activity.content.title}</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl border-4 border-blue-200 shadow-inner relative overflow-hidden">
                  {isPlaying && (
                    <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000" style={{ width: `${storyProgress}%` }}></div>
                  )}
                  <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-medium">{activity.content.text}</p>
                  {isPlaying && (
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <div className="h-3 w-1 bg-green-500 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-4 w-1 bg-blue-500 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-5 w-1 bg-purple-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                      <div className="h-4 w-1 bg-pink-500 animate-pulse" style={{ animationDelay: '450ms' }}></div>
                      <div className="h-3 w-1 bg-red-500 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                      <span className="ml-3 text-sm font-bold text-gray-600">{storyProgress}%</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-center space-x-3 sm:space-x-4 mt-8">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!isPlaying) {
                        setIsPlaying(true)
                        setStoryProgress(0)
                        if (storyIntervalRef.current) clearInterval(storyIntervalRef.current)
                        storyIntervalRef.current = setInterval(() => {
                          setStoryProgress(prev => {
                            if (prev >= 100) {
                              clearInterval(storyIntervalRef.current)
                              return 100
                            }
                            return prev + 2
                          })
                        }, 300)
                      } else {
                        setIsPlaying(false)
                        if (storyIntervalRef.current) clearInterval(storyIntervalRef.current)
                        if (storyProgress > 0) {
                          const points = Math.floor((storyProgress / 100) * 20)
                          setStars(s => s + points)
                          if (storyProgress === 100) {
                            alert(`🎉 Amazing! You listened to the full story! +${points} stars!`)
                            if (!completedActivities.includes('stories')) {
                              setCompletedActivities([...completedActivities, 'stories'])
                            }
                          } else {
                            alert(`Good try! You listened to ${storyProgress}% of the story. +${points} stars!`)
                          }
                        }
                      }
                    }}
                    className={`text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:scale-110 transition-all shadow-lg border-2 flex items-center space-x-2 ${
                      isPlaying ? 'bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-600' : 'bg-gradient-to-r from-green-400 to-green-500 border-green-600'
                    }`}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    <span>{isPlaying ? '⏸️ Pause' : '▶️ Listen'}</span>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsPlaying(false)
                      setStoryProgress(0)
                      if (storyIntervalRef.current) clearInterval(storyIntervalRef.current)
                    }}
                    className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl hover:scale-110 transition-all shadow-lg border-2 border-blue-600 flex items-center space-x-2"
                  >
                    <RotateCcw className="h-6 w-6" />
                    <span>🔄 Restart</span>
                  </button>
                </div>
              </div>
            )}

            {activity.content.type === 'drawing' && (
              <div>
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">🖍️ Choose Your Tool:</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                    {activity.content.tools.map((tool, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedTool(tool)}
                        className={`rounded-xl text-center px-4 py-3 hover:scale-110 transition-all shadow-lg ${
                          selectedTool === tool
                            ? 'bg-gradient-to-br from-purple-400 to-pink-400 border-4 border-purple-600 text-white scale-105' 
                            : 'bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-300'
                        }`}
                      >
                        <div className="text-2xl font-bold">{tool}</div>
                      </button>
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">🌈 Choose Color:</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-4 hover:scale-110 transition-all ${
                          selectedColor === color ? 'border-gray-900 scale-110' : 'border-white'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <canvas
                    ref={(canvas) => {
                      if (canvas && !canvasContext) {
                        const ctx = canvas.getContext('2d')
                        canvas.width = canvas.offsetWidth
                        canvas.height = 400
                        
                        // Draw coloring page outline
                        ctx.strokeStyle = '#333'
                        ctx.lineWidth = 3
                        
                        // Draw a simple sun
                        ctx.beginPath()
                        ctx.arc(100, 100, 40, 0, Math.PI * 2)
                        ctx.stroke()
                        
                        // Sun rays
                        for(let i = 0; i < 8; i++) {
                          const angle = (Math.PI * 2 * i) / 8
                          ctx.beginPath()
                          ctx.moveTo(100 + Math.cos(angle) * 50, 100 + Math.sin(angle) * 50)
                          ctx.lineTo(100 + Math.cos(angle) * 70, 100 + Math.sin(angle) * 70)
                          ctx.stroke()
                        }
                        
                        // Draw a flower
                        ctx.beginPath()
                        ctx.arc(300, 150, 30, 0, Math.PI * 2)
                        ctx.stroke()
                        for(let i = 0; i < 6; i++) {
                          const angle = (Math.PI * 2 * i) / 6
                          ctx.beginPath()
                          ctx.arc(300 + Math.cos(angle) * 40, 150 + Math.sin(angle) * 40, 15, 0, Math.PI * 2)
                          ctx.stroke()
                        }
                        
                        // Draw a house
                        ctx.strokeRect(200, 250, 100, 80)
                        ctx.beginPath()
                        ctx.moveTo(190, 250)
                        ctx.lineTo(250, 210)
                        ctx.lineTo(310, 250)
                        ctx.stroke()
                        ctx.strokeRect(230, 280, 40, 50)
                        
                        setCanvasContext(ctx)
                      }
                    }}
                    onMouseDown={(e) => setIsDrawing(true)}
                    onMouseUp={() => {
                      setIsDrawing(false)
                      const progress = Math.min(drawingProgress + 10, 100)
                      setDrawingProgress(progress)
                    }}
                    onMouseMove={(e) => {
                      if (isDrawing && canvasContext) {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const x = e.clientX - rect.left
                        const y = e.clientY - rect.top
                        
                        canvasContext.fillStyle = selectedColor
                        canvasContext.beginPath()
                        canvasContext.arc(x, y, selectedTool.includes('Crayon') ? 8 : selectedTool.includes('Brush') ? 12 : 4, 0, Math.PI * 2)
                        canvasContext.fill()
                      }
                    }}
                    onTouchStart={() => setIsDrawing(true)}
                    onTouchEnd={() => {
                      setIsDrawing(false)
                      const progress = Math.min(drawingProgress + 10, 100)
                      setDrawingProgress(progress)
                    }}
                    onTouchMove={(e) => {
                      if (isDrawing && canvasContext) {
                        const rect = e.currentTarget.getBoundingClientRect()
                        const touch = e.touches[0]
                        const x = touch.clientX - rect.left
                        const y = touch.clientY - rect.top
                        
                        canvasContext.fillStyle = selectedColor
                        canvasContext.beginPath()
                        canvasContext.arc(x, y, selectedTool.includes('Crayon') ? 8 : selectedTool.includes('Brush') ? 12 : 4, 0, Math.PI * 2)
                        canvasContext.fill()
                      }
                    }}
                    className="w-full h-96 bg-white rounded-2xl border-4 border-purple-300 shadow-inner cursor-crosshair"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-bold text-gray-700">Coloring Progress:</span>
                        <span className="font-bold text-purple-600">{drawingProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all" style={{ width: `${drawingProgress}%` }}></div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const points = Math.floor((drawingProgress / 100) * 25)
                        if (points > 0) {
                          setStars(s => s + points)
                          alert(`🎨 Great artwork! You colored ${drawingProgress}% of the page. +${points} stars!`)
                          if (drawingProgress >= 80 && !completedActivities.includes('drawing')) {
                            setCompletedActivities([...completedActivities, 'drawing'])
                          }
                        }
                        setDrawingProgress(0)
                        if (canvasContext) {
                          canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height)
                          setCanvasContext(null)
                        }
                      }}
                      className="ml-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-110 transition-all shadow-lg border-2 border-green-600"
                    >
                      ✅ Done!
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activity.content.type === 'music' && (
              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                {activity.content.songs.map((song, index) => (
                  <div key={index} className="relative">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        if (playingSong === index) {
                          setPlayingSong(null)
                          if (musicIntervalRef.current) clearInterval(musicIntervalRef.current)
                          if (musicProgress > 0) {
                            const points = Math.floor((musicProgress / 100) * 15)
                            setStars(s => s + points)
                            if (musicProgress === 100) {
                              alert(`🎉 You listened to the full song! +${points} stars!`)
                              if (!completedActivities.includes('music')) {
                                setCompletedActivities([...completedActivities, 'music'])
                              }
                            } else {
                              alert(`🎵 You listened to ${musicProgress}% of the song. +${points} stars!`)
                            }
                          }
                          setMusicProgress(0)
                        } else {
                          if (musicIntervalRef.current) clearInterval(musicIntervalRef.current)
                          setPlayingSong(index)
                          setMusicProgress(0)
                          musicIntervalRef.current = setInterval(() => {
                            setMusicProgress(prev => {
                              if (prev >= 100) {
                                clearInterval(musicIntervalRef.current)
                                return 100
                              }
                              return prev + 3
                            })
                          }, 200)
                        }
                      }}
                      className={`w-full rounded-2xl p-5 sm:p-6 text-left hover:scale-105 hover:-rotate-1 flex items-center justify-between transition-all shadow-lg hover:shadow-xl ${
                        playingSong === index
                          ? 'bg-gradient-to-r from-blue-400 to-purple-400 border-4 border-blue-600 scale-105'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 border-4 border-blue-300'
                      }`}
                    >
                      <div className="flex-1">
                        <span className={`text-xl sm:text-2xl font-bold block ${playingSong === index ? 'text-white' : 'text-gray-900'}`}>{song}</span>
                        {playingSong === index && (
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="flex-1 bg-white/30 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${musicProgress}%` }}></div>
                            </div>
                            <span className="text-white text-sm font-bold">{musicProgress}%</span>
                          </div>
                        )}
                      </div>
                      {playingSong === index ? (
                        <Pause className="h-8 sm:h-10 w-8 sm:w-10 text-white ml-4" />
                      ) : (
                        <Play className="h-8 sm:h-10 w-8 sm:w-10 text-blue-600 ml-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activity.content.type === 'games' && (
              <div className="space-y-6">
                <div className="bg-purple-50 border-4 border-purple-300 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">Game Score: {gameScore}</h4>
                    <button
                      onClick={() => setGameScore(0)}
                      className="bg-red-400 text-white px-4 py-2 rounded-xl font-bold hover:scale-110 transition-all"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {activity.content.games.map((game, index) => (
                    <button 
                      key={index} 
                      onClick={() => {
                        setSelectedGame(index)
                        const points = Math.floor(Math.random() * 10) + 10
                        setGameScore(gameScore + points)
                        setStars(s => s + points)
                        setTimeout(() => {
                          alert(`🎮 ${game.split(' ').slice(1).join(' ')} completed! +${points} stars!`)
                          setSelectedGame(null)
                        }, 1500)
                        if (!completedActivities.includes('games')) {
                          setCompletedActivities([...completedActivities, 'games'])
                        }
                      }}
                      className={`rounded-2xl p-6 sm:p-8 text-center hover:scale-110 hover:rotate-2 transition-all shadow-lg hover:shadow-xl ${
                        selectedGame === index
                          ? 'bg-gradient-to-br from-green-400 to-blue-400 border-4 border-green-600 scale-110 animate-pulse'
                          : 'bg-gradient-to-br from-green-100 to-blue-100 border-4 border-green-300'
                      }`}
                    >
                      <div className="text-4xl sm:text-5xl mb-3">{game.split(' ')[0]}</div>
                      <div className={`font-bold text-base sm:text-lg ${selectedGame === index ? 'text-white' : 'text-gray-900'}`}>
                        {selectedGame === index ? '🎉 Playing!' : game.split(' ').slice(1).join(' ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity.content.type === 'voice' && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 sm:p-10 rounded-2xl mb-8 border-4 border-yellow-300 shadow-lg">
                  <Mic className="h-20 sm:h-24 w-20 sm:w-24 text-orange-500 mx-auto mb-6 animate-pulse" />
                  <p className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6">🎤 Press and speak!</p>
                  <div className="space-y-3">
                    {activity.content.prompts.map((prompt, index) => (
                      <p key={index} className="text-gray-700 text-lg sm:text-xl font-medium bg-white/50 rounded-xl py-2 px-4">{prompt}</p>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!isRecording) {
                      setIsRecording(true)
                      setRecordingDuration(0)
                      if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current)
                      voiceIntervalRef.current = setInterval(() => {
                        setRecordingDuration(prev => prev + 1)
                      }, 1000)
                    } else {
                      setIsRecording(false)
                      if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current)
                      if (recordingDuration > 0) {
                        const points = Math.floor((recordingDuration / 10) * 20)
                        setStars(s => s + points)
                        if (recordingDuration >= 10) {
                          alert(`🎤 Excellent! You spoke for ${recordingDuration} seconds! +${points} stars!`)
                          if (!completedActivities.includes('voice')) {
                            setCompletedActivities([...completedActivities, 'voice'])
                          }
                        } else {
                          alert(`Good job! You spoke for ${recordingDuration} seconds. +${points} stars!`)
                        }
                      }
                      setRecordingDuration(0)
                    }
                  }}
                  className={`text-white text-xl sm:text-2xl py-5 sm:py-6 px-8 sm:px-12 rounded-2xl font-bold hover:scale-110 transition-all shadow-xl border-4 flex flex-col items-center justify-center mx-auto ${
                    isRecording
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 border-red-700 animate-pulse'
                      : 'bg-gradient-to-r from-orange-400 to-red-500 border-orange-600'
                  }`}
                >
                  <div className="flex items-center">
                    <Volume2 className="h-7 sm:h-8 w-7 sm:w-8 mr-3" />
                    {isRecording ? '🎙️ Listening...' : 'Start Speaking'}
                  </div>
                  {isRecording && (
                    <div className="mt-3 text-base">{recordingDuration}s / 10s</div>
                  )}
                </button>
              </div>
            )}

            {activity.content.type === 'camera' && (
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {activity.content.activities.map((cameraActivity, index) => (
                  <button 
                    key={index} 
                    onClick={() => {
                      setStars(stars + 7)
                      if (!completedActivities.includes('camera')) {
                        setCompletedActivities([...completedActivities, 'camera'])
                      }
                    }}
                    className="bg-gradient-to-br from-cyan-100 to-blue-100 border-4 border-cyan-300 rounded-2xl p-6 sm:p-8 text-center hover:scale-110 hover:-rotate-2 hover:from-cyan-400 hover:to-blue-400 hover:border-cyan-600 transition-all shadow-lg hover:shadow-xl group"
                  >
                    <div className="text-4xl sm:text-5xl mb-3">{cameraActivity.split(' ')[0]}</div>
                    <div className="text-gray-900 group-hover:text-white font-bold text-base sm:text-lg">{cameraActivity.split(' ').slice(1).join(' ')}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-40 shadow-md">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-110 transition-transform shadow-md">
                <Sparkles className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-display font-bold text-gradient">EduOrbit Kids</span>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-yellow-50 rounded-full px-3 sm:px-4 py-2 border border-yellow-200 shadow-sm">
                <Star className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">{stars}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-orange-50 rounded-full px-3 sm:px-4 py-2 border border-orange-200 shadow-sm">
                <Trophy className="h-4 sm:h-5 w-4 sm:w-5 text-orange-500" />
                <span className="font-bold text-gray-900 text-sm sm:text-base">Level {level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Hello, Little Star!</span> ⭐
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-purple-600 font-bold">
              What would you like to learn today?
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-8 sm:mb-12">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <button
                  key={activity.id}
                  onClick={() => {
                    setCurrentActivity(activity)
                  }}
                  className="bg-white border-4 border-blue-200 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform transition-all duration-300 text-left relative overflow-hidden hover:scale-105 hover:-rotate-1"
                >
                  <div className="relative">
                    <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${activity.color} w-fit mb-5 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg`}>
                      <Icon className="h-10 sm:h-12 w-10 sm:w-12 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 text-base sm:text-lg font-medium">{activity.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Achievements Section */}
          <div className="bg-white border-4 border-purple-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Trophy className="h-8 sm:h-10 w-8 sm:w-10 mr-4 text-yellow-500 animate-pulse" />
              🏆 My Achievements
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center p-4 sm:p-5 rounded-2xl transition-all hover:scale-110 cursor-pointer ${
                    achievement.unlocked
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg border-4 border-yellow-600 animate-pulse'
                      : 'bg-gray-100 text-gray-400 border-4 border-gray-300'
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-2">{achievement.icon}</div>
                  <p className="text-xs sm:text-sm font-bold">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Modal */}
      <ActivityModal 
        activity={currentActivity} 
        onClose={() => setCurrentActivity(null)} 
      />

      {/* Floating Elements */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-30">
        <button 
          onClick={() => {
            setStars(stars + 20)
            alert('🎁 Surprise! You got 20 bonus stars! ⭐')
          }}
          className="p-5 sm:p-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-2xl hover:scale-125 hover:rotate-12 transition-all border-4 border-white relative"
        >
          <Gift className="h-8 sm:h-10 w-8 sm:w-10" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white">!</span>
        </button>
      </div>
    </div>
  )
}

export default KidsDashboard
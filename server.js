import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(compression())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://eduorbit.com', 'https://www.eduorbit.com']
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'EduOrbit API'
  })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, queryType, message } = req.body
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, queryType, message })
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again.' 
    })
  }
})

// Newsletter signup endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body
    
    // Here you would typically save to database or integrate with email service
    console.log('Newsletter signup:', email)
    
    res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error with your subscription. Please try again.' 
    })
  }
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'))
  })
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  })
})

// Default 404 handler for unmatched routes
app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    res.status(404).json({ 
      success: false, 
      message: 'API endpoint not found' 
    })
  } else {
    res.status(404).send('Page not found')
  }
})

app.listen(PORT, () => {
  console.log(`🚀 EduOrbit server running on port ${PORT}`)
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`)
})
# EduOrbit - One EdTech App for Every Age

EduOrbit is a revolutionary AI-powered adaptive learning platform designed for learners of all ages - from kids (3-10) to teens (11-17) to college students (18+). The platform automatically adjusts its interface, teaching style, learning content, and difficulty based on the learner's age, skill level, and learning preferences.

## 🌟 Key Features

### Age-Adaptive Learning
- **Kids Mode (3-10)**: Cartoon interface, story-based lessons, AR learning, voice interactions
- **Teen Mode (11-17)**: Gamified quizzes, concept videos, homework solver, study planner
- **College Mode (18+)**: Skill-based courses, internship connect, AI coding coach, interview simulator

### AI-Powered Personalization
- Learning style detection (Visual, Auditory, Kinesthetic, Reading/Writing)
- Adaptive content delivery
- Real-time difficulty adjustment
- Personalized learning paths

### Comprehensive Dashboard
- Parental controls and monitoring
- Progress tracking and analytics
- Screen time management
- Safety features for young learners

### Real-World Learning
- DIY experiments and STEM challenges
- Coding education for all ages
- Career mentoring and guidance
- Internship and job connections

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/eduorbit.git
cd eduorbit
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev:full
```

This will start both the frontend (port 3000) and backend (port 3001) servers.

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
eduorbit/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── server.js          # Express backend server
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#a855f7 to #9333ea)
- **Accent**: Cyan gradient (#06b6d4 to #0891b2)

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Components
- **Glass Cards**: Glassmorphism design with backdrop blur
- **Gradient Buttons**: Smooth hover animations
- **Responsive Grid**: Mobile-first design approach

## 🌐 Pages

1. **Home** - Hero section, features overview, age modes
2. **Features** - Detailed feature explanations
3. **Prototype** - Interactive demo showcase
4. **About** - Mission, vision, team information
5. **Contact** - Contact form and information

## 🔧 Technology Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **Compression** - Response compression

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Responsive Design

EduOrbit is fully responsive and works seamlessly across:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎯 Target Audience

### Kids (3-10 years)
- Interactive storytelling
- Voice-based learning
- AR/VR experiences
- Reward systems

### Teens (11-17 years)
- Gamified learning
- Social features
- Homework assistance
- Career exploration

### College Students (18+ years)
- Skill development
- Career preparation
- Internship connections
- Professional networking

## 🔒 Safety & Privacy

- Age-appropriate content filtering
- Parental controls and monitoring
- Data privacy compliance
- Secure user authentication
- Safe communication features

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Set the following in production:
- `NODE_ENV=production`
- `PORT=3001` (or your preferred port)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- **Email**: hello@eduorbit.com
- **Phone**: +1 (555) 123-4567
- **Website**: https://eduorbit.com

## 🎉 Acknowledgments

- Thanks to all educators and learners who inspired this project
- Special thanks to the open-source community for the amazing tools
- Gratitude to our beta testers and early adopters

---

**EduOrbit** - Transforming education through adaptive AI learning. One app for every age, every learner, every dream.
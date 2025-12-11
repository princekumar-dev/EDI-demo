# EduOrbit Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run dev:full
   ```
   - Frontend: http://localhost:3002
   - Backend: http://localhost:3001

3. **Production Build**
   ```bash
   npm run build
   npm run server
   ```

## Environment Setup

Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

## Available Scripts

- `npm run dev` - Frontend only (Vite dev server)
- `npm run server` - Backend only (Express server)
- `npm run dev:full` - Both frontend and backend
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Production Deployment

### Option 1: Render.com
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set start command: `npm run server`
4. Add environment variables

### Option 2: Vercel (Frontend) + Railway (Backend)
1. Deploy frontend to Vercel
2. Deploy backend to Railway
3. Update API proxy in vite.config.js

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "server"]
```

## Environment Variables

### Required
- `NODE_ENV` - production/development
- `PORT` - Server port (default: 3001)

### Optional (for future features)
- `MONGODB_URI` - Database connection
- `JWT_SECRET` - Authentication secret
- `SMTP_*` - Email configuration
- `OPENAI_API_KEY` - AI features

## Performance Optimization

The build includes:
- ✅ Brotli compression
- ✅ Gzip compression
- ✅ Code splitting
- ✅ Asset optimization
- ✅ CSS minification
- ✅ Tree shaking

## Monitoring

Health check endpoint: `GET /api/health`

Response:
```json
{
  "status": "OK",
  "timestamp": "2025-12-11T19:30:00.000Z",
  "service": "EduOrbit API"
}
```
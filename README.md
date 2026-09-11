# HIG Copilot

A Progressive Web App (PWA) built with Next.js that feels like a native mobile app.

## Features

- 📱 **Mobile-First Design** - Full-screen, installable PWA
- 💨 **Fast Performance** - Next.js with optimized caching strategies
- 🎨 **Tailwind CSS** - Beautiful, responsive UI components
- 📳 **Haptic Feedback** - Vibration feedback for user interactions
- 🔄 **Service Worker** - Offline support and background sync
- ☁️ **Supabase Integration** - Backend database and authentication
- 🚀 **Vercel Hosting** - One-click deployment

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/vanthadeth/hig-copilot.git
cd hig-copilot
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add your environment variables in Vercel project settings
4. Deploy!

## PWA Installation

### On iOS
1. Open Safari
2. Tap the Share button
3. Select "Add to Home Screen"

### On Android
1. Open Chrome
2. Tap the menu (three dots)
3. Select "Install app" or "Add to Home screen"

## Haptic Feedback

The app includes haptic feedback utilities:

```typescript
import { triggerHapticFeedback } from '@/lib/haptics';

// Trigger haptic feedback
triggerHapticFeedback('medium'); // 'light', 'medium', 'heavy', 'success', 'warning', 'error'
```

## Project Structure

```
.
├── pages/              # Next.js pages and API routes
├── styles/             # Global CSS and Tailwind configuration
├── lib/                # Utility functions (haptics, etc.)
├── public/             # Static assets and PWA manifest
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.js      # Next.js and PWA configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [next-pwa](https://github.com/shadowwalker/next-pwa) - PWA plugin for Next.js
- [Supabase](https://supabase.com/) - Backend as a Service
- [Vercel](https://vercel.com/) - Hosting platform

## License

MIT

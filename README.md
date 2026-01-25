# Navaneeth KV - Creative Developer Portfolio

A high-end, immersive 3D portfolio showcasing expertise as a Full Stack MERN Developer & Creative Technologist with 5+ years of experience.

## ✨ Features

- **🎨 Immersive 3D Hero**: Interactive Three.js background with floating geometric shapes and particle system
- **✍️ Premium Animations**: GSAP-powered smooth animations and scroll effects
- **🖱️ Custom Cursor**: Interactive cursor that responds to hover states
- **🌊 Smooth Scrolling**: Buttery-smooth scrolling with Lenis
- **📱 Responsive Design**: Mobile-first approach that works on all devices
- **🎯 Bento Grid Layout**: Modern asymmetric grid showcasing tech stack
- **🃏 Interactive Cards**: 3D tilt effect on project cards
- **🧲 Magnetic Buttons**: Buttons that follow cursor on hover
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Vite + React 18
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animation**: GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Outfit (Google Fonts)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/              # 3D hero section
│   ├── About/             # About section
│   ├── TechStack/         # Bento grid layout
│   ├── Projects/          # Project showcase
│   ├── Contact/           # Contact section
│   ├── CustomCursor.jsx   # Custom cursor
│   ├── SmoothScroll.jsx   # Smooth scroll wrapper
│   └── MagneticButton.jsx # Magnetic button
├── utils/
│   └── gsapAnimations.js  # GSAP utilities
├── App.jsx                # Main app
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎯 Customization

### Update Project Links
Edit `src/components/Projects/Projects.jsx`:
```javascript
link: 'https://your-project-url.com',
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
primary: {
  DEFAULT: '#00d9ff', // Change this
}
```

### Add Project Images
1. Save images to `public/assets/projects/`
2. Update `Projects.jsx` with image paths

### Update Social Links
Edit `src/components/Contact/Contact.jsx` with your social media URLs

## 🌐 Deployment

This project can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 📄 License

MIT License - feel free to use this portfolio as a template

## 👤 Author

**Navaneeth KV**
- Email: navaneethkv002@gmail.com
- GitHub: [@navaneethkv002](https://github.com/navaneethkv002)
- Location: Taliprambu, Kannur, India

---

Built with ❤️ using React, Three.js, GSAP & Tailwind CSS

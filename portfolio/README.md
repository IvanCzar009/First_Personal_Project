# Ivan Czar P. Lumanglas - Portfolio Website

A modern, professional portfolio website built with React and Vite, designed to showcase software engineering, web development, mobile development, and AI/ML projects.

## 🎨 Features

- **Modern Design**: Clean, professional UI inspired by leading tech companies
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and interactive elements
- **Dark Theme**: Easy on the eyes with carefully chosen color scheme
- **Fast Performance**: Built with Vite for instant development and optimized production builds
- **SEO Ready**: Semantic HTML and meta tags for better search engine visibility

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed on your system
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css        # All styling
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎯 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and key strengths
- **Skills**: Organized by categories (Web, Mobile, AI/ML, etc.)
- **Projects**: Portfolio showcase (ready for your projects)
- **Contact**: Contact form and email integration
- **Footer**: Copyright and navigation links

## ✏️ Customization

### Add Projects
Edit [src/components/Projects.jsx](src/components/Projects.jsx) and add your projects to the `projects` array:

```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://yourproject.com"
  }
]
```

### Update Skills
Edit [src/components/Skills.jsx](src/components/Skills.jsx) to modify the `skillCategories` array with your actual skills.

### Change Colors
Edit [src/styles/index.css](src/styles/index.css) at the `:root` section to customize the color scheme.

### Update Contact
The contact form sends emails via `mailto:` link. The email address is set in [src/components/Contact.jsx](src/components/Contact.jsx).

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically deploys on every push

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

## 📝 License

All rights reserved. © 2025 Ivan Czar P. Lumanglas

## 📧 Contact

For inquiries or collaboration opportunities:
- Email: ivanczarlumanglas486@gmail.com

---

**Happy coding! 🚀**

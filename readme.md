# Felipe Santarosa - Personal Website 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://felpssantarosa.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A modern, responsive personal portfolio website showcasing my work as a Backend Developer specializing in Node.js, TypeScript, and systems architecture.

## ✨ Features

- 🌐 **Multilingual Support** - Available in English and Portuguese
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- ⚡ **Fast Performance** - Lightweight vanilla JavaScript implementation
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- 🎯 **Accessibility Ready** - WCAG compliant design
- 🌙 **Reveal Animations** - Smooth scroll-triggered animations

## 🛠️ Tech Stack

| Technology             | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| **HTML5**              | Semantic markup and structure            |
| **CSS3**               | Modern styling with Flexbox/Grid         |
| **Vanilla JavaScript** | Interactive functionality and animations |
| **Vite**               | Build tool and development server        |
| **Font Awesome**       | Icon library                             |
| **Google Fonts**       | Typography (Inter & Fira Code)           |

## 📂 Project Structure

```
personal-website/
├── 📄 index.html              # Main HTML file
├── 📋 readme.md               # Project documentation
├── 📂 public/                 # Static assets served by Vite
│   ├── 📷 assets/
│   │   └── profile.webp       # Profile image
│   └── 🌍 locales/
│       ├── en-us.json         # English translations
│       └── pt-br.json         # Portuguese translations
├── 📜 scripts/
│   ├── locale.js              # Internationalization logic
│   ├── main.js                # Main application entry
│   └── revealOnScroll.js      # Scroll animations
└── 🎨 styles/
    ├── main.css               # Main stylesheet
    └── components/
        ├── footer.css         # Footer styles
        ├── hero.css           # Hero section styles
        ├── navigation.css     # Navigation styles
        ├── project-card.css   # Project card styles
        ├── skills.css         # Skills section styles
        └── social-buttons.css # Social media buttons
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/felpssantarosa/felpssantarosa.github.io.git
   cd felpssantarosa.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Visit** `http://localhost:3000` in your browser

### Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Internationalization

The website supports multiple languages through a custom i18n system:

- **English (en-us)** - Default language
- **Portuguese (pt-br)** - Brazilian Portuguese

### Adding New Languages

1. Create a new JSON file in `locales/` (e.g., `es-es.json`)
2. Copy the structure from existing locale files
3. Update the language selector in `scripts/locale.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- 📱 **Mobile**: < 768px
- 📲 **Tablet**: 768px - 1024px
- 💻 **Desktop**: > 1024px

## 🎯 Sections

- **🏠 Hero** - Introduction and profile image
- **👨‍💻 About** - Professional background and skills
- **🛠️ Skills** - Technical expertise and tools
- **💼 Projects** - Commercial project showcase
- **📧 Contact** - Social links and contact information

## 🚀 Deployment

This site is deployed using GitHub Pages with automated GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds the project with Vite
3. Deploys the built files to GitHub Pages
4. Visit [felpssantarosa.github.io](https://felpssantarosa.github.io)

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Vercel**: Connect GitHub repository (auto-detects Vite)
- **Firebase Hosting**: Use Firebase CLI with the `dist` folder

## ⚡ Vite Benefits

This project now uses Vite for development and building, providing:

- **🔥 Hot Module Replacement** - Instant updates during development
- **⚡ Fast Build Times** - Optimized bundling with Rollup
- **📦 Tree Shaking** - Removes unused code automatically
- **🔧 Modern JavaScript** - ES modules support out of the box
- **🏗️ Asset Optimization** - Automatic image and CSS optimization
- **🚀 Better Developer Experience** - Enhanced error reporting and debugging
- **📱 Legacy Browser Support** - Automatic polyfills for older browsers

## 🤝 Contributing

While this is a personal website, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

**Felipe Santarosa** - Backend Developer

- 🌐 **Website**: [felpssantarosa.github.io](https://felpssantarosa.github.io)
- 💼 **LinkedIn**: [Connect with me](https://linkedin.com/in/felpssantarosa)
- 📧 **Email**: [Get in touch](mailto:contact@felipesantarosa.com)
- 🐙 **GitHub**: [@felpssantarosa](https://github.com/felpssantarosa)

---

<div align="center">
  <p>Made with ❤️ by Felipe Santarosa</p>
  <p>⭐ Star this repo if you like it!</p>
</div>

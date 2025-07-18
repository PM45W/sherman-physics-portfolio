# Sherman Wong - Physics Portfolio

A modern, interactive physics portfolio website showcasing semiconductor research, circuit simulations, and interactive tools.

## 🚀 Features

### Interactive Tools
- **MOSFET Simulator** - Real-time semiconductor device simulation with interactive I-V curves
- **Circuit Builder** - Drag-and-drop circuit design tool with wire connections and analysis
- **Molecular Animation** - 3D molecular structure visualizations

### Portfolio Sections
- **Home** - Interactive landing page with animated elements
- **About** - Personal background and expertise
- **Research** - Academic publications and research projects
- **Contact** - Professional contact information

### Easter Eggs
- **Ferrari F1 Cursor** - Press 'F' to toggle a Ferrari-themed cursor
- **Konami Code Game** - Enter the classic Konami code (↑↑↓↓←→←→BA) for a hidden Ferrari racing game

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling with animations
- **Framer Motion** - Advanced animations and transitions
- **Recharts** - Interactive data visualization
- **Jest & React Testing Library** - Comprehensive testing suite

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sherman-physics-portfolio.git
cd sherman-physics-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🧪 Testing

The project includes comprehensive tests for the Circuit Builder functionality:

```bash
npm test
```

Tests cover:
- Component rendering
- Drag and drop functionality
- Wire connection logic
- Circuit analysis
- User interactions

## 🎨 Key Components

### Circuit Builder
- Interactive drag-and-drop interface
- Real-time wire connections
- Circuit analysis and simulation
- Component property editing

### MOSFET Simulator
- Interactive I-V curve plotting
- Real-time parameter adjustment
- Educational semiconductor physics

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### GitHub Pages
1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm install -g gh-pages
gh-pages -d build
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── LoadingScreen.js
│   ├── EasterEgg.js
│   └── ...
├── pages/              # Main page components
│   ├── Home.js
│   ├── About.js
│   ├── CircuitBuilder.js
│   ├── MOSFETSimulator.js
│   └── ...
├── tests/              # Test files
│   └── CircuitBuilderTest.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Features in Detail

### Circuit Builder
- **Component Palette**: Resistors, capacitors, voltage sources, MOSFETs, etc.
- **Wire Connections**: Click-to-connect system with visual feedback
- **Circuit Analysis**: Real-time calculation of resistance, current, and power
- **Property Editor**: Modify component values and positions

### MOSFET Simulator
- **Interactive Plots**: Real-time I-V characteristic curves
- **Parameter Control**: Adjust gate voltage, drain voltage, and device parameters
- **Educational Content**: Learn semiconductor physics through interaction

## 🐛 Known Issues

- Some styled-components warnings in development (cosmetic only)
- Mobile touch interactions may need refinement for complex circuits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sherman Wong**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

## 🙏 Acknowledgments

- React team for the amazing framework
- Styled Components for elegant styling solutions
- The physics and semiconductor research community
- All contributors and testers

---

⭐ Star this repository if you found it helpful!
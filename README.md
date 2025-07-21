# TechCorp - Modern Business Website

A modern, responsive business website built with React and Tailwind CSS for a technology company specializing in AI solutions, web development, and data analytics.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects, form validation, and dynamic content
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Services**: Showcase of AI Chatbots, AI Agents, Web Development, and Data Analytics
3. **Portfolio**: Project showcase with filtering capabilities
4. **About Us**: Company story, values, and team information
5. **Contact**: Contact form with validation and business information
6. **Footer**: Links, social media, and company information

## 🛠️ Technologies Used

- **React 19**: Latest version with TypeScript support
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Type-safe JavaScript development
- **React Hooks**: State management and side effects
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tech-company-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Portfolio.tsx      # Portfolio/projects
│   ├── About.tsx          # About us section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer component
├── App.tsx                # Main application component
├── App.css               # Custom styles
├── index.css             # Tailwind CSS imports
└── index.tsx             # Application entry point
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue shades (#3b82f6, #2563eb, etc.)
- **Secondary**: Gray shades (#64748b, #475569, etc.)

### Content
All content is easily customizable by editing the component files:
- Company name and branding
- Service descriptions and features
- Portfolio projects
- Team information
- Contact details

### Images
Replace placeholder images with your own:
- Hero background images
- Portfolio project images
- Team member photos
- Company logo

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **GitHub Pages**: Use the `gh-pages` package

## 🔧 Configuration

### Tailwind CSS
The project includes a custom Tailwind configuration with:
- Custom color palette
- Extended typography
- Custom animations
- Responsive utilities

### Form Handling
The contact form includes:
- Form validation
- Loading states
- Success/error messages
- Email integration (requires backend setup)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@techcorp.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using React and Tailwind CSS**

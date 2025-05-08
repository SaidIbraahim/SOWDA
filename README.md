# SOWDA - Somali Women Development Agency Website

A modern, responsive website for the Somali Women Development Agency (SOWDA), built with React and optimized for performance and SEO.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design optimized for all devices
- **SEO Optimized**: Built-in SEO components and meta tags
- **Performance**: Lazy loading images and optimized assets
- **Analytics**: Google Analytics 4 integration
- **Accessibility**: WCAG 2.1 compliant components
- **Internationalization**: Ready for multiple languages

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sowda.git
cd sowda
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
sowda/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components
│   │   ├── common/     # Shared components
│   │   ├── layout/     # Layout components
│   │   └── utils/      # Utility components
│   ├── data/           # Static data and content
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Public assets
└── scripts/            # Build and optimization scripts
```

## 🛠️ Key Components

### 1. SEO Component
```jsx
import SEO from '../components/common/SEO';

<SEO 
  title="Page Title"
  description="Page description"
  structuredData={schema}
/>
```

### 2. LazyImage Component
```jsx
import LazyImage from '../components/common/LazyImage';

<LazyImage
  src={imageSource}
  alt="Descriptive alt text"
  className="w-full h-48 object-cover"
  priority={true}
/>
```

### 3. DonateButton Component
```jsx
import DonateButton from '../components/common/DonateButton';

<DonateButton 
  text="Donate Now"
  url="https://gofund.me/32716c10"
/>
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_GA_TRACKING_ID=your-ga-tracking-id
VITE_API_URL=your-api-url
```

### Analytics Setup
The project uses Google Analytics 4. Configure your tracking ID in the environment variables.

## 📱 Responsive Design

The website is built with a mobile-first approach using Tailwind CSS:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Styling

The project uses Tailwind CSS for styling. Key color variables:
```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f5f5f5;
  --accent-color: #e74c3c;
  --text-color: #333;
}
```

## 🚀 Performance Optimization

1. **Image Optimization**
   - Lazy loading for images below the fold
   - Priority loading for above-the-fold images
   - WebP format with fallbacks

2. **Code Splitting**
   - Route-based code splitting
   - Component lazy loading

3. **Caching**
   - Static asset caching
   - Service worker for offline support

## 📊 Analytics

The project includes:
- Page view tracking
- Event tracking
- User behavior analysis
- Performance monitoring

## 🔍 SEO Features

1. **Meta Tags**
   - Dynamic title and description
   - Open Graph tags
   - Twitter cards

2. **Structured Data**
   - Organization schema
   - BreadcrumbList schema
   - Article schema

3. **Technical SEO**
   - Sitemap generation
   - robots.txt
   - Canonical URLs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

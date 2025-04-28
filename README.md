# SOWDA - Somali Women Development Agency Website

This is the official website for the Somali Women Development Agency (SOWDA), a grassroots organization making an impact across Somalia through various programs.

## Features

- Responsive design using TailwindCSS
- Modern React components
- Image gallery with OneDrive integration
- Contact and support forms
- Detailed information about programs and initiatives

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Icons**: React Icons
- **Deployment**: Deployable to Vercel or Netlify

## Project Structure

```
sowda/
├── public/               # Static files
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── ui/           # UI components
│   ├── data/             # Data files (gallery images)
│   └── pages/            # Page components
├── index.html            # HTML entry point
└── package.json          # Dependencies and scripts
```

## Setup and Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/sowda-website.git
   cd sowda-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Gallery Configuration

The gallery uses OneDrive links to display images. You can update these links by editing the `src/data/galleryData.js` file.

## Deployment

This project can be easily deployed to Vercel or Netlify:

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

### Netlify Deployment

```bash
npm install -g netlify-cli
netlify deploy
```

## Image Optimization

For optimal performance, we use several image optimization techniques:

### 1. Run Image Optimization Script

Before adding new images to the project, optimize them with:

```bash
# Install dependencies (first time only)
npm install sharp glob --save-dev

# Run the optimization script
node scripts/optimizeImages.js
```

This will:
- Create optimized JPG/PNG versions
- Create WebP versions (better compression, modern browsers)
- Create AVIF versions (best compression, newer browsers)

### 2. Use WebP/AVIF formats

In your components, use the optimized formats:

```js
// Instead of this
import image from '../assets/images/example.jpg';

// Use this for better performance
import image from '../assets/images/example.webp';
```

### 3. ImageComponent Best Practices

Always use the `ImageComponent` for images, which provides:
- Lazy loading
- Placeholder during loading
- Priority loading for above-the-fold images

```jsx
import ImageComponent from '../components/common/ImageComponent';
import { ExampleImage } from '../assets/images';

// Regular image (lazy loaded)
<ImageComponent 
  src={ExampleImage} 
  alt="Description of image" 
  className="h-64 w-full" 
/>

// Priority image (above the fold)
<ImageComponent 
  src={ExampleImage} 
  alt="Description of image" 
  className="h-64 w-full"
  priority={true}
/>
```

For the best user experience, keep image file sizes small and use appropriate dimensions.

## License

All rights reserved by SOWDA.

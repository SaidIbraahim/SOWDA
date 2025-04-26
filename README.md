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

## License

All rights reserved by SOWDA.

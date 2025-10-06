# Setup Instructions for Opek Moving Nuxt.js Website

## ⚠️ Important: Asset Setup

Before running the development server, you need to move your image assets to the correct location.

### Move Assets to Public Folder

The images in the `assets/` folder need to be copied to the `public/assets/` folder:

1. **Create the public/assets directory** (if it doesn't exist):
   ```bash
   mkdir -p public/assets
   ```

2. **Copy the images**:
   - Copy `assets/Opek.png` → `public/assets/Opek.png`
   - Copy `assets/opek-logo.png` → `public/assets/opek-logo.png`

   On Windows (PowerShell):
   ```powershell
   # Create public/assets directory
   New-Item -ItemType Directory -Force -Path public/assets

   # Copy images
   Copy-Item assets/Opek.png public/assets/Opek.png
   Copy-Item assets/opek-logo.png public/assets/opek-logo.png
   ```

   On macOS/Linux:
   ```bash
   mkdir -p public/assets
   cp assets/Opek.png public/assets/Opek.png
   cp assets/opek-logo.png public/assets/opek-logo.png
   ```

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Move assets** (see above)

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📋 What Was Converted

The original HTML site has been converted to a modern Nuxt.js application:

### Original Files (Keep for Reference)
- `index.html` - Original homepage
- `commercial.html` - Original commercial page
- `residential.html` - Original residential page
- `packing.html` - Original packing page

### New Nuxt Files
- `pages/index.vue` - New homepage (replaces index.html)
- `components/` - Modular Vue components
- `assets/css/main.css` - Tailwind CSS styles
- `nuxt.config.ts` - Nuxt configuration

## 🎨 Customization Guide

### Update Contact Information

1. **Phone Number**: Search for `(123) 456-7890` and replace in:
   - `components/TheHeader.vue`
   - `components/TheFooter.vue`
   - `components/MobileFAB.vue`

2. **Email**: Search for `info@opekmoving.com` and replace in:
   - `components/TheFooter.vue`

### Modify Content

- **Services**: Edit `components/ServicesSection.vue`
- **Reviews**: Edit `components/ReviewsSection.vue`
- **FAQs**: Edit `components/FAQSection.vue`
- **About Section**: Edit `components/AboutSection.vue`
- **Service Areas**: Edit `components/ServiceAreasSection.vue`

### Change Colors

Edit `tailwind.config.js` to update the brand colors:
```js
colors: {
  brand: {
    500: '#0ea05a',  // Primary green
    600: '#0a8a4c',  // Darker green
    // ... etc
  }
}
```

## 🏗️ Building for Production

### Generate Static Site
```bash
npm run generate
```

This creates a `dist/` folder with static HTML files you can upload to any hosting service.

### Build for Server Deployment
```bash
npm run build
npm run preview  # Test the build locally
```

## 📦 Deployment Options

- **Vercel**: `npm run generate` then drag/drop `dist` folder
- **Netlify**: Connect your Git repo or drag/drop `dist` folder  
- **Traditional Hosting**: Upload contents of `dist` folder via FTP

## 🐛 Troubleshooting

### Images Not Showing?
- Make sure images are in `public/assets/` folder
- Check browser console for 404 errors
- Verify image paths start with `/assets/` (not `./assets/`)

### Dev Server Won't Start?
- Delete `node_modules` and `.nuxt` folders
- Run `npm install` again
- Make sure you're using Node.js 18+

### CSS Not Loading?
- Check that `assets/css/main.css` exists
- Verify `nuxt.config.ts` has correct CSS path
- Try deleting `.nuxt` folder and restart dev server

## 📞 Need Help?

If you encounter any issues:
1. Check the Nuxt 3 documentation: https://nuxt.com/docs
2. Check Tailwind CSS docs: https://tailwindcss.com/docs
3. Review Vue 3 documentation: https://vuejs.org/guide/

---

**Enjoy your new modern Nuxt.js website! 🎉**

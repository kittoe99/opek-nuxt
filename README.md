# Opek Moving LLC - Nuxt.js Website

A modern, responsive moving company website built with Nuxt 3 and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Nuxt 3, Vue 3, and Tailwind CSS
- **Fully Responsive**: Mobile-first design with optimized layouts for all devices
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Ready**: Meta tags and semantic HTML for better search engine visibility
- **Interactive Components**: Smooth animations and user-friendly interactions
- **Component-Based**: Modular, reusable Vue components

## 📦 Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind directives
├── components/
│   ├── TheHeader.vue         # Site header with navigation
│   ├── TheFooter.vue         # Site footer
│   ├── MobileFAB.vue         # Mobile floating action button
│   ├── SMSQuoteForm.vue      # SMS instant pricing form
│   ├── ProcessSection.vue    # Moving process section
│   ├── ServiceAreasSection.vue
│   ├── ServicesSection.vue   # Services overview
│   ├── AboutSection.vue      # About company section
│   ├── ReviewsSection.vue    # Customer testimonials
│   ├── FAQSection.vue        # Frequently asked questions
│   ├── QuoteFormSection.vue  # Quote request form
│   ├── ResidentialFAQ.vue    # Residential moving FAQs
│   ├── CommercialFAQ.vue     # Commercial moving FAQs
│   └── PackingFAQ.vue        # Packing services FAQs
├── pages/
│   ├── index.vue             # Homepage
│   ├── residential.vue       # Residential moving page
│   ├── commercial.vue        # Commercial moving page
│   └── packing.vue           # Packing services page
├── public/
│   └── assets/               # Static assets (images, logos)
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies

```

## 🛠️ Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Add your assets**:
   - Place your logo at `public/assets/opek-logo.png`
   - Place your hero image at `public/assets/Opek.png`

3. **Start development server**:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors

The brand colors are defined in `tailwind.config.js`:

```js
colors: {
  brand: {
    50: '#e9fbf1',
    100: '#c9f5de',
    // ... more shades
    900: '#034428'
  }
}
```

### Fonts

The site uses:
- **Manrope** for body text
- **Poppins** for headings

These are loaded from Google Fonts via the `nuxt.config.ts` file.

### Content

Update the content in each component file:
- Contact information: `components/TheFooter.vue` and `components/TheHeader.vue`
- Services: `components/ServicesSection.vue`
- Reviews: `components/ReviewsSection.vue`
- FAQs: `components/FAQSection.vue`

## 🌐 Deployment

### Static Hosting (Netlify, Vercel, etc.)

```bash
npm run generate
```

This creates a `dist` folder with static files ready to deploy.

### Server Hosting

```bash
npm run build
npm run preview
```

## 📱 Mobile Features

- **Floating Action Button (FAB)**: Quick access to call and booking on mobile
- **Mobile Menu**: Touch-friendly navigation
- **Responsive Forms**: Optimized for mobile input

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support

## 📄 License

Copyright © 2025 Opek Moving LLC. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Phone: (123) 456-7890
- Email: info@opekmoving.com

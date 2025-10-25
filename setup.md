# Twinkle Health Foundation Website Setup

## Quick Start Guide

### 1. Install Dependencies
```bash
npm install react-router-dom lucide-react
```

### 2. Start Development Server
```bash
npm start
```

### 3. Open in Browser
Navigate to `http://localhost:3000` to view the website.

## Project Structure

```
twinkle-health-foundation/
├── public/
│   ├── index.html
│   └── Images/ (logo and other assets)
├── src/
│   └── index.js
├── components/
│   ├── Header.js & Header.css
│   ├── Footer.js & Footer.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Services.js & Services.css
│   ├── Blog.js & Blog.css
│   ├── FAQ.js & FAQ.css
│   └── GetInvolved.js & GetInvolved.css
├── pages/
│   ├── Home.js
│   ├── About.js & AboutPage.css
│   ├── Services.js & ServicesPage.css
│   ├── Blog.js & BlogPage.css
│   ├── BlogPost.js & BlogPost.css
│   ├── Contact.js & ContactPage.css
│   ├── GetInvolved.js & GetInvolvedPage.css
│   ├── Events.js & EventsPage.css
│   └── FAQ.js & FAQPage.css
├── App.js
├── App.css
├── package.json
└── README.md
```

## Features Implemented

✅ **Multi-page React Application** with React Router navigation
✅ **Responsive Design** optimized for all devices
✅ **Modern UI/UX** with professional healthcare design
✅ **Blog System** with article listing and individual post pages
✅ **Interactive Components** including carousels, FAQ accordions, and forms
✅ **SEO Optimized** with proper meta tags and structured data
✅ **Accessibility Features** with ARIA labels and keyboard navigation

## Pages Available

- **Home** (`/`) - Hero section, services carousel, blog preview, FAQ, and get involved
- **About** (`/about`) - Mission, vision, team, timeline, and organizational story
- **Services** (`/services`) - Detailed service descriptions and process information
- **Blog** (`/blog`) - Article listing with search, filtering, and categorization
- **Blog Post** (`/blog/:slug`) - Individual article pages with related content
- **Get Involved** (`/get-involved`) - Volunteer, donation, and partnership opportunities
- **Contact** (`/contact`) - Contact forms, location information, and office details
- **Events** (`/events`) - Event calendar, registration, and past events gallery
- **FAQ** (`/faq`) - Frequently asked questions with interactive accordion

## Key Features

### Services Section
- Interactive carousel with 6 healthcare services
- Responsive grid layout (3 cards desktop, 2 tablet, 1 mobile)
- Smooth transitions and hover effects

### Blog System
- Article listing with search and filtering
- Category-based organization
- Individual blog post pages with related content
- Author information and social sharing

### FAQ Section
- Interactive accordion interface
- Smooth animations and transitions
- Keyboard accessibility support

### Contact Information
- Multiple contact methods (phone, email, social media)
- Location information for Accra, Ghana
- Professional contact forms

## Content

The website features comprehensive content about:

- **6 Core Services**: Health Education Through Drama, Free Medical Services, Community Needs Support, Livelihood Empowerment, Clean Clothing Drive, Focus Group Discussions
- **Contact Information**: 054 348 3159, 059 862 5292, info@twinklehealth.org
- **Location**: Accra, Greater Accra, Ghana
- **Social Media**: @twinklehealthfoundation across platforms

## Customization

### Colors
The website uses a consistent color scheme defined in CSS variables:
- Primary: #2D8B6B (Teal)
- Secondary: #FFD700 (Gold)
- Text Dark: #1a1a1a
- Text Light: #666666
- Background Light: #f8f9fa

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes with proper line heights
- Consistent typography hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Contact

For questions about this website or Twinkle Health Foundation:

- **Phone**: 054 348 3159 / 059 862 5292
- **Email**: info@twinklehealth.org
- **Location**: Accra, Greater Accra, Ghana
- **Social Media**: @twinklehealthfoundation

---

Built with ❤️ for community health and empowerment in Ghana.



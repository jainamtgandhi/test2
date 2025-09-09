# Hey It's Jainam - Portfolio Website

A modern, accessible portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This site showcases product marketing expertise and services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Accessibility First**: WCAG AA compliant with semantic HTML and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance**: Optimized images, lazy loading, and fast loading times
- **Production Ready**: Deploy-ready with Vercel/GitHub Pages support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page routes
│   │   └── [slug]/        # Dynamic page route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.txt         # Robots.txt
│   └── sitemap.xml        # Sitemap
├── components/            # Reusable components
│   ├── SiteHeader.tsx     # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero
│   ├── SectionCard.tsx    # Service cards
│   ├── CaseStudyCard.tsx  # Case study display
│   ├── TestimonialCard.tsx # Testimonial display
│   ├── CTASection.tsx     # Call-to-action section
│   ├── PageHeader.tsx     # Page title/description
│   └── PageTemplate.tsx   # Page content template
├── lib/                   # Utilities and config
│   └── config.ts          # Site configuration
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Content Updates

All content is managed in `src/lib/config.ts`. Update the following sections:

- **Site Configuration**: Update `siteConfig` object
- **Navigation**: Modify `navigationItems` array
- **Page Content**: Update `pageData` object for each service page
- **Social Links**: Update `socialLinks` array
- **Case Study**: Modify `caseStudy` object
- **Testimonial**: Update `testimonial` object

### Design System

The design system is defined in `tailwind.config.js`:

- **Colors**: Custom color palette in the `colors` section
- **Typography**: Font families and sizes in `fontFamily` and `fontSize`
- **Spacing**: Custom spacing and layout utilities

### Adding New Pages

1. Add the page data to `pageData` in `src/lib/config.ts`
2. Add the navigation item to `navigationItems` array
3. The page will be automatically generated at the specified route

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS variables are defined in `:root` selector

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### GitHub Pages

1. Build the project: `npm run build`
2. Export static files: `npm run export`
3. Deploy the `out` folder to GitHub Pages

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://heyitsjainam.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Configuration

Update SEO settings in `src/app/layout.tsx`:
- Meta tags
- Open Graph data
- Twitter Cards
- Structured data (JSON-LD)

### Analytics

Add Google Analytics by updating the `NEXT_PUBLIC_GA_ID` environment variable and uncommenting the analytics code in `src/app/layout.tsx`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design System

### Colors
- Primary: #2563EB (Blue 600)
- Primary Hover: #1D4ED8 (Blue 700)
- Accent: #F59E0B (Amber 500)
- Surface: #0B1220 (Rich Ink)
- Card Surface: #0F172A (Slate 900)

### Typography
- Headings: Poppins (600/700)
- Body: Inter (400/500)

### Spacing
- Container: max-w-7xl (homepage), max-w-6xl (pages)
- Section padding: py-16 (mobile), py-24 (desktop)
- Grid gaps: 16px (mobile), 24px (tablet), 32px (desktop)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please contact:
- Email: hi@heyitsjainam.com
- LinkedIn: [Jainam Gandhi](https://www.linkedin.com/in/jainamtgandhi)

---

Built with ❤️ by Jainam Gandhi

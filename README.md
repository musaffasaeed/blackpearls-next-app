# Black Pearls Contracting - Professional MEP Construction Website

A modern, responsive, and SEO-optimized website for Black Pearls Contracting, a leading MEP (Mechanical, Electrical, Plumbing) contractor in Saudi Arabia.

## 🚀 Features

### SEO Optimization

- **Comprehensive Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data (JSON-LD)**: Organization schema for better search engine understanding
- **Sitemap.xml**: Complete sitemap for search engine crawling
- **Robots.txt**: Proper crawling instructions for search engines
- **Favicon & App Icons**: Multiple sizes for different devices
- **PWA Manifest**: Progressive Web App capabilities
- **Performance Optimization**: DNS prefetching, image optimization

### Technical Features

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **Image Optimization**: Next.js Image component with lazy loading
- **Modern UI Components**: Shadcn/ui component library

### Content Sections

- **Hero Section**: Dynamic background slider with company introduction
- **About Us**: Company history and expertise
- **Services**: MEP services showcase (HVAC, Electrical, Fire Safety, Plumbing)
- **Projects Gallery**: Portfolio of completed projects
- **Team**: Professional team members
- **Testimonials**: Client feedback and reviews
- **Partners**: Trusted business partners
- **Contact Form**: Lead generation and inquiry form

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd blackpearls-next-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_SITE_URL=https://blackpearls.sa
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
   ```

4. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 SEO Configuration

### Meta Tags

The website includes comprehensive SEO meta tags:

- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Geographic and business information
- Mobile optimization tags

### Structured Data

JSON-LD structured data includes:

- Organization information
- Service catalog
- Contact information
- Business details

### Files Created for SEO

- `public/favicon.ico` - Website favicon
- `public/apple-touch-icon.png` - Apple touch icon
- `public/manifest.json` - PWA manifest
- `public/robots.txt` - Search engine crawling rules
- `public/sitemap.xml` - Website sitemap

## 🚀 Production Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### SEO Checklist for Production

- [ ] Update `metadataBase` URL in `layout.tsx`
- [ ] Add Google Analytics ID
- [ ] Update verification codes in metadata
- [ ] Test all meta tags with SEO tools
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google's Rich Results Test

## 🔧 Customization

### Updating Content

- **Company Information**: Update in `src/app/layout.tsx` structured data
- **Services**: Modify in `src/components/Services.tsx`
- **Team Members**: Update in `src/components/Team.tsx`
- **Projects**: Add/remove in `src/components/Projects.tsx`

### Styling

- **Colors**: Update in `tailwind.config.ts`
- **Fonts**: Modify in `src/app/layout.tsx`
- **Components**: Customize in `src/components/ui/`

### Images

- **Hero Images**: Replace in `public/images/`
- **Service Images**: Update in `src/assets/assets/`
- **Team Photos**: Replace in `src/components/Team.tsx`

## 📊 Performance Optimization

### Image Optimization

- All images use Next.js Image component
- Automatic WebP/AVIF format serving
- Lazy loading for below-the-fold images
- Responsive image sizing

### Code Optimization

- Tree shaking for unused code
- Automatic code splitting
- Static generation where possible
- Optimized bundle size

## 🔍 SEO Tools & Testing

### Recommended Tools

- **Google Search Console**: Monitor search performance
- **Google PageSpeed Insights**: Check performance scores
- **Lighthouse**: Comprehensive audit
- **Rich Results Test**: Validate structured data
- **Open Graph Debugger**: Test social media previews

### Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: All metrics in "Good" range
- **Mobile Performance**: Optimized for mobile devices

## 📞 Support & Maintenance

### Regular Updates

- Update dependencies monthly
- Monitor Core Web Vitals
- Check for broken links
- Update content regularly
- Monitor search engine rankings

### Contact Information

- **Email**: info@blackpearls.sa
- **Phone**: +966 XX XXX XXXX
- **Location**: Riyadh, Saudi Arabia

## 📄 License

This project is proprietary to Black Pearls Contracting. All rights reserved.

---

**Built with ❤️ for Black Pearls Contracting**

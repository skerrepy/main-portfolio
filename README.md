# Omar Hanafi - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Showcasing full-stack development expertise, professional experience, and freelance projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Automatic theme switching based on system preference
- **Smooth Animations**: Framer Motion powered scroll animations and interactions
- **SEO Optimized**: Proper metadata and structured content for search engines
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui inspired components

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── sections/            # Page sections
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── Experience.tsx   # Professional experience
│       ├── Portfolio.tsx    # Featured projects
│       ├── Services.tsx     # Services offered
│       ├── Mission.tsx      # Mission and values
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer with links
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/Hero.tsx` - Personal details and social links
- `src/components/sections/Experience.tsx` - Work experience timeline
- `src/components/sections/Portfolio.tsx` - Featured projects
- `src/app/layout.tsx` - SEO metadata

### Styling
- Modify `src/app/globals.css` for theme colors and global styles
- Update component files for specific styling changes

### Content
- Each section component contains its content and can be easily modified
- Add your own project images to the `public/` directory
- Update social media links in the Hero and Footer components

## 🎨 Design Features

- **Color Scheme**: Modern neutral palette with primary accent colors
- **Typography**: Geist font family for clean, readable text
- **Animations**: Smooth scroll animations and hover effects
- **Layout**: Grid-based responsive design
- **Accessibility**: Proper semantic HTML and ARIA labels

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes
- Touch-friendly interactions

## 🚀 Deployment

The portfolio is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Omar Hanafi**
- Email: omarhanaficontact@gmail.com
- GitHub: [@skerrepy](https://github.com/skerrepy)
- LinkedIn: [Omar Hanafi](https://www.linkedin.com/in/omar-hanafi-654489100/)

---

Built with ❤️ by Omar Hanafi

# San Pedro, Laguna - Official Website Revamp

A modern redesign of the City of San Pedro, Laguna government website. This project aims to improve the aesthetic and user experience of our local government website, making it easier for residents to access city services, news, events, and information.

## 🎯 Motivation

After seeing the beautiful and modern design of [BetterGov.ph](https://bettergov.ph/), an open-source government website initiative, I was inspired to revamp our local government website in San Pedro, Laguna. The current website needed improvements in terms of aesthetics and modern web design principles to better serve our community.

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Animated Sections** - Scroll-triggered animations using Framer Motion
- **Quick Access Cards** - Easy navigation to essential city services
- **Stats Counter** - Animated statistics showcasing city highlights
- **Professional Typography** - Using Inter and Poppins fonts for better readability
- **Accessibility** - Built with accessibility best practices in mind

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏗️ Project Structure

```
san-pedro-website/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # Animated statistics
│   ├── Highlights.tsx   # City commitments
│   ├── QuickLinks.tsx   # Service cards
│   ├── Footer.tsx       # Footer with social links
│   └── ScrollToTop.tsx  # Scroll to top button
└── public/              # Static assets
    └── logo.png         # City seal
```

## 🎨 Design Highlights

### Hero Section
- Gradient background with animated patterns
- Staggered fade-in animations
- Clear call-to-action buttons

### Service Cards
- Horizontal layout on mobile for better space utilization
- Color-coded icons for quick identification
- Hover effects with smooth transitions

### Stats Section
- Animated counter that triggers on scroll
- Displays key city metrics (population, barangays, events, etc.)

### Responsive Header
- Dynamic shadow and opacity on scroll
- Mobile drawer with city branding
- Smooth transitions between states

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd san-pedro-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🙏 Inspiration & Credits

- Inspired by [BetterGov.ph](https://bettergov.ph/) - An open-source initiative for modern government websites
- Built with love for the City of San Pedro, Laguna

## 📄 License

This is an open-source project created for educational and community purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

---

**Note:** This is a redesign project and is not officially affiliated with the City Government of San Pedro, Laguna. It serves as a demonstration of how modern web technologies can improve government website accessibility and user experience.

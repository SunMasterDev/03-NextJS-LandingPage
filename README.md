# Korean Fashion Store Landing Page

A modern, responsive clothing store landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern Korean fashion aesthetic with soft pastel colors
- 📱 Fully responsive design from mobile to desktop
- 🧭 Sticky navigation with smooth scrolling
- 🏠 Hero section with full-width background image
- 📂 Product categories (Women, Men, Accessories)
- 🛍️ Best-selling products grid
- 💬 Customer testimonials
- 📸 Instagram-style image gallery
- 📞 Contact information and social media links

## Tech Stack

- **Next.js 15** - React framework with app directory
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Clean, modern typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clothing-store-landing
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

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── Products.tsx
│   ├── Testimonials.tsx
│   ├── Gallery.tsx
│   └── Footer.tsx
├── types/
│   └── index.ts
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Color Palette

- **Korean Beige**: `#F5F5DC`
- **Korean Pink**: `#FFE4E1`
- **Korean Grey**: `#F8F8F8`
- **Korean Dark**: `#2C2C2C`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

The project uses placeholder images from [via.placeholder.com](https://via.placeholder.com). Replace these with your actual product images for production use.

## License

This project is open source and available under the [MIT License](LICENSE). 
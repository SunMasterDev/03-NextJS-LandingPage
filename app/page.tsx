import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
} 
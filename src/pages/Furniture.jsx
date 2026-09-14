import PageHero from '../components/PageHero';
import ProductGrid from '../components/ProductGrid';
import usePageTitle from '../hooks/usePageTitle';

export default function Furniture() {
  usePageTitle('Furniture | WellMart Kasaragod');
  return (
    <main>
      <PageHero
        eyebrow="Furniture"
        title="Sofas, dining, wardrobes, and beds."
        lede="See a sample of what we keep at the Golden Arcade showroom. WhatsApp us for current stock and size."
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid category="furniture" />
        </div>
      </section>
    </main>
  );
}

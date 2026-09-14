import PageHero from '../components/PageHero';
import ProductGrid from '../components/ProductGrid';
import usePageTitle from '../hooks/usePageTitle';

export default function Electronics() {
  usePageTitle('Electronics | WellMart Kasaragod');
  return (
    <main>
      <PageHero
        eyebrow="Electronics"
        title="TVs, ACs, appliances, and phones."
        lede="Home electronics from the WellMart showroom in Kasaragod. Ask on WhatsApp before you visit if you need a specific size."
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid category="electronics" />
        </div>
      </section>
    </main>
  );
}
